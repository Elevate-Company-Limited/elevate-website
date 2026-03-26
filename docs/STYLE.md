# Style

## Why have a style?

A shared style creates expectation. When everyone writes code the same way, the project feels
like one thing rather than a collection of individual preferences. It reduces the cognitive
overhead of reading unfamiliar code and helps us avoid accumulating technical debt.

---

## Naming

- Use `snake_case` for variables, functions, and filenames
- Use `TitleCase` for Svelte components and TypeScript types
- Use `kebab-case` for route folders (e.g. `src/routes/our-work/`)
- Do not abbreviate — use full, descriptive names

| Wrong          | Right                |
|----------------|----------------------|
| `navLinks`     | `nav_links`          |
| `isOpen`       | `menu_open`          |
| `formDat`      | `form_data`          |
| `btn`          | `button`             |
| `NavComp`      | `Nav`                |

---

## Formatting

- 4 spaces of indentation
- 100 character line width
- Enforced automatically by Biome (`bun run lint`)

You should not need to think about formatting — just run `bun run lint` and it is handled.

---

## Svelte file structure

Within a `.svelte` file, always follow this order:

1. `<script lang="ts">` block — imports, then props, then state, then derived values, then functions
2. Markup — the HTML template
3. `<style>` block — scoped styles (only when Tailwind cannot express what is needed)

**Example:**

```svelte
<script lang="ts">
    import { page } from '$app/state';            // imports

    let { title }: { title: string } = $props();  // props

    let count = $state(0);                        // state

    let doubled = $derived(count * 2);            // derived

    function increment() {                        // functions
        count += 1;
    }
</script>

<h1>{title}</h1>
<p>{doubled}</p>
<button onclick={increment}>+</button>

<style>
    /* only if needed */
</style>
```

---

## TypeScript

- Strict mode is enabled — do not disable any strict flags
- Use `$state`, `$derived`, `$effect`, and `$props` — never legacy `$:` reactive statements
- Prefer `type` over `interface`
- Annotate function parameters and return types explicitly
- Avoid `any` — use `unknown` if the type is genuinely unknown

---

## Tailwind

- Mobile-first — write the base style for small screens, then add `sm:`, `md:`, `lg:` overrides
- Group classes by concern: layout → spacing → typography → colour → interaction

```svelte
<!-- Good — grouped and readable -->
<div class="flex items-center gap-4   px-6 py-3   text-sm font-medium   text-ink bg-surface   hover:bg-gray-50 transition-colors">

<!-- Bad — random order -->
<div class="hover:bg-gray-50 text-sm px-6 flex text-ink font-medium py-3 gap-4 items-center bg-surface transition-colors">
```

- All theme tokens live in `src/app.css` inside the `@theme` block — do not use arbitrary
  values (`text-[#2563eb]`) for colours or fonts that are already in the theme

---

## Extracting components

Extract a pattern into a shared component when it appears in **three or more places**. Two
similar blocks of markup are easier to read in place than to trace through an abstraction.

When extracting:

- Place the component in `src/lib/components/`
- Name it using TitleCase (e.g. `ServiceCard.svelte`)
- Accept data via `$props()` with explicit TypeScript types
