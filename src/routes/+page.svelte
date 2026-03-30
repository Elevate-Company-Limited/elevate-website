<script lang="ts">
import { onMount } from "svelte";
import { count_up, fade_up } from "$lib/actions/animate";

let star_container = $state<HTMLDivElement | null>(null);
let command_text = $state("");
let show_line_1 = $state(false);
let show_line_2 = $state(false);
let show_line_3 = $state(false);
let ready_text = $state("");
let show_cursor = $state(false);

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

onMount(async () => {
    if (star_container) {
        for (let i = 0; i < 80; i++) {
            const dot = document.createElement('div');
            dot.style.cssText = `
                position: absolute;
                width: 1px;
                height: 1px;
                background: #fff;
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                opacity: ${0.2 + Math.random() * 0.5};
                pointer-events: none;
            `;
            star_container.appendChild(dot);
        }
    }
    for (const char of " elevate status") {
        command_text += char;
        await sleep(40);
    }
    await sleep(400);
    show_line_1 = true;
    await sleep(200);
    show_line_2 = true;
    await sleep(200);
    show_line_3 = true;
    await sleep(500);
    for (const char of " Ready") {
        ready_text += char;
        await sleep(40);
    }
    show_cursor = true;
});

const technologies = [
    'Python', 'TypeScript', 'PostgreSQL', 'React',
    'SvelteKit', 'Node.js', 'AWS', 'Google Cloud',
    'Azure', 'Docker', 'Kubernetes', 'dbt', 'Airflow',
    'Spark', 'TensorFlow', 'PyTorch', 'Snowflake',
    'BigQuery', 'Terraform', 'FastAPI'
];
</script>

<svelte:head>
    <title>Elevate — Technology that elevates your business</title>
    <meta
        name="description"
        content="Elevate is a software and technology consultancy based in Tanzania, building custom software, AI systems, and data infrastructure for ambitious organisations."
    />
</svelte:head>

<!-- ═══════════════════════════════════════════════════════════════
     HERO
════════════════════════════════════════════════════════════════ -->
<section class="bg-page relative overflow-hidden">
    <div bind:this={star_container} class="star-field absolute inset-0 pointer-events-none overflow-hidden z-0"></div>

    <!-- Announcement banner -->
    <div class="relative z-10 border-b border-dashed border-border py-2.5 text-center text-sm">
        <span class="text-body">✦ Now serving clients across East Africa and beyond</span>
        <a href="/contact" class="text-brand font-500 ml-2">→</a>
    </div>

    <!-- Main hero content -->
    <div class="relative z-10 max-w-[1200px] mx-auto px-5 py-20 lg:py-28">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            <!-- Left: 7/12 -->
            <div class="lg:col-span-7">
                <!-- Pill badge -->
                <div class="blur-in inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm
                    bg-accent-tag text-brand border border-brand/20 mb-8 font-medium">
                    <span class="w-1.5 h-1.5 rounded-full bg-brand shrink-0"></span>
                    Software &amp; Technology Consultancy
                </div>

                <!-- H1 -->
                <h1
                    class="blur-in blur-in-1 font-display font-400
                        text-[44px] leading-[48px] tracking-[-1px]
                        lg:text-[72px] lg:leading-[74px] lg:tracking-[-1.6px]
                        text-heading mb-6"
                >
                    Technology that<br />elevates your<br />business<span class="text-brand">_</span>
                </h1>

                <!-- Subtitle — two-tone -->
                <p class="blur-in blur-in-2 text-base lg:text-lg text-body leading-relaxed max-w-lg mb-8">
                    We build
                    <span class="text-emphasis">custom software, AI systems,</span>
                    and data infrastructure that help
                    <span class="text-emphasis">ambitious organisations</span>
                    move faster and operate smarter.
                </p>

                <!-- CTAs -->
                <div class="blur-in blur-in-3 flex flex-col gap-3 sm:flex-row">
                    <a
                        href="/contact"
                        class="inline-flex items-center justify-center px-5 py-2.5 rounded-lg
                            bg-brand text-white text-sm font-medium
                            transition-all duration-150 hover:bg-brand-hover"
                    >
                        Start a conversation
                    </a>
                    <a
                        href="/services"
                        class="inline-flex items-center justify-center px-5 py-2.5 rounded-lg
                            border border-border text-heading text-sm font-medium
                            transition-all duration-150 hover:border-brand/50"
                    >
                        See our services
                    </a>
                </div>
            </div>

            <!-- Right: 5/12 — terminal mockup -->
            <div class="lg:col-span-5 blur-in blur-in-4">
                <div class="relative bg-[#1a1a1e] border border-border rounded-2xl overflow-hidden">
                    <div
                        class="absolute inset-x-0 top-0 h-32 pointer-events-none"
                        style="background: radial-gradient(60% 120px at 50% 0%, rgba(61, 110, 255, 0.08) 0%, transparent 100%);"
                    ></div>
                    <!-- Title bar -->
                    <div class="relative z-10 bg-[#232325] px-4 py-3 flex items-center">
                        <div class="flex items-center gap-1.5">
                            <div class="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                            <div class="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                            <div class="w-3 h-3 rounded-full bg-[#28c840]"></div>
                        </div>
                        <div class="flex-1 text-center font-mono text-xs text-white/40">elevate · production</div>
                    </div>

                    <!-- Terminal body -->
                    <div class="relative z-10 p-6 font-mono text-sm bg-[#1a1a1e]">
                        <div class="space-y-2 mb-6">
                            <!-- Typed command -->
                            <div>
                                <span style="color: #3d6eff">$</span>
                                <span class="text-white/90">{command_text}</span>
                            </div>
                            <!-- Status lines — instant reveal with fade -->
                            <div class="term-line" class:visible={show_line_1}>
                                <span class="text-white/40">→ Pipelines: </span>
                                <span style="color: #22c55e">3 running</span>
                            </div>
                            <div class="term-line" class:visible={show_line_2}>
                                <span class="text-white/40">→ Dashboard: </span>
                                <span style="color: #3d6eff">live</span>
                            </div>
                            <div class="term-line" class:visible={show_line_3}>
                                <span class="text-white/40">→ Last sync: </span>
                                <span class="text-white/60">2m ago</span>
                            </div>
                            <!-- Ready line -->
                            <div class="pt-2">
                                <span style="color: #3d6eff">$</span>
                                <span class="text-white/90">{ready_text}</span>
                                {#if show_cursor}<span class="cursor-blink" style="color: #3d6eff">_</span>{/if}
                            </div>
                        </div>

                        <!-- Stat mini-cards -->
                        <div class="grid grid-cols-3 gap-2">
                            <div class="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl p-4">
                                <div
                                    use:count_up={{ target: 40, suffix: '%' }}
                                    class="text-2xl font-semibold"
                                    style="color: #3d6eff"
                                >40%</div>
                                <div class="text-[#71717a] text-xs mt-1">Time saved</div>
                            </div>
                            <div class="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl p-4">
                                <div
                                    use:count_up={{ target: 10, suffix: 'k+' }}
                                    class="text-[#fafafa] text-2xl font-semibold"
                                >10k+</div>
                                <div class="text-[#71717a] text-xs mt-1">Lines of code shipped</div>
                            </div>
                            <div class="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl p-4">
                                <div
                                    use:count_up={{ target: 5, suffix: '+' }}
                                    class="text-[#fafafa] text-2xl font-semibold"
                                >5+</div>
                                <div class="text-[#71717a] text-xs mt-1">Industries served</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════════════
     TECH MARQUEE
════════════════════════════════════════════════════════════════ -->
<div class="overflow-hidden border-y border-[#27272a] py-5">
    <p class="text-center text-[#71717a] text-xs uppercase tracking-widest mb-4">Technologies we work with</p>
    <div class="marquee-track">
        {#each technologies as tech}
            <span class="text-[#71717a] text-sm font-medium px-6 hover:text-[#fafafa] transition-colors whitespace-nowrap">
                {tech}<span class="text-[#27272a] mx-2">·</span>
            </span>
        {/each}
        {#each technologies as tech}
            <span class="text-[#71717a] text-sm font-medium px-6 hover:text-[#fafafa] transition-colors whitespace-nowrap">
                {tech}<span class="text-[#27272a] mx-2">·</span>
            </span>
        {/each}
    </div>
</div>

<!-- ═══════════════════════════════════════════════════════════════
     SERVICES OVERVIEW
════════════════════════════════════════════════════════════════ -->
<section class="py-20 lg:py-24 bg-page">
    <div class="max-w-[1200px] mx-auto px-5">
        <div use:fade_up={0} class="mb-12">
            <p class="text-xs uppercase tracking-widest text-caption font-500 mb-3">What we do</p>
            <h2 class="font-display font-400 text-3xl lg:text-[48px] leading-tight lg:leading-[52px] lg:tracking-[-0.5px] mb-4">
                <span class="block text-[#fafafa]">End-to-end</span>
                <span class="block" style="color: #3d6eff">technology expertise_</span>
            </h2>
            <p class="text-body max-w-xl leading-relaxed">
                Each practice area is focused on turning
                <span class="text-emphasis">technology into a competitive advantage</span>
                for your organisation.
            </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <!-- Custom Software -->
            <div
                use:fade_up={0}
                class="relative flex flex-col gap-4 p-6 rounded-2xl overflow-hidden border-b border-[#27272a]
                    transition-all duration-200 hover:brightness-[1.15]"
                style="background: linear-gradient(rgba(61,110,255,0.06), rgba(61,110,255,0.06)), #0f0f0f;"
            >
                <div class="absolute top-0 left-0 right-0 h-1" style="background: #3d6eff;"></div>
                <div class="w-9 h-9 rounded-lg flex items-center justify-center" style="background: rgba(61,110,255,0.15); color: #3d6eff;">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                </div>
                <h3 class="font-600 text-heading text-lg">Custom Software Development</h3>
                <p class="text-sm text-body leading-relaxed">
                    <span class="text-emphasis">End-to-end software</span>
                    built around your workflows —
                    <span class="text-emphasis">web apps, internal tools,</span>
                    and integrations that fit how your team actually works.
                </p>
                <a href="/services" class="text-sm text-brand hover:text-brand-hover transition-colors mt-auto font-medium">
                    Learn more →
                </a>
            </div>

            <!-- AI Consulting -->
            <div
                use:fade_up={100}
                class="relative flex flex-col gap-4 p-6 rounded-2xl overflow-hidden border-b border-[#27272a]
                    transition-all duration-200 hover:brightness-[1.15]"
                style="background: linear-gradient(rgba(34,197,94,0.06), rgba(34,197,94,0.06)), #0f0f0f;"
            >
                <div class="absolute top-0 left-0 right-0 h-1" style="background: #22c55e;"></div>
                <div class="w-9 h-9 rounded-lg flex items-center justify-center" style="background: rgba(34,197,94,0.15); color: #22c55e;">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"></path>
                    </svg>
                </div>
                <h3 class="font-600 text-heading text-lg">AI Consulting</h3>
                <p class="text-sm text-body leading-relaxed">
                    <span class="text-emphasis">Strategy, proof-of-concepts,</span>
                    and production AI deployments — not hype, but
                    <span class="text-emphasis">measurable outcomes</span>
                    grounded in your specific context.
                </p>
                <a href="/services" class="text-sm text-brand hover:text-brand-hover transition-colors mt-auto font-medium">
                    Learn more →
                </a>
            </div>

            <!-- Data Engineering -->
            <div
                use:fade_up={200}
                class="relative flex flex-col gap-4 p-6 rounded-2xl overflow-hidden border-b border-[#27272a]
                    transition-all duration-200 hover:brightness-[1.15]"
                style="background: linear-gradient(rgba(167,139,250,0.06), rgba(167,139,250,0.06)), #0f0f0f;"
            >
                <div class="absolute top-0 left-0 right-0 h-1" style="background: #a78bfa;"></div>
                <div class="w-9 h-9 rounded-lg flex items-center justify-center" style="background: rgba(167,139,250,0.15); color: #a78bfa;">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                    </svg>
                </div>
                <h3 class="font-600 text-heading text-lg">Data Engineering</h3>
                <p class="text-sm text-body leading-relaxed">
                    <span class="text-emphasis">Pipelines, warehouses, and transformation layers</span>
                    that turn raw data into reliable,
                    <span class="text-emphasis">query-ready assets</span>
                    your team can trust.
                </p>
                <a href="/services" class="text-sm text-brand hover:text-brand-hover transition-colors mt-auto font-medium">
                    Learn more →
                </a>
            </div>

            <!-- Business Intelligence -->
            <div
                use:fade_up={300}
                class="relative flex flex-col gap-4 p-6 rounded-2xl overflow-hidden border-b border-[#27272a]
                    transition-all duration-200 hover:brightness-[1.15]"
                style="background: linear-gradient(rgba(56,189,248,0.06), rgba(56,189,248,0.06)), #0f0f0f;"
            >
                <div class="absolute top-0 left-0 right-0 h-1" style="background: #38bdf8;"></div>
                <div class="w-9 h-9 rounded-lg flex items-center justify-center" style="background: rgba(56,189,248,0.15); color: #38bdf8;">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <line x1="18" y1="20" x2="18" y2="10"></line>
                        <line x1="12" y1="20" x2="12" y2="4"></line>
                        <line x1="6" y1="20" x2="6" y2="14"></line>
                        <line x1="2" y1="20" x2="22" y2="20"></line>
                    </svg>
                </div>
                <h3 class="font-600 text-heading text-lg">Business Intelligence</h3>
                <p class="text-sm text-body leading-relaxed">
                    <span class="text-emphasis">Dashboards, reports, and analytical tools</span>
                    that give decision-makers clear visibility — not vanity metrics,
                    <span class="text-emphasis">actionable insight.</span>
                </p>
                <a href="/services" class="text-sm text-brand hover:text-brand-hover transition-colors mt-auto font-medium">
                    Learn more →
                </a>
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════════════
     STATS BAR
════════════════════════════════════════════════════════════════ -->
<div class="bg-page border-y border-border">
    <div class="max-w-[1200px] mx-auto px-5">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
            <div class="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 text-center">
                <div
                    use:count_up={{ target: 3, suffix: '+' }}
                    class="text-[#fafafa] font-medium text-3xl"
                    style="letter-spacing: -0.5px;"
                >3+</div>
                <div class="text-[#71717a] text-sm mt-1">Active engagements</div>
            </div>
            <div class="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 text-center">
                <div
                    use:count_up={{ target: 10, suffix: 'k+' }}
                    class="text-[#fafafa] font-medium text-3xl"
                    style="letter-spacing: -0.5px;"
                >10k+</div>
                <div class="text-[#71717a] text-sm mt-1">Daily transactions</div>
            </div>
            <div class="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 text-center">
                <div
                    use:count_up={{ target: 5 }}
                    class="text-[#fafafa] font-medium text-3xl"
                    style="letter-spacing: -0.5px;"
                >5</div>
                <div class="text-[#71717a] text-sm mt-1">Clinics served</div>
            </div>
            <div class="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 text-center">
                <div
                    use:count_up={{ target: 5, suffix: '+' }}
                    class="text-[#fafafa] font-medium text-3xl"
                    style="letter-spacing: -0.5px;"
                >5+</div>
                <div class="text-[#71717a] text-sm mt-1">Industries</div>
            </div>
        </div>
    </div>
</div>

<!-- ═══════════════════════════════════════════════════════════════
     HOW WE WORK — process steps
════════════════════════════════════════════════════════════════ -->
<section class="py-20 lg:py-24 bg-page border-t border-border">
    <div class="max-w-[1200px] mx-auto px-5">
        <div use:fade_up={0} class="mb-14">
            <p class="text-xs uppercase tracking-widest text-caption font-500 mb-3">Our Process</p>
            <h2 class="font-display font-400 text-3xl lg:text-[48px] leading-tight lg:leading-[52px] lg:tracking-[-0.5px] mb-4">
                <span class="block text-[#fafafa]">From conversation</span>
                <span class="block" style="color: #3d6eff">to delivery_</span>
            </h2>
            <p class="text-body max-w-xl leading-relaxed">
                Every engagement starts with listening.
                <span class="text-emphasis">Here's how we work with you.</span>
            </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-8">
            <!-- Step 01 -->
            <div use:fade_up={0} class="flex flex-col gap-4">
                <div class="flex items-center gap-4">
                    <div class="w-10 h-10 rounded-full border border-border flex items-center justify-center text-brand font-mono text-sm font-600 shrink-0">01</div>
                    <div class="hidden lg:block flex-1 border-t border-dashed border-border"></div>
                </div>
                <h3 class="text-heading font-600">Start a Conversation</h3>
                <p class="text-body text-sm leading-relaxed">
                    Tell us about your business, your goals, and the problem you're trying to solve. No technical jargon required.
                </p>
            </div>

            <!-- Step 02 -->
            <div use:fade_up={100} class="flex flex-col gap-4">
                <div class="flex items-center gap-4">
                    <div class="w-10 h-10 rounded-full border border-border flex items-center justify-center text-brand font-mono text-sm font-600 shrink-0">02</div>
                    <div class="hidden lg:block flex-1 border-t border-dashed border-border"></div>
                </div>
                <h3 class="text-heading font-600">We Listen and Understand</h3>
                <p class="text-body text-sm leading-relaxed">
                    We dig into your workflows, your data, and your constraints before we ever write a line of code or a slide deck.
                </p>
            </div>

            <!-- Step 03 -->
            <div use:fade_up={200} class="flex flex-col gap-4">
                <div class="flex items-center gap-4">
                    <div class="w-10 h-10 rounded-full border border-border flex items-center justify-center text-brand font-mono text-sm font-600 shrink-0">03</div>
                    <div class="hidden lg:block flex-1 border-t border-dashed border-border"></div>
                </div>
                <h3 class="text-heading font-600">Build the Right Plan</h3>
                <p class="text-body text-sm leading-relaxed">
                    We propose a clear, scoped approach — technology choices, timeline, and team — tailored to your situation.
                </p>
            </div>

            <!-- Step 04 -->
            <div use:fade_up={300} class="flex flex-col gap-4">
                <div class="flex items-center gap-4">
                    <div class="w-10 h-10 rounded-full border border-border flex items-center justify-center text-brand font-mono text-sm font-600 shrink-0">04</div>
                </div>
                <h3 class="text-heading font-600">Deliver and Grow Together</h3>
                <p class="text-body text-sm leading-relaxed">
                    We build, iterate, and stay accountable to outcomes. Most of our best client relationships started with a single project.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════════════
     WHY ELEVATE — light contrast section
════════════════════════════════════════════════════════════════ -->
<section class="bg-light py-20 lg:py-24">
    <div class="max-w-[1200px] mx-auto px-5">
        <div use:fade_up={0} class="mb-14">
            <p class="text-xs uppercase tracking-widest text-light-body font-500 mb-3">Why Elevate</p>
            <h2 class="font-display font-400 text-3xl lg:text-[48px] leading-tight lg:leading-[52px] lg:tracking-[-0.5px]">
                <span class="block text-[#fafafa]">Built for organisations</span>
                <span class="block" style="color: #3d6eff">that demand quality_</span>
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
                    We measure success by the business impact created, not features shipped.
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
                    We tell you what we know, what we don't, and what we think. No overselling.
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
                    Clean architecture, good documentation — recommendations that hold up over time.
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
                    We work alongside your team, not in isolation. Shared context drives results.
                </p>
            </div>
        </div>

        <div class="mt-14 pt-10 border-t border-dashed border-black/10 flex items-center justify-between">
            <p class="text-sm text-light-body">Not convinced yet?</p>
            <a href="/about"
               class="inline-flex items-center text-sm font-medium text-brand hover:text-brand-hover transition-colors">
                Learn more about us →
            </a>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════════════
     FINAL CTA
════════════════════════════════════════════════════════════════ -->
<section class="bg-page dot-texture py-20 lg:py-28 text-center">
    <div use:fade_up={0} class="max-w-[1200px] mx-auto px-5">
        <p class="text-xs uppercase tracking-widest text-caption font-500 mb-4">Get started</p>
        <h2 class="font-display font-400 text-3xl lg:text-[48px] leading-tight lg:leading-[52px] lg:tracking-[-0.5px] mb-4">
            <span class="block text-[#fafafa]">Have a project</span>
            <span class="block" style="color: #3d6eff">in mind?_</span>
        </h2>
        <p class="text-body max-w-md mx-auto mb-8 leading-relaxed">
            Tell us what you're building.
            <span class="text-emphasis">We'll tell you how we can help.</span>
        </p>
        <div class="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
                href="/contact"
                class="inline-flex items-center justify-center px-5 py-2.5 rounded-lg
                    bg-brand text-white text-sm font-medium
                    transition-all duration-150 hover:bg-brand-hover"
            >
                Start a conversation
            </a>
            <a
                href="/about"
                class="inline-flex items-center justify-center px-5 py-2.5 rounded-lg
                    border border-border text-heading text-sm font-medium
                    transition-all duration-150 hover:border-brand/50"
            >
                About us
            </a>
        </div>
    </div>
</section>
