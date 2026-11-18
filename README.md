# Mridul Roy — Gilfoyle-inspired portfolio

A dark, terminal-forward, dry-humored personal portfolio inspired by Gilfoyle's engineering sensibility in *Silicon Valley* — not an official HBO site or an imitation of protected show assets.

## Stack
- Next.js 16 App Router + TypeScript
- Tailwind CSS 4
- Lucide React icons
- Google Fonts via `next/font`

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy

Push this directory to GitHub, import the repo into Vercel, and deploy with the default Next.js settings. Or run `npx vercel` if you have the Vercel CLI installed.

## Personalization

- `app/page.tsx`: hero text, experience, sample work, skills, links and contact.
- `components/Terminal.tsx`: terminal commands and replies.
- `app/globals.css`: visual polish, grid background and base styling.
- `tailwind.config.ts`: colors and font configuration.
- `app/layout.tsx`: metadata and fonts.

The site is based on the supplied résumé. The project cards describe *representative experience* rather than claiming separate finished client case studies, names, repository links or invented metrics. Add verified case studies when available.

## Accessibility

Supports reduced motion, keyboard navigation, semantic sections, accessible terminal input, and mobile menus.
