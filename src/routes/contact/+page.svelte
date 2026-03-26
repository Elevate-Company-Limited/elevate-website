<script lang="ts">
    import { fade_up } from '$lib/actions/animate';

    type FormData = {
        full_name: string;
        email: string;
        company: string;
        message: string;
    };

    let form_data = $state<FormData>({
        full_name: "",
        email: "",
        company: "",
        message: "",
    });

    let submitted = $state(false);
    let submitting = $state(false);

    async function handle_submit(event: SubmitEvent) {
        event.preventDefault();
        submitting = true;

        // TODO: wire up real form backend
        await new Promise<void>((resolve) => setTimeout(resolve, 1500));

        submitting = false;
        submitted = true;
    }
</script>

<svelte:head>
    <title>Contact — Elevate</title>
    <meta
        name="description"
        content="Get in touch with the Elevate team. Tell us what you're building — we'd love to help."
    />
</svelte:head>

<!-- Page header -->
<section class="py-16 lg:py-20 border-b border-dashed border-white/[0.06]">
    <div class="max-w-[1200px] mx-auto px-5">
        <p class="text-xs uppercase tracking-widest text-body font-500 mb-3">Contact</p>
        <h1 class="font-display font-400 text-4xl lg:text-5xl text-heading tracking-tight max-w-xl">
            Let's talk<span class="text-brand">_</span>
        </h1>
        <p class="mt-4 text-body max-w-lg leading-relaxed">
            Tell us about your project, your team, or just say hello.
            <span class="text-emphasis">We'll get back to you within one business day.</span>
        </p>
    </div>
</section>

<!-- Contact section -->
<section class="py-16 lg:py-24 bg-page">
    <div class="max-w-[1200px] mx-auto px-5">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">

            <!-- Form -->
            <div use:fade_up={0}>
                {#if submitted}
                    <div class="flex flex-col gap-4 p-8 rounded-2xl bg-card border border-white/8">
                        <div class="w-10 h-10 rounded-lg bg-brand/20 flex items-center justify-center text-brand">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <h2 class="font-display text-xl text-heading">Message sent</h2>
                        <p class="text-body leading-relaxed">
                            Thanks for reaching out. We'll be in touch within one business day.
                        </p>
                    </div>
                {:else}
                    <form onsubmit={handle_submit} class="flex flex-col gap-5">
                        <div class="flex flex-col gap-1.5">
                            <label for="full_name" class="text-sm font-500 text-heading/80">
                                Full name <span class="text-brand">*</span>
                            </label>
                            <input
                                id="full_name"
                                type="text"
                                required
                                autocomplete="name"
                                placeholder="Your full name"
                                bind:value={form_data.full_name}
                                class="w-full px-4 py-3 rounded-lg border border-white/8 text-sm text-heading
                                    placeholder:text-body/40 bg-card transition-all duration-150
                                    focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                            />
                        </div>

                        <div class="flex flex-col gap-1.5">
                            <label for="email" class="text-sm font-500 text-heading/80">
                                Email address <span class="text-brand">*</span>
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                autocomplete="email"
                                placeholder="you@example.com"
                                bind:value={form_data.email}
                                class="w-full px-4 py-3 rounded-lg border border-white/8 text-sm text-heading
                                    placeholder:text-body/40 bg-card transition-all duration-150
                                    focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                            />
                        </div>

                        <div class="flex flex-col gap-1.5">
                            <label for="company" class="text-sm font-500 text-heading/80">
                                Company
                                <span class="text-body/50 font-400">(optional)</span>
                            </label>
                            <input
                                id="company"
                                type="text"
                                autocomplete="organization"
                                placeholder="Your organisation"
                                bind:value={form_data.company}
                                class="w-full px-4 py-3 rounded-lg border border-white/8 text-sm text-heading
                                    placeholder:text-body/40 bg-card transition-all duration-150
                                    focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                            />
                        </div>

                        <div class="flex flex-col gap-1.5">
                            <label for="message" class="text-sm font-500 text-heading/80">
                                Message <span class="text-brand">*</span>
                            </label>
                            <textarea
                                id="message"
                                required
                                rows={6}
                                placeholder="Tell us about your project, your team, or what you're trying to solve..."
                                bind:value={form_data.message}
                                class="w-full px-4 py-3 rounded-lg border border-white/8 text-sm text-heading
                                    placeholder:text-body/40 bg-card transition-all duration-150
                                    focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20
                                    resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={submitting}
                            class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg
                                bg-brand text-white text-sm font-medium transition-all duration-150
                                hover:bg-brand-hover disabled:opacity-50 disabled:cursor-not-allowed self-start"
                        >
                            {#if submitting}
                                <svg class="w-4 h-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                </svg>
                                Sending…
                            {:else}
                                Send message
                            {/if}
                        </button>
                    </form>
                {/if}
            </div>

            <!-- Info panel -->
            <div use:fade_up={100} class="flex flex-col gap-3">
                <div class="p-6 rounded-2xl bg-card border border-white/8 flex gap-4
                    transition-all duration-150 hover:border-white/15">
                    <div class="w-9 h-9 rounded-lg bg-accent-tag flex items-center justify-center text-brand shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                    </div>
                    <div>
                        <p class="text-xs font-500 uppercase tracking-widest text-body/60 mb-1">Email</p>
                        <a href="mailto:hello@elevateco.dev"
                           class="text-sm text-heading hover:text-brand transition-colors duration-150">
                            hello@elevateco.dev
                        </a>
                    </div>
                </div>

                <div class="p-6 rounded-2xl bg-card border border-white/8 flex gap-4
                    transition-all duration-150 hover:border-white/15">
                    <div class="w-9 h-9 rounded-lg bg-accent-tag flex items-center justify-center text-brand shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                    </div>
                    <div>
                        <p class="text-xs font-500 uppercase tracking-widest text-body/60 mb-1">Location</p>
                        <p class="text-sm text-heading">Dar es Salaam, Tanzania</p>
                    </div>
                </div>

                <div class="p-6 rounded-2xl bg-card border border-white/8 flex gap-4
                    transition-all duration-150 hover:border-white/15">
                    <div class="w-9 h-9 rounded-lg bg-accent-tag flex items-center justify-center text-brand shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                    </div>
                    <div>
                        <p class="text-xs font-500 uppercase tracking-widest text-body/60 mb-1">Response time</p>
                        <p class="text-sm text-heading">Within 1 business day</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
