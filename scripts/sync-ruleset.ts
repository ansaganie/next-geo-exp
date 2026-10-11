import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

interface RulesetSummary {
  id: number;
  name: string;
  target: string;
  enforcement: string;
}

function runCommand(command: string): string {
  try {
    return execSync(command, { encoding: "utf-8", stdio: ["pipe", "pipe", "pipe"] }).trim();
  } catch (error: any) {
    const stderr = error.stderr ? error.stderr.toString() : error.message;
    throw new Error(`Command failed: ${command}\n${stderr}`);
  }
}

async function syncRuleset() {
  const rulesetPath = resolve(process.cwd(), ".github/rulesets/main-ruleset.json");
  console.log(`Reading ruleset configuration from ${rulesetPath}...`);

  const rulesetContent = readFileSync(rulesetPath, "utf-8");
  const rulesetConfig = JSON.parse(rulesetContent);
  const targetRulesetName = rulesetConfig.name;

  console.log("Resolving repository name via GitHub CLI...");
  const repoFullName = runCommand("gh repo view --json nameWithOwner -q .nameWithOwner");
  console.log(`Repository: ${repoFullName}`);

  console.log(`Fetching existing rulesets for ${repoFullName}...`);
  const existingRulesetsRaw = runCommand(`gh api repos/${repoFullName}/rulesets`);
  const existingRulesets: RulesetSummary[] = JSON.parse(existingRulesetsRaw);

  const existing = existingRulesets.find((r) => r.name === targetRulesetName);

  if (existing) {
    console.log(`Found existing ruleset '${targetRulesetName}' (ID: ${existing.id}). Updating...`);
    const updateResult = runCommand(
      `gh api --method PUT repos/${repoFullName}/rulesets/${existing.id} --input "${rulesetPath.replace(/\\/g, "/")}"`
    );
    const updated = JSON.parse(updateResult);
    console.log(`✅ Successfully updated ruleset '${updated.name}' (ID: ${updated.id})`);
    console.log(`🔗 HTML URL: https://github.com/${repoFullName}/rules/${updated.id}`);
  } else {
    console.log(`Ruleset '${targetRulesetName}' not found. Creating new ruleset...`);
    const createResult = runCommand(
      `gh api --method POST repos/${repoFullName}/rulesets --input "${rulesetPath.replace(/\\/g, "/")}"`
    );
    const created = JSON.parse(createResult);
    console.log(`✅ Successfully created ruleset '${created.name}' (ID: ${created.id})`);
    console.log(`🔗 HTML URL: https://github.com/${repoFullName}/rules/${created.id}`);
  }
}

syncRuleset().catch((err) => {
  console.error("❌ Failed to sync ruleset:", err.message);
  process.exit(1);
});
