<script lang="ts">
import { fade_up } from "$lib/actions/animate";
</script>

<svelte:head>
    <title>About — Elevate</title>
    <meta
        name="description"
        content="Elevate is a software and technology consultancy founded in Tanzania, working with ambitious organisations across Africa and beyond."
    />
</svelte:head>

<!-- Page header -->
<section class="py-16 lg:py-20 border-b border-dashed border-border">
    <div class="max-w-[1200px] mx-auto px-5">
        <p class="text-xs uppercase tracking-widest text-caption font-500 mb-3">Who we are</p>
        <h1 class="font-display font-400 text-4xl lg:text-5xl tracking-tight max-w-xl">
            <span class="block text-[#fafafa]">Who we</span>
            <span class="block" style="color: #3d6eff">are_</span>
        </h1>
    </div>
</section>

<!-- About section -->
<section class="py-16 lg:py-24 border-b border-dashed border-border">
    <div class="max-w-[1200px] mx-auto px-5">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">

            <!-- Prose -->
            <div use:fade_up={0} class="flex flex-col gap-6">
                <p class="text-lg text-heading leading-relaxed">
                    Elevate is a
                    <span class="text-emphasis">software and technology consultancy</span>
                    founded in Tanzania and working with clients across Africa and beyond.
                </p>
                <p class="text-body leading-relaxed">
                    We partner with
                    <span class="text-emphasis">ambitious organisations</span>
                    — from growing startups to established enterprises — that want to use technology
                    to move faster, operate smarter, and build lasting capability. We're not a body-shop.
                    We bring genuine expertise, ask the hard questions, and care about whether our work
                    <span class="text-emphasis">actually makes a difference.</span>
                </p>
                <p class="text-body leading-relaxed">
                    Our team brings experience across
                    <span class="text-emphasis">software engineering, data infrastructure, and applied AI.</span>
                    We work closely with each client to understand their business before we write a single
                    line of code. The right solution starts with the right diagnosis.
                </p>
            </div>

            <!-- Info cards -->
            <div use:fade_up={100} class="flex flex-col gap-3">
                <div class="p-6 rounded-2xl bg-card border border-border transition-all duration-200 hover:bg-card-hover hover:border-brand/30">
                    <p class="text-xs font-500 uppercase tracking-widest text-caption mb-2">
                        Registered in Tanzania
                    </p>
                    <p class="text-sm text-body leading-relaxed">
                        Elevate Company Limited is a legally registered company in the United Republic of
                        Tanzania, operating at elevateco.dev.
                    </p>
                </div>
                <div class="p-6 rounded-2xl bg-card border border-border transition-all duration-200 hover:bg-card-hover hover:border-brand/30">
                    <p class="text-xs font-500 uppercase tracking-widest text-caption mb-2">
                        Core services
                    </p>
                    <p class="text-sm text-body leading-relaxed">
                        Custom software development, AI consulting, data engineering, and business
                        intelligence — delivered as standalone engagements or combined across a longer
                        partnership.
                    </p>
                </div>
                <div class="p-6 rounded-2xl bg-card border border-border transition-all duration-200 hover:bg-card-hover hover:border-brand/30">
                    <p class="text-xs font-500 uppercase tracking-widest text-caption mb-2">Domain</p>
                    <p class="text-sm text-body">elevateco.dev</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════════════
     HOW WE WORK — light contrast section
════════════════════════════════════════════════════════════════ -->
<section class="bg-light py-16 lg:py-24">
    <div class="max-w-[1200px] mx-auto px-5">
        <div use:fade_up={0} class="mb-12">
            <p class="text-xs uppercase tracking-widest text-light-body font-500 mb-3">Our principles</p>
            <h2 class="font-display font-400 text-3xl lg:text-[48px] leading-tight lg:leading-[52px] lg:tracking-[-0.5px] text-light-heading">
                How we work<span class="text-brand">_</span>
            </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10">
            <div use:fade_up={0} class="lg:pr-8 lg:border-r lg:border-dashed lg:border-black/10">
                <div class="text-brand mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                </div>
                <h3 class="font-600 text-light-heading mb-2 font-display">Outcomes over outputs →</h3>
                <p class="text-sm text-light-body leading-relaxed">
                    We measure our work by the business impact it creates, not by lines of code written or features shipped.
                </p>
            </div>

            <div use:fade_up={100} class="lg:px-8 lg:border-r lg:border-dashed lg:border-black/10">
                <div class="text-brand mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                </div>
                <h3 class="font-600 text-light-heading mb-2 font-display">Honest expertise →</h3>
                <p class="text-sm text-light-body leading-relaxed">
                    We tell you what we know, what we don't, and what we think. No overselling. No jargon for its own sake.
                </p>
            </div>

            <div use:fade_up={200} class="lg:px-8 lg:border-r lg:border-dashed lg:border-black/10">
                <div class="text-brand mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="3" y1="9" x2="21" y2="9"></line>
                        <line x1="9" y1="21" x2="9" y2="9"></line>
                    </svg>
                </div>
                <h3 class="font-600 text-light-heading mb-2 font-display">Long-term thinking →</h3>
                <p class="text-sm text-light-body leading-relaxed">
                    We design for sustainability — clean architecture, thorough documentation, and recommendations that hold up five years from now.
                </p>
            </div>

            <div use:fade_up={300} class="lg:pl-8">
                <div class="text-brand mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                </div>
                <h3 class="font-600 text-light-heading mb-2 font-display">Close collaboration →</h3>
                <p class="text-sm text-light-body leading-relaxed">
                    We work alongside your team, not around them. The best results come from shared context and open communication.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- Team -->
<section class="py-16 lg:py-24 border-b border-dashed border-border">
    <div class="max-w-[1200px] mx-auto px-5">
        <div use:fade_up={0} class="mb-10">
            <p class="text-xs uppercase tracking-widest text-caption font-500 mb-3">The people</p>
            <h2 class="font-display font-400 text-2xl lg:text-3xl text-heading">
                The team<span class="text-brand">_</span>
            </h2>
            <p class="text-body mt-2">The people behind the work.</p>
        </div>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {#each [0, 1, 2] as i}
                <div
                    use:fade_up={i * 100}
                    class="p-8 rounded-2xl border border-dashed border-border bg-card
                        flex flex-col items-center justify-center gap-3 min-h-48"
                >
                    <div class="w-12 h-12 rounded-full bg-pill"></div>
                    <p class="text-sm text-caption">Coming soon</p>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- CTA -->
<section class="py-20 bg-page dot-texture text-center">
    <div use:fade_up={0} class="max-w-[1200px] mx-auto px-5">
        <p class="text-xs uppercase tracking-widest text-caption font-500 mb-4">Work together</p>
        <h2 class="font-display font-400 text-3xl lg:text-[48px] leading-tight lg:leading-[52px] lg:tracking-[-0.5px] text-heading mb-4">
            Ready to build something<span class="text-brand">_</span>
        </h2>
        <p class="text-body max-w-md mx-auto mb-8 leading-relaxed">
            We'd love to hear about
            <span class="text-emphasis">what you're building.</span>
        </p>
        <a
            href="/contact"
            class="inline-flex items-center px-5 py-2.5 rounded-lg bg-brand text-white
                text-sm font-medium transition-all duration-150 hover:bg-brand-hover"
        >
            Get in touch
        </a>
    </div>
</section>
