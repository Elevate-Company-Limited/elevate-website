<script lang="ts">
import { fade_up, slide_in_left } from "$lib/actions/animate";
</script>

<svelte:head>
    <title>Services — Elevate</title>
    <meta
        name="description"
        content="Custom software development, AI consulting, data engineering, and business intelligence — four practice areas focused on real business outcomes."
    />
</svelte:head>

<!-- Page header -->
<section class="py-16 lg:py-20 border-b border-dashed border-border">
    <div class="max-w-[1200px] mx-auto px-5">
        <p class="text-xs uppercase tracking-widest text-caption font-500 mb-3">What we do</p>
        <h1 class="font-display font-400 text-4xl lg:text-5xl tracking-tight max-w-xl">
            <span class="block text-[#fafafa]">What we</span>
            <span class="block" style="color: #3d6eff">do_</span>
        </h1>
    </div>
</section>

<!-- Service blocks -->
<section class="py-12 bg-page">
    <div class="max-w-[1200px] mx-auto px-5 flex flex-col gap-4">

        <!-- 01 -->
        <div
            use:fade_up={0}
            class="rounded-2xl bg-card border border-border overflow-hidden
                transition-all duration-200 hover:bg-card-hover hover:border-brand/30"
        >
            <div class="p-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
                <div class="lg:col-span-4 flex flex-col gap-4">
                    <span class="font-display font-400 text-5xl text-heading/10 leading-none select-none">01</span>
                    <div class="w-9 h-9 rounded-lg bg-accent-tag flex items-center justify-center text-brand">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <polyline points="16 18 22 12 16 6"></polyline>
                            <polyline points="8 6 2 12 8 18"></polyline>
                        </svg>
                    </div>
                    <h2 class="font-display font-400 text-2xl text-heading">
                        Custom Software Development<span class="text-brand">_</span>
                    </h2>
                    <p class="text-body text-sm italic">Built around your workflows, not the other way around.</p>
                </div>
                <div class="lg:col-span-8">
                    <p class="text-body leading-relaxed mb-8">
                        We design and build
                        <span class="text-emphasis">production-grade software from the ground up.</span>
                        Whether it's a customer-facing web application, an internal operations tool,
                        or a complex integration — we start from your real constraints and work backwards
                        to the <span class="text-emphasis">right solution.</span>
                    </p>
                    <ul class="flex flex-col gap-3 mb-8">
                        {#each [
                            'Web application design and development (SvelteKit, Next.js, and similar)',
                            'REST and GraphQL API design and implementation',
                            'Internal tools and operational dashboards',
                            'Third-party integrations and workflow automation',
                            'Architecture reviews and technical due diligence',
                        ] as item, i}
                            <li use:slide_in_left={i * 80} class="flex items-start gap-3 text-sm text-body">
                                <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand shrink-0"></span>
                                {item}
                            </li>
                        {/each}
                    </ul>

                    <p class="text-xs uppercase tracking-widest text-caption font-500 mb-3">Specific offerings</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {#each [
                            { name: 'Web & Mobile Apps', desc: 'End-to-end design and delivery of customer-facing products' },
                            { name: 'Internal Tools', desc: 'Dashboards, admin panels, and operational software' },
                            { name: 'API & Integrations', desc: 'Connect your systems and third-party services reliably' },
                            { name: 'Architecture & Audits', desc: 'Review, advise, and improve existing codebases' },
                        ] as offering}
                            <div class="bg-[#141414] border border-[#27272a] rounded-xl p-4 transition-colors duration-150 hover:border-brand/30">
                                <p class="text-sm font-medium text-heading mb-1">{offering.name}</p>
                                <p class="text-xs text-body">{offering.desc}</p>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </div>

        <!-- 02 -->
        <div
            use:fade_up={100}
            class="rounded-2xl bg-card border border-border overflow-hidden
                transition-all duration-200 hover:bg-card-hover hover:border-brand/30"
        >
            <div class="p-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
                <div class="lg:col-span-4 flex flex-col gap-4">
                    <span class="font-display font-400 text-5xl text-heading/10 leading-none select-none">02</span>
                    <div class="w-9 h-9 rounded-lg bg-accent-tag flex items-center justify-center text-brand">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"></path>
                        </svg>
                    </div>
                    <h2 class="font-display font-400 text-2xl text-heading">
                        AI Consulting<span class="text-brand">_</span>
                    </h2>
                    <p class="text-body text-sm italic">Real leverage from AI — not hype, not demos.</p>
                </div>
                <div class="lg:col-span-8">
                    <p class="text-body leading-relaxed mb-8">
                        We help organisations find
                        <span class="text-emphasis">genuine leverage in AI</span>
                        — not by chasing trends, but by identifying where language models, computer vision,
                        or predictive systems can create
                        <span class="text-emphasis">real, measurable value</span>
                        in your specific context.
                    </p>
                    <ul class="flex flex-col gap-3 mb-8">
                        {#each [
                            'AI opportunity assessment and roadmap development',
                            'Proof-of-concept design and rapid prototyping',
                            'LLM integration and prompt engineering',
                            'Model fine-tuning and evaluation frameworks',
                            'Production deployment, monitoring, and iteration',
                        ] as item, i}
                            <li use:slide_in_left={i * 80} class="flex items-start gap-3 text-sm text-body">
                                <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand shrink-0"></span>
                                {item}
                            </li>
                        {/each}
                    </ul>

                    <p class="text-xs uppercase tracking-widest text-caption font-500 mb-3">Specific offerings</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {#each [
                            { name: 'AI Strategy', desc: 'Identify where AI creates real, measurable value in your business' },
                            { name: 'LLM Applications', desc: 'Build and integrate language model-powered features' },
                            { name: 'Predictive Systems', desc: 'Models that forecast outcomes from your existing data' },
                            { name: 'MLOps & Monitoring', desc: 'Deploy, track, and continuously improve models in production' },
                        ] as offering}
                            <div class="bg-[#141414] border border-[#27272a] rounded-xl p-4 transition-colors duration-150 hover:border-brand/30">
                                <p class="text-sm font-medium text-heading mb-1">{offering.name}</p>
                                <p class="text-xs text-body">{offering.desc}</p>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </div>

        <!-- 03 -->
        <div
            use:fade_up={200}
            class="rounded-2xl bg-card border border-border overflow-hidden
                transition-all duration-200 hover:bg-card-hover hover:border-brand/30"
        >
            <div class="p-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
                <div class="lg:col-span-4 flex flex-col gap-4">
                    <span class="font-display font-400 text-5xl text-heading/10 leading-none select-none">03</span>
                    <div class="w-9 h-9 rounded-lg bg-accent-tag flex items-center justify-center text-brand">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                        </svg>
                    </div>
                    <h2 class="font-display font-400 text-2xl text-heading">
                        Data Engineering<span class="text-brand">_</span>
                    </h2>
                    <p class="text-body text-sm italic">Reliable data, on time, in the right shape.</p>
                </div>
                <div class="lg:col-span-8">
                    <p class="text-body leading-relaxed mb-8">
                        We design and build
                        <span class="text-emphasis">pipelines, warehouses, and transformation layers</span>
                        that turn raw, scattered data into reliable, query-ready assets. If your team spends
                        hours preparing data before they can analyse it,
                        <span class="text-emphasis">that's a problem we can solve.</span>
                    </p>
                    <ul class="flex flex-col gap-3 mb-8">
                        {#each [
                            'Data pipeline design, implementation, and orchestration',
                            'Data warehouse and lakehouse architecture',
                            'ETL/ELT development with dbt, Airbyte, and similar tooling',
                            'Data quality frameworks and observability',
                            'Cloud data infrastructure on AWS, GCP, or Azure',
                        ] as item, i}
                            <li use:slide_in_left={i * 80} class="flex items-start gap-3 text-sm text-body">
                                <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand shrink-0"></span>
                                {item}
                            </li>
                        {/each}
                    </ul>

                    <p class="text-xs uppercase tracking-widest text-caption font-500 mb-3">Specific offerings</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {#each [
                            { name: 'Pipeline Development', desc: 'Automated ingestion, transformation, and delivery of data' },
                            { name: 'Data Warehousing', desc: 'Scalable storage architectures optimised for analytical queries' },
                            { name: 'dbt & Transformation', desc: 'Modular, tested, version-controlled SQL transformation logic' },
                            { name: 'Observability', desc: 'Data quality monitoring, alerting, and lineage tracking' },
                        ] as offering}
                            <div class="bg-[#141414] border border-[#27272a] rounded-xl p-4 transition-colors duration-150 hover:border-brand/30">
                                <p class="text-sm font-medium text-heading mb-1">{offering.name}</p>
                                <p class="text-xs text-body">{offering.desc}</p>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </div>

        <!-- 04 -->
        <div
            use:fade_up={300}
            class="rounded-2xl bg-card border border-border overflow-hidden
                transition-all duration-200 hover:bg-card-hover hover:border-brand/30"
        >
            <div class="p-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
                <div class="lg:col-span-4 flex flex-col gap-4">
                    <span class="font-display font-400 text-5xl text-heading/10 leading-none select-none">04</span>
                    <div class="w-9 h-9 rounded-lg bg-accent-tag flex items-center justify-center text-brand">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="18" y1="20" x2="18" y2="10"></line>
                            <line x1="12" y1="20" x2="12" y2="4"></line>
                            <line x1="6" y1="20" x2="6" y2="14"></line>
                            <line x1="2" y1="20" x2="22" y2="20"></line>
                        </svg>
                    </div>
                    <h2 class="font-display font-400 text-2xl text-heading">
                        Business Intelligence<span class="text-brand">_</span>
                    </h2>
                    <p class="text-body text-sm italic">Clear visibility into what's actually happening.</p>
                </div>
                <div class="lg:col-span-8">
                    <p class="text-body leading-relaxed mb-8">
                        We build
                        <span class="text-emphasis">dashboards, reports, and analytical tools</span>
                        that give decision-makers clear, timely visibility into what's happening. Not
                        vanity metrics —
                        <span class="text-emphasis">actionable insight that drives better decisions.</span>
                    </p>
                    <ul class="flex flex-col gap-3 mb-8">
                        {#each [
                            'Executive and operational dashboard design and build',
                            'Self-service reporting infrastructure',
                            'KPI frameworks and metric definitions',
                            'BI tool implementation (Metabase, Superset, Looker, and similar)',
                            'Embedded analytics in existing applications',
                        ] as item, i}
                            <li use:slide_in_left={i * 80} class="flex items-start gap-3 text-sm text-body">
                                <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand shrink-0"></span>
                                {item}
                            </li>
                        {/each}
                    </ul>

                    <p class="text-xs uppercase tracking-widest text-caption font-500 mb-3">Specific offerings</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {#each [
                            { name: 'Dashboard Design', desc: 'Clear, decision-focused interfaces for any audience or team' },
                            { name: 'Self-Service BI', desc: 'Empower your team to answer their own questions with data' },
                            { name: 'KPI Frameworks', desc: 'Define and align on the metrics that actually drive decisions' },
                            { name: 'Embedded Analytics', desc: 'BI features built directly into your existing application' },
                        ] as offering}
                            <div class="bg-[#141414] border border-[#27272a] rounded-xl p-4 transition-colors duration-150 hover:border-brand/30">
                                <p class="text-sm font-medium text-heading mb-1">{offering.name}</p>
                                <p class="text-xs text-body">{offering.desc}</p>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>

<!-- CTA -->
<section class="py-20 bg-card border-t border-dashed border-border text-center">
    <div use:fade_up={0} class="max-w-[1200px] mx-auto px-5">
        <p class="text-xs uppercase tracking-widest text-caption font-500 mb-4">Let's talk</p>
        <h2 class="font-display font-400 text-3xl lg:text-[48px] leading-tight lg:leading-[52px] lg:tracking-[-0.5px] text-heading mb-4">
            Not sure which service fits<span class="text-brand">_</span>
        </h2>
        <p class="text-body max-w-md mx-auto mb-8 leading-relaxed">
            Tell us about your situation and we'll
            <span class="text-emphasis">point you in the right direction</span>
            — no commitment required.
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
