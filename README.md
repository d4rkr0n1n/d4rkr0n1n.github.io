# Mridul Roy — Portfolio

[![Deploy to GitHub Pages](https://github.com/d4rkr0n1n/d4rkr0n1n.github.io/actions/workflows/nextjs.yml/badge.svg?branch=main)](https://github.com/d4rkr0n1n/d4rkr0n1n.github.io/actions/workflows/nextjs.yml)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fd4rkr0n1n.github.io&label=d4rkr0n1n.github.io&up_message=online&down_message=offline&style=flat&color=b5f66a&labelColor=080b0b)](https://d4rkr0n1n.github.io)

A dark, terminal-forward, dry-humored personal portfolio.

**Live:** https://d4rkr0n1n.github.io

## Stack
- Next.js 16 App Router + React 19 + TypeScript (strict)
- Tailwind CSS 4 (via `@tailwindcss/postcss`, JS config loaded with `@config`)
- Lucide React icons
- Google Fonts via `next/font` (DM Mono + Space Grotesk)
- ES modules throughout (`"type": "module"` in `package.json`)

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # tsc --noEmit
npm run build      # production build
```

If the dev server reports a module-format error after config changes, stop it, delete `.next/` and restart.

## Deploy

Every push to `main` builds and deploys the site to **GitHub Pages** through [`.github/workflows/nextjs.yml`](.github/workflows/nextjs.yml). `actions/configure-pages` injects the static-export settings at build time and the `out/` folder is published.

Because the site is a static export, avoid server-only features such as API routes, server actions, dynamic SSR and `next/image` optimisation.

## Features

- Interactive terminal in the hero (`help`, `about`, `skills`, `experience`, `projects`, `contact`, `sudo`, `clear`)
- **Initiate Contact** popup with Email, LinkedIn and Telegram links
- Favicon (`app/icon.svg`) and a generated 1200×630 link-preview image (`/og.png`) with Open Graph and Twitter/X tags
- Live IST clock in the footer and copy-email button in the contact section

## Personalization

- `app/page.tsx`: hero text, experience, sample work, skills, links and contact section.
- `components/Terminal.tsx`: terminal commands and replies.
- `components/ContactModal.tsx`: contact channels in the Initiate Contact popup.
- `app/layout.tsx`: metadata, Open Graph and Twitter/X tags, fonts.
- `app/og.png/route.tsx`: the link-preview image.
- `app/icon.svg`: the favicon.
- `app/globals.css`: visual polish, grid background and base styling.
- `tailwind.config.ts`: colors, fonts and animations.

The site is based on the supplied résumé. The project cards describe *representative experience* rather than claiming separate finished client case studies, names, repository links or invented metrics. Add verified case studies when available.

## Project docs

| File | Purpose |
|---|---|
| [`DESIGN.md`](DESIGN.md) | Design system: colours, type, layout, components, motion, voice |
| [`CLAUDE.md`](CLAUDE.md) | Guidance for Claude Code: commands, structure, conventions, deployment notes |
| [`AGENTS.md`](AGENTS.md) | Guidance for other AI coding agents (includes a block managed by `next dev`) |
| [`.claude/skills/sync-docs`](.claude/skills/sync-docs/SKILL.md) | Claude Code skill that brings all four docs back in line with the code |

## Accessibility

Supports reduced motion, keyboard navigation, semantic sections, accessible terminal input, mobile menus, and a contact dialog with focus trapping and Escape to close.

---

<sub>Inspired by Bertram Gilfoyle</sub>
