## Related Issue

<!-- Link the issue(s) this PR resolves or contributes to -->
Closes #

## Summary

<!-- 
Provide a clear, high-signal view of the change. Use the smallest visual format that makes the point clear:
- Component/file tree (for structural changes or additions)
- Diff-sketch (for behavior/logic adjustments)
- Call-tree (for runtime flow)
- Mermaid diagram (for multi-party or async flows)
-->

## Evidence

<!-- Concrete before/after evidence (screenshots for visual UI changes, CLI/test output for backend/logic) -->
- **Before:** 
- **After:** 

## Merge Danger

- **Door:** <!-- [one-way | two-way] - Can this change be cheaply rolled back (two-way) or does it involve destructive/hard-to-reverse changes (one-way)? -->
- **Blast Radius:** <!-- [isolated | module | app-wide] - Scope of potential side effects or regressions -->

## Pre-Merge Checklist

- [ ] `bun run lint` passes without errors
- [ ] `bun run build` passes without errors
- [ ] Domain terms match glossary defined in [`CONTEXT.md`](../CONTEXT.md)
- [ ] Verified manually in local browser/dev server
