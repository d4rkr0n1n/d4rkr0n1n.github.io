<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project: d4rkr0n1n.github.io

Single-page, dark, terminal-themed portfolio for Mridul Roy. Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, deployed as a static export to GitHub Pages.

- **Full guidance:** [CLAUDE.md](./CLAUDE.md) (commands, structure, conventions, deployment notes).
- **Design system:** [DESIGN.md](./DESIGN.md). Read it before any UI change.

### Critical rules
- Verify every change with `npm run typecheck` and `npm run build`. There is no test suite.
- The site is a static export: no API routes, server actions, dynamic SSR or `next/image` optimisation.
- The project uses ES modules (`"type": "module"`). Config files must use `import`/`export`.
- Use the colour tokens in `tailwind.config.ts`. They replace Tailwind's default palette.
- Never invent clients, metrics, case studies or repo links.
- Keep the docs in sync with the code. Claude Code has a `sync-docs` skill for this in `.claude/skills/sync-docs/`.
