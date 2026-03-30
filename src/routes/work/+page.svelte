<script lang="ts">
import { fade_up } from "$lib/actions/animate";

type CaseStudy = {
    industry: string;
    industry_color: string;
    services: string[];
    title: string;
    description: string;
    outcome: string;
};

const case_studies: CaseStudy[] = [
    {
        industry: "Logistics",
        industry_color: "orange",
        services: ["Custom Software", "Data Engineering"],
        title: "Fleet Operations Visibility Platform",
        description:
            "Built a real-time fleet tracking and reporting platform for a logistics operator " +
            "managing hundreds of vehicles across Tanzania. Replaced a fragmented mix of " +
            "spreadsheets and manual check-ins with a single source of truth.",
        outcome: "40% reduction in manual reporting hours",
    },
    {
        industry: "FinTech",
        industry_color: "emerald",
        services: ["Custom Software", "Business Intelligence"],
        title: "Digital Payments Reconciliation System",
        description:
            "Designed and built an automated reconciliation engine that matches transactions " +
            "across multiple payment channels, flagging discrepancies in real time. Replaced " +
            "a daily manual process that took hours and was prone to error.",
        outcome: "Processing 10,000+ transactions per day",
    },
    {
        industry: "Healthcare",
        industry_color: "sky",
        services: ["Custom Software", "Data Engineering"],
        title: "Patient Data Management System",
        description:
            "Developed a secure patient records system for a network of regional clinics, " +
            "replacing paper-based processes with a unified digital platform. Designed for " +
            "low-bandwidth environments and offline-first operation.",
        outcome: "Serving 5 regional clinics",
    },
];
</script>

<svelte:head>
    <title>Our Work — Elevate</title>
    <meta
        name="description"
        content="Projects we're proud of — software, data, and AI work delivered for clients across logistics, fintech, and healthcare."
    />
</svelte:head>

<!-- Page header -->
<section class="py-16 lg:py-20 border-b border-dashed border-border">
    <div class="max-w-[1200px] mx-auto px-5">
        <p class="text-xs uppercase tracking-widest text-caption font-500 mb-3">Our work</p>
        <h1 class="font-display font-400 text-4xl lg:text-5xl tracking-tight max-w-xl">
            <span class="block text-[#fafafa]">Projects we're</span>
            <span class="block" style="color: #3d6eff">proud of_</span>
        </h1>
        <p class="mt-4 text-body max-w-xl leading-relaxed">
            A selection of engagements that show
            <span class="text-emphasis">how we work and what we're capable of.</span>
            Full case studies are on the way.
        </p>
    </div>
</section>

<!-- Case studies -->
<section class="py-16 lg:py-24 bg-page">
    <div class="max-w-[1200px] mx-auto px-5">
        <div class="flex flex-col gap-4">
            {#each case_studies as study, i}
                <article
                    use:fade_up={i * 100}
                    class="p-8 rounded-2xl bg-card border border-border
                        transition-all duration-200 hover:bg-card-hover hover:border-brand/30"
                >
                    <div class="flex flex-wrap items-center gap-2 mb-6">
                        <!-- Industry tag — rgba tints, no solid colours -->
                        {#if study.industry_color === "orange"}
                            <span class="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium
                                bg-[rgba(251,146,60,0.15)] text-[#fb923c] border border-[rgba(251,146,60,0.2)]">
                                {study.industry}
                            </span>
                        {:else if study.industry_color === "emerald"}
                            <span class="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium
                                bg-[rgba(52,211,153,0.15)] text-[#34d399] border border-[rgba(52,211,153,0.2)]">
                                {study.industry}
                            </span>
                        {:else}
                            <span class="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium
                                bg-[rgba(56,189,248,0.15)] text-[#38bdf8] border border-[rgba(56,189,248,0.2)]">
                                {study.industry}
                            </span>
                        {/if}
                        <!-- Service tags -->
                        {#each study.services as service}
                            <span class="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium
                                bg-pill text-body">
                                {service}
                            </span>
                        {/each}
                    </div>

                    <h2 class="font-display font-400 text-xl text-heading mb-3">{study.title}</h2>
                    <p class="text-body leading-relaxed mb-6 max-w-2xl">{study.description}</p>

                    <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between
                        pt-5 border-t border-dashed border-border">
                        <p class="flex items-center gap-2 text-sm font-medium text-emphasis">
                            <span class="w-1.5 h-1.5 rounded-full bg-brand shrink-0"></span>
                            {study.outcome}
                        </p>
                        <p class="text-xs text-caption italic">Full case study coming soon</p>
                    </div>
                </article>
            {/each}
        </div>
    </div>
</section>

<!-- CTA -->
<section class="py-20 bg-card border-t border-dashed border-border text-center">
    <div use:fade_up={0} class="max-w-[1200px] mx-auto px-5">
        <p class="text-xs uppercase tracking-widest text-caption font-500 mb-4">Next steps</p>
        <h2 class="font-display font-400 text-3xl lg:text-[48px] leading-tight lg:leading-[52px] lg:tracking-[-0.5px] text-heading mb-4">
            Want to be our next case study<span class="text-brand">_</span>
        </h2>
        <p class="text-body max-w-md mx-auto mb-8 leading-relaxed">
            Tell us what you're working on and we'll
            <span class="text-emphasis">explore how we can help.</span>
        </p>
        <a
            href="/contact"
            class="inline-flex items-center px-5 py-2.5 rounded-lg bg-brand text-white
                text-sm font-medium transition-all duration-150 hover:bg-brand-hover"
        >
            Start a conversation
        </a>
    </div>
</section>
