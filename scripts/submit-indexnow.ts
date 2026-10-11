/**
 * Script to submit all website URLs to IndexNow (Yandex and Bing).
 * Usage: bun scripts/submit-indexnow.ts
 */

const DEFAULT_KEY = "c03dfd68a2134cb98b671a5ff6d8b2e1";
const HOST = "geoexploration.kz";

async function main() {
  const key = process.env.INDEXNOW_KEY || DEFAULT_KEY;
  const keyLocation = `https://${HOST}/${key}.txt`;

  const locales = ["kk", "ru", "en"] as const;
  const categories = [
    "drilling",
    "geotechnical",
    "geodesy",
    "hydrogeology",
    "equipment",
  ];

  const urlList: string[] = [];

  // Homepages
  locales.forEach((loc) => {
    const prefix = loc === "kk" ? "" : `/${loc}`;
    urlList.push(`https://${HOST}${prefix}`);
  });

  // Category pages
  categories.forEach((cat) => {
    locales.forEach((loc) => {
      const prefix = loc === "kk" ? "" : `/${loc}`;
      urlList.push(`https://${HOST}${prefix}/services/${cat}`);
    });
  });

  console.log(`[IndexNow] Preparing submission for ${urlList.length} URLs on host: ${HOST}`);
  console.log(`[IndexNow] Key: ${key}`);
  console.log(`[IndexNow] Key Location: ${keyLocation}`);
  console.log(`[IndexNow] URLs:\n  ${urlList.join("\n  ")}\n`);

  const payload = {
    host: HOST,
    key,
    keyLocation,
    urlList,
  };

  const endpoints = [
    { name: "Yandex", url: "https://yandex.com/indexnow" },
    { name: "IndexNow (Bing/Global)", url: "https://api.indexnow.org/indexnow" },
  ];

  for (const { name, url } of endpoints) {
    try {
      console.log(`[IndexNow] Submitting to ${name} (${url})...`);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "User-Agent": "GeoExploration-IndexNow/1.0",
        },
        body: JSON.stringify(payload),
      });

      const responseText = await response.text();
      console.log(
        `[IndexNow] Response from ${name}: HTTP ${response.status} ${response.statusText}${
          responseText ? ` - ${responseText}` : ""
        }`,
      );

      if (response.status === 200 || response.status === 202) {
        console.log(`[IndexNow] ✅ Successfully accepted by ${name}!`);
      } else {
        console.warn(
          `[IndexNow] ⚠️ Note: Status ${response.status}. Key file must be live on https://${HOST}/${key}.txt in production.`,
        );
      }
    } catch (err) {
      console.error(`[IndexNow] ❌ Error contacting ${name}:`, err);
    }
  }

  console.log(`\n[IndexNow] Done.`);
}

main().catch((err) => {
  console.error("[IndexNow] Fatal error:", err);
  process.exit(1);
});
