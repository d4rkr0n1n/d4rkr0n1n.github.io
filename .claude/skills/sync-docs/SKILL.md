---
name: sync-docs
description: Sync the project docs (README.md, AGENTS.md, CLAUDE.md, DESIGN.md) with the current code. Use after any change to features, components, styling, config, dependencies, scripts or workflows in this repo, before committing, or when the user says "update docs", "sync docs" or "update the README".
---

# Sync project docs

Bring `README.md`, `AGENTS.md`, `CLAUDE.md` and `DESIGN.md` back in line with the code. The code is the source of truth. Never document something you haven't verified in the repo.

## 1. Find what changed

```bash
git status --short
git diff HEAD --stat
git log --oneline -10
```

If the working tree is clean, compare against the last commit that touched the docs:

```bash
git log -1 --format=%H -- README.md CLAUDE.md DESIGN.md AGENTS.md
git diff <that-sha> --stat
```

Read the changed files. Also re-check these, since they drive most doc content:

- `package.json` (scripts, dependencies, `"type"`)
- `next.config.mjs`, `tailwind.config.ts`, `postcss.config.js`, `tsconfig.json`
- `app/layout.tsx` (metadata, fonts), `app/globals.css` (utility classes)
- `app/` and `components/` file list
- `.github/workflows/*.yml`

## 2. Decide which docs each change affects

| Change | README.md | CLAUDE.md | DESIGN.md | AGENTS.md |
|---|---|---|---|---|
| New or removed feature / section / component | Features, Personalization | Layout tree | Page structure, Components | Mirror CLAUDE.md |
| Colour, font, spacing, radius, animation, copy voice | — | — | Relevant section | — |
| New utility class in `globals.css` | — | Layout comment | Components, Do/Don't | — |
| Script, dependency, Node or module-format change | Stack, Run locally | Stack, Commands | — | Mirror CLAUDE.md |
| Workflow or deploy change | Deploy, badges | Deployment notes | — | Mirror CLAUDE.md |
| Metadata, favicon, OG image | Features | Layout tree | — | — |

## 3. Edit, following each file's rules

### README.md (for people visiting the repo)
- Keep the title, the two badges and the "Live" link at the top. The deploy badge must point to the workflow file that actually deploys `main` (currently `nextjs.yml`).
- Keep the content-integrity paragraph (representative experience, no invented metrics).
- Don't mention Gilfoyle or the show anywhere except the single small "Inspired by Bertram Gilfoyle" line at the very end. (The website has a matching one-line credit in the footer.)
- Keep the Project docs table accurate.

### CLAUDE.md (for Claude Code)
- Keep the sections: Project, Stack, Commands, Layout, Conventions, Deployment notes, Git.
- The Layout tree must list every file in `app/` and `components/` and the workflows.
- Remove deployment warnings once they're fixed, such as the outdated `build-check-on-development.yml` note.

### DESIGN.md (design system)
- Pull hex values, sizes and class names straight from the code. Don't round or rename them.
- When an arbitrary hex shows up in three or more places, mention it under Supporting shades.
- Keep the Principles, Voice and Do/Don't sections unless the user changes direction.

### AGENTS.md (for other AI agents)
- **Never edit or remove the `<!-- BEGIN:nextjs-agent-rules -->` … `<!-- END:nextjs-agent-rules -->` block.** `next dev` manages it and will re-create it.
- Below that block, keep a short project section that points to `CLAUDE.md` and `DESIGN.md` and restates the critical rules: verify with `npm run typecheck` and `npm run build`, static export only, no invented content, follow DESIGN.md. Don't copy CLAUDE.md wholesale.

## 4. Verify

- Every file path, script, class name and hex value you mention exists. Spot-check with Grep.
- Links between the docs resolve.
- Make minimal diffs: don't rewrite sections that are still accurate.
- Don't commit unless the user asks. Report which docs changed and why, in a few lines.
