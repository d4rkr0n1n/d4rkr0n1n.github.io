# DESIGN.md

Design system for the Mridul Roy portfolio. The look is a dark, phosphor-green terminal: dry humour, engineering confidence, no fluff. Use this file when adding or changing UI so new work matches what is already there.

## Principles

1. **Terminal first.** Everything should feel like a well-kept shell session: monospace body text, `/PATH`-style nav labels, `$` prompts, `//` comments, status dots.
2. **One accent.** Phosphor green (`#b5f66a`) is the only accent colour. Use it for emphasis, interactive states and the last word or punctuation of a headline. Don't add new hues.
3. **Dry copy, honest content.** Headlines are short and deadpan ("I MAKE SYSTEMS BEHAVE."). Project cards describe representative experience. Never invent clients, metrics or repo links.
4. **Quiet texture.** The grid background, noise and glow sit near the edge of perception (opacity 0.035–0.14). They add atmosphere and stay out of the way.
5. **Accessible by default.** Semantic sections, keyboard-reachable controls, `aria-*` on custom widgets, and respect for `prefers-reduced-motion`.

## Colour

Tokens are defined in `tailwind.config.ts` (`theme.colors`, which **replaces** Tailwind's default palette) and mirrored in `app/globals.css`.

| Token | Hex | Use |
|---|---|---|
| `void` | `#080b0b` | Page background, text on phosphor buttons |
| `surface` | `#0e1312` | Cards, mobile menu, terminal body |
| `line` | `#23302b` | Borders and dividers |
| `phosphor` | `#b5f66a` | Accent: labels, links, CTAs, highlights, selection |
| `faded` | `#89998e` | Secondary text, nav links |
| `cream` | `#eaf0e7` | Primary text |

### Supporting shades (used inline as arbitrary values)

| Purpose | Values |
|---|---|
| Alternate section bands | `#0b100d`, `#0f1612`, `#0d120f` (announcement bar) |
| Card / tag fills | `#101712`, `#151c18`, `#18241a`, `#101a12` (contact panel) |
| Stronger borders | `#2a382f`, `#344339`, `#35453a`, `#3a4b3e`, `#415344` |
| Body copy tiers (light → dim) | `#b5c1b8`, `#a0afa3`, `#95a99a`, `#8fa393`, `#879b8d`, `#799181`, `#687e70` |
| Terminal chrome | `#151b18` title bar, `#0b100e` status bar; dots `#e67d70` / `#dfba65` / `#85c47a`; warning text `#d3af73` |
| Phosphor hover | `#d1ff9e` |

If an arbitrary shade gets used in three or more places, promote it to a token in `tailwind.config.ts`.

### Alpha conventions
- Accent fills: `bg-phosphor/10`, `bg-phosphor/[.06]`
- Accent borders: `border-phosphor/30` to `/55`
- Glow: `shadow-glow` = `0 0 44px rgba(181,246,106,.12)`; `.glow-text` = `0 0 35px rgba(181,246,106,.26)`

## Typography

Loaded with `next/font/google` in `app/layout.tsx`.

| Role | Font | CSS var / class |
|---|---|---|
| Body, UI, labels, terminal | DM Mono (300/400/500) | `--font-mono`, `font-mono` (default on `body`) |
| Headlines, big numbers | Space Grotesk | `--font-sans`, `font-sans` |

### Scale and treatment
- **Hero H1:** `font-sans font-bold`, `text-[clamp(3.6rem,7vw,7rem)]`, `leading-[.94]`, `tracking-[-.085em]`, uppercase.
- **Section H2:** `font-sans text-4xl sm:text-6xl font-bold tracking-[-.06em]` to `[-.07em]`, uppercase. The second line or last word goes in `text-phosphor`.
- **Card H3:** `font-sans text-2xl font-bold tracking-[-.05em]`.
- **Body:** `text-sm`/`text-base`, generous `leading-7` to `leading-9`.
- **Micro labels:** `text-[9px]`–`text-[11px]`, uppercase, wide tracking (`tracking-[.1em]` to `[.24em]`).
- Headlines are tight (negative tracking) and labels are wide (positive tracking). Keep that contrast.

## Layout

- **Container:** `mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12`.
- **Section rhythm:** `py-28`. Alternate plain `bg-void` sections with banded `border-y border-line bg-[#0b100d]` sections.
- **Grids:** two columns at `lg` (asymmetric splits like `1.07fr_.93fr` and `.65fr_1.35fr`), three-up cards at `lg`, stats `grid-cols-2 md:grid-cols-4`.
- **Header:** sticky, `h-[74px]`, `bg-void/90 backdrop-blur-xl`. Full nav from `md` up, hamburger toggle below that.
- **Radius:** small and squared-off: `rounded-md` for buttons and chips, `rounded-lg` for cards, `rounded-xl` for the terminal and contact panel.

## Page structure

Order in `app/page.tsx`:

1. Announcement bar (`// ... //` joke line)
2. Sticky header: logo `M_` with a blinking cursor, `/ABOUT /WORK /EXPERIENCE /CONTACT`, availability dot, "INITIATE CONTACT" CTA that opens the contact modal
3. Hero (`#top`): headline and CTAs on the left, interactive `<Terminal/>` on the right
4. Stats strip
5. `01 / WHO AM I` (`#about`)
6. `02 / SELECTED SYSTEMS` (`#work`): project cards
7. `03 / THE TOOLBOX`: stack chips
8. `04 / CHANGELOG` (`#experience`): timeline
9. `05 / OPEN CONNECTION` (`#contact`): CTA panel
10. Footer with a live IST clock and a dim `// INSPIRED BY BERTRAM GILFOYLE` credit line (the only on-page reference)

New sections take the next number in the `NN / LABEL` convention via `.section-label`.

## Components and patterns

| Pattern | How it's built |
|---|---|
| **Primary button** | `rounded-md bg-phosphor px-6 py-4 text-[11px] font-bold text-void`, lifts on hover (`hover:-translate-y-1`) or lightens (`hover:bg-[#d1ff9e]`), trailing `ArrowUpRight` |
| **Secondary button** | `rounded-md border border-[#3a4b3e] px-6 py-4`, `hover:border-phosphor` |
| **Outline accent button** | `border border-phosphor text-phosphor`, fills on hover (`hover:bg-phosphor hover:text-void`) |
| **Text link** | `text-phosphor` with `border-b border-phosphor`, or `hover:text-phosphor` for muted links |
| **Section label** | `.section-label`: 10px mono, uppercase, `tracking-[.24em]`, phosphor |
| **Tag** | `.tag`: bordered chip, 10px, muted text |
| **Card** | `rounded-lg border border-line bg-[#101712] p-7`; on hover `-translate-y-1`, `border-phosphor/55`, `shadow-glow`. Icon tile at top left, oversized dim index number (`01`) at top right |
| **Shell card** | `.shell-card`: `border-line` + `bg-surface/80` |
| **Status dot** | `h-1.5 w-1.5 rounded-full bg-phosphor`, optionally `animate-pulse` |
| **Timeline** | `border-l` rail with ring dots (`border-2 border-phosphor`) placed with negative left offsets |
| **Terminal** | `components/Terminal.tsx`: macOS-style traffic lights, `role="log"` with `aria-live="polite"`, command map, `clear` resets history, unknown commands print `command not found` |
| **Modal** | `components/ContactModal.tsx`: `bg-void/80 backdrop-blur-sm` overlay, `.shell-card rounded-xl shadow-glow` panel with `animate-rise`, a terminal-style title bar (`~/mridul/contact`) and status bar (`esc to close` / `● listening`). Rows reuse the card icon tile and turn `hover:border-phosphor/55`. `role="dialog"` with `aria-modal`, focus trap, Escape and backdrop click close it, body scroll is locked |

Icons come from `lucide-react`, mostly 12–22px. Arrows (`ArrowUpRight`, `ArrowRight`) mark actions.

## Brand assets

- **Favicon** (`app/icon.svg`): the `M_` logo in phosphor on a `#0e1312` rounded square with a `phosphor/55` border. It's built to stay legible at 16px.
- **Link-preview image** (`app/og.png/route.tsx`, 1200×630): `void` background with the 52px grid, logo and domain on top, the hero headline with **SYSTEMS** and the period in phosphor, and a role line with an `● ONLINE` status at the bottom. It uses the default `next/og` font, since Space Grotesk isn't bundled.
- **Theme colour:** `#080b0b` (`viewport.themeColor`).

## Motion

Defined in `tailwind.config.ts`:

| Animation | Use |
|---|---|
| `animate-blink` | Cursor `_` in the logo (1s step-end) |
| `animate-rise` | Hero entrance (0.65s fade-up) |
| `animate-scan` | Available for scanline effects (8s linear) |
| `animate-pulse` | Availability dot |

Hover transitions are short colour, border or translate changes. The global `prefers-reduced-motion` rule in `globals.css` turns animations and transitions off. Don't bypass it.

## Voice

- Uppercase, terse, a little smug: "ZERO NONSENSE", "ALL SYSTEMS NOMINALLY OPERATIONAL."
- Pair every bold claim with a self-aware aside: "Everything is fine. That's suspicious."
- Use engineering metaphors for sections: changelog, deployments, open connection, toolbox.
- Avoid buzzwords, emoji, exclamation marks and anything that reads like marketing.

## Do / Don't

- **Do** reuse tokens and the utility classes in `globals.css` (`.section-label`, `.tag`, `.shell-card`, `.glow-text`, `.grid-bg`).
- **Do** keep the site dark-only (`color-scheme: dark`).
- **Don't** introduce a second accent colour, light mode, gradients beyond the subtle glows, or rounded-full pill buttons.
- **Don't** use show-specific assets, logos or quotes. The site is inspired by a sensibility and doesn't imitate a property.
