<script lang="ts">
import "../app.css";
import type { Snippet } from "svelte";
import Footer from "$lib/components/Footer.svelte";
import Nav from "$lib/components/Nav.svelte";

let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<Nav />
{@render children()}
<Footer />
