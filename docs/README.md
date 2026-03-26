# elevate-website

The official company website for Elevate Company Limited, served at [elevateco.dev](https://elevateco.dev).

This folder contains all documentation for the project:

- [ARCHITECTURE](./ARCHITECTURE.md) — directory structure, key decisions, and component responsibilities
- [CONTRIBUTING](./CONTRIBUTING.md) — how to work on this project day-to-day
- [STYLE](./STYLE.md) — naming conventions, formatting rules, and code patterns

---

## Stack

| Layer        | Choice                                    |
|--------------|-------------------------------------------|
| Framework    | SvelteKit 2                               |
| UI           | Svelte 5 (runes syntax only)              |
| Language     | TypeScript (strict mode)                  |
| Runtime      | Bun (pinned binary in `./bun/`)           |
| Styling      | Tailwind CSS v4 via `@tailwindcss/vite`   |
| Linter       | Biome                                     |
| Deployment   | Vercel via `@sveltejs/adapter-vercel`     |

---

## Quick start

```console
git clone https://github.com/Elevate-Company-Limited/elevate-website.git
cd elevate-website
./bun/download.sh
./bun/bun install
./bun/bun run dev
```

The dev server starts at [http://localhost:5173](http://localhost:5173).

---

## Scripts

| Script         | Command                                          | Description                         |
|----------------|--------------------------------------------------|-------------------------------------|
| `dev`          | `bun run dev`                                    | Start the Vite dev server           |
| `build`        | `bun run build`                                  | Build for production                |
| `preview`      | `bun run preview`                                | Preview the production build locally|
| `check`        | `bun run check`                                  | Type-check with `svelte-check`      |
| `lint`         | `bun run lint`                                   | Lint and format with Biome          |

---

## Routes

| Path         | File                                  | Description            |
|--------------|---------------------------------------|------------------------|
| `/`          | `src/routes/+page.svelte`             | Home page              |
| `/services`  | `src/routes/services/+page.svelte`    | Services               |
| `/work`      | `src/routes/work/+page.svelte`        | Case studies           |
| `/about`     | `src/routes/about/+page.svelte`       | About the company      |
| `/contact`   | `src/routes/contact/+page.svelte`     | Contact form           |
