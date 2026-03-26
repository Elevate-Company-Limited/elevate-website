# Contributing

## Local setup

```console
git clone https://github.com/Elevate-Company-Limited/elevate-website.git
cd elevate-website
./bun/download.sh
./bun/bun install
./bun/bun run dev
```

The dev server starts at [http://localhost:5173](http://localhost:5173) with hot module
replacement. SvelteKit generates `.svelte-kit/` on first run — this is gitignored.

---

## Branching

Create a new branch with your name and a short description of what you're working on:

```console
git checkout -b acley/hero-redesign
git checkout -b nathaniel/contact-form-backend
```

Before starting work, pull the latest changes from main to avoid conflicts:

```console
git pull origin main --rebase
```

---

## Commit messages

Follow the same convention used across all Elevate repositories:

```
<type>: <description>
```

`<type>` must be one of:

| Type       | When to use                                        |
|------------|----------------------------------------------------|
| `feat`     | Adding a new page, section, or feature             |
| `fix`      | Correcting a visual bug or broken behaviour        |
| `refactor` | Restructuring code without changing the result     |
| `docs`     | Changes to files in `docs/`                        |
| `style`    | Tailwind class adjustments, spacing, typography    |
| `chore`    | Dependency updates, config changes, build scripts  |

`<description>` is always lowercase.

**Examples:**

```
feat: add work page with placeholder case studies
fix: prevent nav from hiding behind page content on mobile
style: tighten hero headline spacing on small screens
chore: pin bun to 1.2.14
docs: document tailwind v4 theme approach in architecture
```

---

## Before pushing

Run these two commands before pushing your branch:

```console
./bun/bun run lint    # Biome — formats and lints the project
./bun/bun run check   # svelte-check — TypeScript and Svelte type errors
```

Fix any errors before opening a pull request.

---

## Pull requests

1. Push your branch and open a PR against `main`
2. Assign a **single** reviewer — use "Assign" rather than "Request review"
3. The reviewer merges when satisfied — use the **"Merge when ready"** button on GitHub
4. Delete the branch after merging

Keep PRs focused. A PR that does two unrelated things is harder to review and harder to
revert if something goes wrong.

### Vercel preview deployments

Every pull request automatically receives a Vercel preview deployment. The URL is posted as
a comment on the PR. Use it to verify your changes look correct before merging.
