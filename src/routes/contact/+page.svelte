<script lang="ts">
import { page } from "$app/stores";
import { fade_up } from "$lib/actions/animate";

type EnquiryData = {
    full_name: string;
    email: string;
    company: string;
    message: string;
};

type CareersData = {
    full_name: string;
    email: string;
    role: string;
    portfolio: string;
    message: string;
};

let active_tab = $state<"enquiry" | "careers">("enquiry");

let enquiry_data = $state<EnquiryData>({
    full_name: "",
    email: "",
    company: "",
    message: "",
});

let enquiry_submitted = $state(false);
let enquiry_submitting = $state(false);

let careers_data = $state<CareersData>({
    full_name: "",
    email: "",
    role: "",
    portfolio: "",
    message: "",
});

let careers_submitted = $state(false);
let careers_submitting = $state(false);

async function handle_enquiry(event: SubmitEvent) {
    event.preventDefault();
    enquiry_submitting = true;
    await new Promise<void>((resolve) => setTimeout(resolve, 1500));
    enquiry_submitting = false;
    enquiry_submitted = true;
}

async function handle_careers(event: SubmitEvent) {
    event.preventDefault();
    careers_submitting = true;
    await new Promise<void>((resolve) => setTimeout(resolve, 1500));
    careers_submitting = false;
    careers_submitted = true;
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
<section class="py-16 lg:py-20 border-b border-dashed border-border">
    <div class="max-w-[1200px] mx-auto px-5">
        <p class="text-xs uppercase tracking-widest text-caption font-500 mb-3">Contact</p>
        <h1 class="font-display font-400 text-4xl lg:text-5xl tracking-tight max-w-xl">
            <span class="block text-[#fafafa]">Let's</span>
            <span class="block" style="color: #3d6eff">talk_</span>
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

            <!-- Form column -->
            <div use:fade_up={0}>

                <!-- Tab switcher -->
                <div class="inline-flex bg-card rounded-full p-1 mb-8 border border-border">
                    <button
                        type="button"
                        onclick={() => (active_tab = "enquiry")}
                        class="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-150
                            {active_tab === 'enquiry'
                                ? 'bg-border text-heading'
                                : 'text-body hover:text-heading'}"
                    >
                        General Enquiry
                    </button>
                    <button
                        type="button"
                        onclick={() => (active_tab = "careers")}
                        class="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-150
                            {active_tab === 'careers'
                                ? 'bg-border text-heading'
                                : 'text-body hover:text-heading'}"
                    >
                        Careers
                    </button>
                </div>

                <!-- General Enquiry form -->
                {#if active_tab === "enquiry"}
                    {#if enquiry_submitted}
                        <div class="flex flex-col gap-4 p-8 rounded-2xl bg-card border border-border">
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
                        <form onsubmit={handle_enquiry} class="flex flex-col gap-5">
                            <div class="flex flex-col gap-1.5">
                                <label for="full_name" class="text-sm font-500 text-heading">
                                    Full name <span class="text-brand">*</span>
                                </label>
                                <input
                                    id="full_name"
                                    type="text"
                                    required
                                    autocomplete="name"
                                    placeholder="Your full name"
                                    bind:value={enquiry_data.full_name}
                                    class="w-full px-4 py-3 rounded-lg border border-border text-sm text-heading
                                        placeholder:text-caption bg-card transition-all duration-150
                                        focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                                />
                            </div>

                            <div class="flex flex-col gap-1.5">
                                <label for="email" class="text-sm font-500 text-heading">
                                    Email address <span class="text-brand">*</span>
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    autocomplete="email"
                                    placeholder="you@example.com"
                                    bind:value={enquiry_data.email}
                                    class="w-full px-4 py-3 rounded-lg border border-border text-sm text-heading
                                        placeholder:text-caption bg-card transition-all duration-150
                                        focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                                />
                            </div>

                            <div class="flex flex-col gap-1.5">
                                <label for="company" class="text-sm font-500 text-heading">
                                    Company
                                    <span class="text-caption font-400">(optional)</span>
                                </label>
                                <input
                                    id="company"
                                    type="text"
                                    autocomplete="organization"
                                    placeholder="Your organisation"
                                    bind:value={enquiry_data.company}
                                    class="w-full px-4 py-3 rounded-lg border border-border text-sm text-heading
                                        placeholder:text-caption bg-card transition-all duration-150
                                        focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                                />
                            </div>

                            <div class="flex flex-col gap-1.5">
                                <label for="message" class="text-sm font-500 text-heading">
                                    Message <span class="text-brand">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={6}
                                    placeholder="Tell us about your project, your team, or what you're trying to solve..."
                                    bind:value={enquiry_data.message}
                                    class="w-full px-4 py-3 rounded-lg border border-border text-sm text-heading
                                        placeholder:text-caption bg-card transition-all duration-150
                                        focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20
                                        resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={enquiry_submitting}
                                class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg
                                    bg-brand text-white text-sm font-medium transition-all duration-150
                                    hover:bg-brand-hover disabled:opacity-50 disabled:cursor-not-allowed self-start"
                            >
                                {#if enquiry_submitting}
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
                {/if}

                <!-- Careers form -->
                {#if active_tab === "careers"}
                    {#if careers_submitted}
                        <div class="flex flex-col gap-4 p-8 rounded-2xl bg-card border border-border">
                            <div class="w-10 h-10 rounded-lg bg-brand/20 flex items-center justify-center text-brand">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <h2 class="font-display text-xl text-heading">Application sent</h2>
                            <p class="text-body leading-relaxed">
                                Thanks for your interest in joining Elevate. We'll review your message and be in touch.
                            </p>
                        </div>
                    {:else}
                        <form onsubmit={handle_careers} class="flex flex-col gap-5">
                            <div class="flex flex-col gap-1.5">
                                <label for="c_full_name" class="text-sm font-500 text-heading">
                                    Full name <span class="text-brand">*</span>
                                </label>
                                <input
                                    id="c_full_name"
                                    type="text"
                                    required
                                    autocomplete="name"
                                    placeholder="Your full name"
                                    bind:value={careers_data.full_name}
                                    class="w-full px-4 py-3 rounded-lg border border-border text-sm text-heading
                                        placeholder:text-caption bg-card transition-all duration-150
                                        focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                                />
                            </div>

                            <div class="flex flex-col gap-1.5">
                                <label for="c_email" class="text-sm font-500 text-heading">
                                    Email address <span class="text-brand">*</span>
                                </label>
                                <input
                                    id="c_email"
                                    type="email"
                                    required
                                    autocomplete="email"
                                    placeholder="you@example.com"
                                    bind:value={careers_data.email}
                                    class="w-full px-4 py-3 rounded-lg border border-border text-sm text-heading
                                        placeholder:text-caption bg-card transition-all duration-150
                                        focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                                />
                            </div>

                            <div class="flex flex-col gap-1.5">
                                <label for="c_role" class="text-sm font-500 text-heading">
                                    Role you're interested in <span class="text-brand">*</span>
                                </label>
                                <select
                                    id="c_role"
                                    required
                                    bind:value={careers_data.role}
                                    class="w-full px-4 py-3 rounded-lg border border-border text-sm text-heading
                                        bg-card transition-all duration-150
                                        focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                                >
                                    <option value="" disabled selected>Select a role…</option>
                                    <option value="fullstack">Full-Stack Software Engineer</option>
                                    <option value="data">Data Engineer</option>
                                    <option value="ai">AI / ML Engineer</option>
                                    <option value="other">Other / General interest</option>
                                </select>
                            </div>

                            <div class="flex flex-col gap-1.5">
                                <label for="c_portfolio" class="text-sm font-500 text-heading">
                                    Portfolio or LinkedIn
                                    <span class="text-caption font-400">(optional)</span>
                                </label>
                                <input
                                    id="c_portfolio"
                                    type="url"
                                    placeholder="https://…"
                                    bind:value={careers_data.portfolio}
                                    class="w-full px-4 py-3 rounded-lg border border-border text-sm text-heading
                                        placeholder:text-caption bg-card transition-all duration-150
                                        focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                                />
                            </div>

                            <div class="flex flex-col gap-1.5">
                                <label for="c_message" class="text-sm font-500 text-heading">
                                    Message <span class="text-brand">*</span>
                                </label>
                                <textarea
                                    id="c_message"
                                    required
                                    rows={6}
                                    placeholder="Tell us a bit about yourself, your experience, and what draws you to Elevate…"
                                    bind:value={careers_data.message}
                                    class="w-full px-4 py-3 rounded-lg border border-border text-sm text-heading
                                        placeholder:text-caption bg-card transition-all duration-150
                                        focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20
                                        resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={careers_submitting}
                                class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg
                                    bg-brand text-white text-sm font-medium transition-all duration-150
                                    hover:bg-brand-hover disabled:opacity-50 disabled:cursor-not-allowed self-start"
                            >
                                {#if careers_submitting}
                                    <svg class="w-4 h-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                    </svg>
                                    Sending…
                                {:else}
                                    Send application
                                {/if}
                            </button>
                        </form>
                    {/if}
                {/if}

            </div>

            <!-- Info panel -->
            <div use:fade_up={100} class="flex flex-col gap-3">
                <div class="p-6 rounded-2xl bg-card border border-border flex gap-4
                    transition-all duration-200 hover:bg-card-hover hover:border-brand/30">
                    <div class="w-9 h-9 rounded-lg bg-accent-tag flex items-center justify-center text-brand shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                    </div>
                    <div>
                        <p class="text-xs font-500 uppercase tracking-widest text-caption mb-1">Email</p>
                        <a href="mailto:hello@elevateco.dev"
                           class="text-sm text-heading hover:text-brand transition-colors duration-150">
                            hello@elevateco.dev
                        </a>
                    </div>
                </div>

                <div class="p-6 rounded-2xl bg-card border border-border flex gap-4
                    transition-all duration-200 hover:bg-card-hover hover:border-brand/30">
                    <div class="w-9 h-9 rounded-lg bg-accent-tag flex items-center justify-center text-brand shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                    </div>
                    <div>
                        <p class="text-xs font-500 uppercase tracking-widest text-caption mb-1">Location</p>
                        <p class="text-sm text-heading">Dar es Salaam, Tanzania</p>
                    </div>
                </div>

                <div class="p-6 rounded-2xl bg-card border border-border flex gap-4
                    transition-all duration-200 hover:bg-card-hover hover:border-brand/30">
                    <div class="w-9 h-9 rounded-lg bg-accent-tag flex items-center justify-center text-brand shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                    </div>
                    <div>
                        <p class="text-xs font-500 uppercase tracking-widest text-caption mb-1">Response time</p>
                        <p class="text-sm text-heading">Within 1 business day</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
