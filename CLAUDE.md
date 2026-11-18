# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

Personal portfolio for Mridul Roy (`d4rkr0n1n.github.io`): a single-page, dark, terminal-themed site. The visual language, tokens, components and copy voice are documented in **[DESIGN.md](./DESIGN.md)**. Read it before any UI change.

## Stack

- Next.js 16 (App Router), React 19, TypeScript (strict)
- Tailwind CSS 4 via `@tailwindcss/postcss`, using a legacy JS config loaded with `@config "../tailwind.config.ts"` in `app/globals.css`
- `lucide-react` icons, `next/font/google` (DM Mono and Space Grotesk)
- Path alias: `@/*` → repo root

## Commands

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck  # tsc --noEmit
npm run lint       # next lint
```

There is no test suite. Before you call a change done, run `npm run typecheck` and `npm run build`.

## Layout

```
app/
  layout.tsx    # metadata, fonts, <html>/<body>
  page.tsx      # the whole page: data arrays at top (stack, experiences, projects) + all sections
  globals.css   # Tailwind import, base styles, utility classes (.section-label, .tag, .shell-card, .grid-bg, .glow-text)
components/
  Terminal.tsx  # interactive terminal; commands live in the `commands` map
tailwind.config.ts  # colour tokens (void, surface, line, phosphor, faded, cream), fonts, keyframes
.github/workflows/
  nextjs.yml                      # deploy to GitHub Pages on push to main
  build-check-on-development.yml  # build check on push to development
```

## Conventions

- `app/page.tsx` is a client component (`"use client"`) with dense, mostly single-line JSX. Match the existing style instead of reformatting the whole file, and keep diffs focused.
- To edit content, change the data arrays at the top of `page.tsx` (`stack`, `experiences`, `projects`) or the `commands` map in `Terminal.tsx`. Keep the terminal output consistent with the page content.
- **Colours:** `theme.colors` in `tailwind.config.ts` replaces Tailwind's default palette, so default colour utilities such as `text-gray-500` may not exist. Use the tokens or the arbitrary hex values listed in DESIGN.md.
- New sections follow the `NN / LABEL` numbering, the container `mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12` and `py-28` rhythm.
- **Content integrity:** never invent clients, metrics, case studies or repo links. Project cards describe representative experience (see README).
- Don't use show-specific assets or quotes. The theme is "inspired by", not an imitation.
- Keep accessibility intact: `aria-label`s, `aria-expanded` on toggles, `role="log"` on the terminal, and the reduced-motion rule in `globals.css`.
- External links use `target="_blank" rel="noopener noreferrer"`.

## Deployment notes

- Production deploys to **GitHub Pages** through `.github/workflows/nextjs.yml` (Node 20). The README mentions Vercel, but Pages is what actually runs.
- `next.config.mjs` doesn't set `output: "export"`. The workflow relies on `actions/configure-pages` (`static_site_generator: next`) to inject static export settings and uploads `./out`. Don't add server-only features (API routes, server actions, dynamic SSR, `next/image` optimisation) because they will break the static export.
- `build-check-on-development.yml` is outdated: it uses Node 16 and `next export`, which was removed in recent Next.js versions. Expect it to fail until it's updated to match `nextjs.yml`.

## Git

- Default branch: `main`. Pushing to `main` deploys.
- Commit only when asked.
