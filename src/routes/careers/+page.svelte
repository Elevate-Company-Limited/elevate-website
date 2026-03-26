<script lang="ts">
import { fade_up } from "$lib/actions/animate";
</script>

<svelte:head>
    <title>Careers — Elevate</title>
    <meta
        name="description"
        content="Join the Elevate team. We're a small, focused group building software, data systems, and AI solutions for ambitious organisations."
    />
</svelte:head>

<!-- Page header -->
<section class="py-16 lg:py-20 border-b border-dashed border-border">
    <div class="max-w-[1200px] mx-auto px-5">
        <p class="text-xs uppercase tracking-widest text-caption font-500 mb-3">Careers</p>
        <h1 class="font-display font-400 text-4xl lg:text-5xl text-heading tracking-tight max-w-xl">
            Work with us<span class="text-brand">_</span>
        </h1>
        <p class="mt-4 text-body max-w-xl leading-relaxed">
            We're a small team that does serious work.
            <span class="text-emphasis">If you care about craft, outcomes, and honesty</span>
            — you'll fit right in.
        </p>
    </div>
</section>

<!-- Culture section -->
<section class="py-16 lg:py-24 border-b border-dashed border-border">
    <div class="max-w-[1200px] mx-auto px-5">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">

            <!-- Prose -->
            <div use:fade_up={0} class="flex flex-col gap-6">
                <p class="text-lg text-heading leading-relaxed">
                    Elevate is a place where
                    <span class="text-emphasis">good engineers and thinkers</span>
                    can do their best work on real problems.
                </p>
                <p class="text-body leading-relaxed">
                    We're not a big agency. We don't have layers of management or endless process.
                    We have a small group of people who are serious about their craft, direct with each
                    other, and genuinely invested in
                    <span class="text-emphasis">whether the work we ship actually helps.</span>
                </p>
                <p class="text-body leading-relaxed">
                    You'll work across different domains — logistics, fintech, healthcare — and across
                    the stack, from architecture decisions to delivery. We believe the best engineers
                    are curious, not just capable, and we
                    <span class="text-emphasis">build space for that curiosity</span>
                    in the way we work.
                </p>
            </div>

            <!-- Value cards -->
            <div use:fade_up={100} class="flex flex-col gap-3">
                <div class="p-6 rounded-2xl bg-card border border-border transition-all duration-200 hover:bg-card-hover hover:border-brand/30">
                    <p class="text-xs font-500 uppercase tracking-widest text-caption mb-2">Craft first</p>
                    <p class="text-sm text-body leading-relaxed">
                        We take quality seriously — clean code, clear thinking, and work that holds up.
                        We don't ship things we're not proud of.
                    </p>
                </div>
                <div class="p-6 rounded-2xl bg-card border border-border transition-all duration-200 hover:bg-card-hover hover:border-brand/30">
                    <p class="text-xs font-500 uppercase tracking-widest text-caption mb-2">Small team, big ownership</p>
                    <p class="text-sm text-body leading-relaxed">
                        You'll own whole problems, not just tickets. That means more responsibility
                        and more impact than you'd get in a larger organisation.
                    </p>
                </div>
                <div class="p-6 rounded-2xl bg-card border border-border transition-all duration-200 hover:bg-card-hover hover:border-brand/30">
                    <p class="text-xs font-500 uppercase tracking-widest text-caption mb-2">Honest environment</p>
                    <p class="text-sm text-body leading-relaxed">
                        We communicate directly, give real feedback, and don't have a culture of
                        telling people what they want to hear.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Benefits — light section -->
<section class="bg-light py-16 lg:py-24">
    <div class="max-w-[1200px] mx-auto px-5">
        <div use:fade_up={0} class="mb-12">
            <p class="text-xs uppercase tracking-widest text-light-body font-500 mb-3">What we offer</p>
            <h2 class="font-display font-400 text-3xl lg:text-[48px] leading-tight lg:leading-[52px] lg:tracking-[-0.5px] text-light-heading">
                Working here<span class="text-brand">_</span>
            </h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {#each [
                { label: 'Remote-friendly', desc: 'Work from wherever you do your best thinking. We care about results, not where you sit.' },
                { label: 'Meaningful work', desc: 'Every project solves a real problem for a real organisation. No toy projects.' },
                { label: 'Broad scope', desc: 'Own problems end-to-end — from requirements to deployment — across varied industries.' },
                { label: 'Direct feedback', desc: 'Regular, honest feedback so you know where you stand and how to grow.' },
                { label: 'Competitive pay', desc: 'We pay fairly and review compensation regularly as the team and business grows.' },
                { label: 'Learning time', desc: 'Dedicated time to experiment, build, and stay current with what matters in the field.' },
            ] as benefit}
                <div class="p-6 bg-white rounded-2xl border border-black/5 shadow-sm">
                    <p class="text-sm font-600 text-light-heading mb-2">{benefit.label}</p>
                    <p class="text-sm text-light-body leading-relaxed">{benefit.desc}</p>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- Open positions -->
<section class="py-16 lg:py-24 border-b border-dashed border-border">
    <div class="max-w-[1200px] mx-auto px-5">
        <div use:fade_up={0} class="mb-10">
            <p class="text-xs uppercase tracking-widest text-caption font-500 mb-3">Open roles</p>
            <h2 class="font-display font-400 text-2xl lg:text-3xl text-heading">
                Current openings<span class="text-brand">_</span>
            </h2>
        </div>

        <div class="flex flex-col gap-4">
            {#each [
                {
                    title: 'Full-Stack Software Engineer',
                    type: 'Full-time',
                    location: 'Dar es Salaam / Remote',
                    desc: 'Build and ship production web applications and APIs. You\'re comfortable across the stack — frontend, backend, and deployment — and you care about code quality as much as delivery speed.',
                },
                {
                    title: 'Data Engineer',
                    type: 'Full-time',
                    location: 'Dar es Salaam / Remote',
                    desc: 'Design and build data pipelines, warehouses, and transformation layers for clients across logistics, fintech, and healthcare. Experience with dbt, Airflow, or similar tooling is a strong plus.',
                },
                {
                    title: 'AI / ML Engineer',
                    type: 'Full-time',
                    location: 'Remote',
                    desc: 'Work with clients to identify and build AI-powered features — from LLM integrations to predictive models. You bridge the gap between research and production reliably.',
                },
            ] as role, i}
                <article
                    use:fade_up={i * 100}
                    class="p-8 rounded-2xl bg-card border border-border
                        transition-all duration-200 hover:bg-card-hover hover:border-brand/30"
                >
                    <div class="flex flex-wrap items-center gap-2 mb-5">
                        <span class="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium
                            bg-pill text-body">
                            {role.type}
                        </span>
                        <span class="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium
                            bg-pill text-body">
                            {role.location}
                        </span>
                    </div>
                    <h3 class="font-display font-400 text-xl text-heading mb-3">{role.title}</h3>
                    <p class="text-body leading-relaxed mb-6 max-w-2xl">{role.desc}</p>
                    <a
                        href="/contact?tab=careers"
                        class="inline-flex items-center gap-1.5 text-sm font-medium text-brand
                            hover:text-brand-hover transition-colors duration-150"
                    >
                        Apply →
                    </a>
                </article>
            {/each}
        </div>
    </div>
</section>

<!-- CTA -->
<section class="py-20 bg-card border-t border-dashed border-border text-center">
    <div use:fade_up={0} class="max-w-[1200px] mx-auto px-5">
        <p class="text-xs uppercase tracking-widest text-caption font-500 mb-4">Don't see a fit?</p>
        <h2 class="font-display font-400 text-3xl lg:text-[48px] leading-tight lg:leading-[52px] lg:tracking-[-0.5px] text-heading mb-4">
            Reach out anyway<span class="text-brand">_</span>
        </h2>
        <p class="text-body max-w-md mx-auto mb-8 leading-relaxed">
            If you think you'd be a strong addition to the team,
            <span class="text-emphasis">we'd love to hear from you.</span>
        </p>
        <a
            href="/contact?tab=careers"
            class="inline-flex items-center px-5 py-2.5 rounded-lg bg-brand text-white
                text-sm font-medium transition-all duration-150 hover:bg-brand-hover"
        >
            Send a message
        </a>
    </div>
</section>
