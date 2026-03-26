# Architecture

## Directory structure

```
elevate-website/
├── bun/
│   ├── download.sh          # Script to download the pinned Bun binary
│   ├── bun                  # The Bun binary (gitignored)
│   └── .gitignore
├── docs/
│   ├── README.md
│   ├── ARCHITECTURE.md      # This file
│   ├── CONTRIBUTING.md
│   └── STYLE.md
├── src/
│   ├── app.css              # Global styles — Tailwind import, @theme, @layer base
│   ├── app.d.ts             # SvelteKit App namespace declarations
│   ├── app.html             # Root HTML shell — SvelteKit injects into this
│   ├── lib/
│   │   └── components/
│   │       ├── Nav.svelte   # Fixed top navigation with mobile hamburger
│   │       └── Footer.svelte
│   └── routes/
│       ├── +layout.svelte   # Root layout — loads fonts, renders Nav + Footer
│       ├── +page.svelte     # Home (/)
│       ├── about/
│       │   └── +page.svelte
│       ├── contact/
│       │   └── +page.svelte
│       ├── services/
│       │   └── +page.svelte
│       └── work/
│           └── +page.svelte
├── .gitignore
├── biome.json
├── package.json
├── svelte.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## Key decisions

### `@sveltejs/adapter-vercel`

The site deploys to Vercel. `adapter-vercel` produces a Vercel-compatible output directory and
enables edge/serverless function support for any future server routes or API endpoints. No
`vercel.json` is needed for basic deploys — SvelteKit handles routing automatically.

### Tailwind CSS v4 via `@tailwindcss/vite`

Tailwind v4 drops the `tailwind.config.js` file in favour of a CSS-first approach. All theme
customisation lives in `src/app.css` inside an `@theme` block. This keeps configuration
co-located with the styles that use it and reduces the number of config files at the root.

Custom tokens defined in `@theme` (e.g. `--color-brand-600`, `--font-display`) become Tailwind
utilities automatically (`bg-brand-600`, `font-display`).

### Pinned Bun binary in `./bun/`

The `./bun/bun` binary is downloaded at a pinned version via `./bun/download.sh` rather than
installed globally. This ensures everyone on the team and every CI run uses the exact same
runtime, with no version drift. The binary is gitignored; run `./bun/download.sh` after cloning.

### Content co-location

Pages contain their content directly — there is no CMS or separate content layer yet. When
the volume of content grows (e.g. real case studies, team bios), move that data into
`src/lib/data/` as typed TypeScript modules and import from pages.

### No server routes yet

All pages are statically renderable. The contact form currently simulates submission
client-side with a TODO comment for wiring up a real backend (e.g. a `+page.server.ts` action
posting to an email API). When that is added, the relevant server action should live alongside
the page it serves (`src/routes/contact/+page.server.ts`).

---

## Component responsibilities

| Component        | Responsibility                                                             |
|------------------|----------------------------------------------------------------------------|
| `Nav.svelte`     | Fixed top navigation, logo, desktop links, mobile hamburger menu, nav spacer |
| `Footer.svelte`  | Brand identity, nav links, copyright line, location                        |

### When to extract a component

Extract a pattern into a shared component when it appears in **three or more places**. Two
similar blocks of markup are easier to read inline than to trace through an abstraction.
Premature extraction creates indirection without benefit.

When a component is extracted, place it in `src/lib/components/` and name it using TitleCase
(e.g. `ServiceCard.svelte`).
