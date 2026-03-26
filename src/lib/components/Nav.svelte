<script lang="ts">
    import { page } from "$app/state";
    import { onMount } from "svelte";

    let menu_open = $state(false);
    let scrolled = $state(false);

    type NavLink = { href: string; label: string };

    const nav_links: NavLink[] = [
        { href: "/services", label: "Services" },
        { href: "/work", label: "Our Work" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    onMount(() => {
        const on_scroll = () => { scrolled = window.scrollY > 20; };
        on_scroll();
        window.addEventListener("scroll", on_scroll, { passive: true });
        return () => window.removeEventListener("scroll", on_scroll);
    });

    function toggle_menu() { menu_open = !menu_open; }
    function close_menu() { menu_open = false; }
    function is_active(href: string) { return page.url.pathname === href; }
</script>

<header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300
        {scrolled
            ? 'bg-[#19191c]/95 backdrop-blur-md border-b border-white/[0.06]'
            : ''}"
>
    <nav class="max-w-[1200px] mx-auto px-5 h-16 flex items-center justify-between">
        <!-- Logo -->
        <a
            href="/"
            class="font-display text-xl font-600 text-heading tracking-tight"
            onclick={close_menu}
        >
            Elevate<span class="text-brand">.</span>
        </a>

        <!-- Desktop links -->
        <div class="hidden md:flex items-center gap-8">
            {#each nav_links as link}
                <a
                    href={link.href}
                    class="text-base transition-all duration-150
                        {is_active(link.href)
                        ? 'text-brand'
                        : 'text-body hover:text-heading'}"
                >
                    {link.label}
                </a>
            {/each}
        </div>

        <!-- Desktop CTA -->
        <div class="hidden md:flex">
            <a
                href="/contact"
                class="inline-flex items-center px-3.5 py-[7px] rounded-lg bg-brand text-white
                    text-sm font-medium transition-all duration-150 hover:bg-brand-hover"
            >
                Get in touch
            </a>
        </div>

        <!-- Mobile hamburger -->
        <button
            type="button"
            class="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            onclick={toggle_menu}
            aria-label={menu_open ? "Close menu" : "Open menu"}
            aria-expanded={menu_open}
        >
            <span
                class="block w-5 h-0.5 bg-heading rounded-full transition-all duration-300
                    {menu_open ? 'translate-y-2 rotate-45' : ''}"
            ></span>
            <span
                class="block w-5 h-0.5 bg-heading rounded-full transition-all duration-300
                    {menu_open ? 'opacity-0' : ''}"
            ></span>
            <span
                class="block w-5 h-0.5 bg-heading rounded-full transition-all duration-300
                    {menu_open ? '-translate-y-2 -rotate-45' : ''}"
            ></span>
        </button>
    </nav>

    <!-- Mobile menu -->
    {#if menu_open}
        <div class="md:hidden bg-[#19191c]/98 border-t border-white/[0.06] px-5 pb-6 pt-4">
            <div class="flex flex-col gap-4">
                {#each nav_links as link}
                    <a
                        href={link.href}
                        class="text-base py-1 transition-colors duration-150
                            {is_active(link.href)
                            ? 'text-brand'
                            : 'text-body hover:text-heading'}"
                        onclick={close_menu}
                    >
                        {link.label}
                    </a>
                {/each}
                <a
                    href="/contact"
                    class="mt-2 inline-flex items-center justify-center px-3.5 py-[7px]
                        rounded-lg bg-brand text-white text-sm font-medium
                        transition-all duration-150 hover:bg-brand-hover"
                    onclick={close_menu}
                >
                    Get in touch
                </a>
            </div>
        </div>
    {/if}
</header>

<!-- Spacer so content sits below the fixed nav -->
<div class="h-16" aria-hidden="true"></div>
