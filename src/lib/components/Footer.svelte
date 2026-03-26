<script lang="ts">
const nav_links = [
    { href: "/services", label: "Services" },
    { href: "/work", label: "Our Work" },
    { href: "/about", label: "About" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
];

const current_year = new Date().getFullYear();
</script>

<footer class="bg-page border-t border-border">
    <div class="max-w-[1200px] mx-auto px-5 py-12 lg:py-16">
        <div class="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-16">
            <!-- Brand column -->
            <div class="flex flex-col gap-4">
                <a href="/" class="font-display text-xl font-600 text-heading tracking-tight">
                    Elevate<span class="text-brand">.</span>
                </a>
                <p class="text-sm text-body leading-relaxed max-w-xs">
                    Software and technology consulting for ambitious organisations.
                </p>
                <p class="text-sm text-body flex items-center gap-1.5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-3.5 h-3.5 shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                    Dar es Salaam, Tanzania
                </p>
            </div>

            <!-- Services links -->
            <div>
                <p class="text-xs font-500 uppercase tracking-widest text-caption mb-4">Services</p>
                <ul class="flex flex-col gap-3">
                    <li><a href="/services#software" class="text-sm text-body hover:text-heading transition-colors duration-150">Custom Software</a></li>
                    <li><a href="/services#ai" class="text-sm text-body hover:text-heading transition-colors duration-150">AI Consulting</a></li>
                    <li><a href="/services#data" class="text-sm text-body hover:text-heading transition-colors duration-150">Data Engineering</a></li>
                    <li><a href="/services#bi" class="text-sm text-body hover:text-heading transition-colors duration-150">Business Intelligence</a></li>
                </ul>
            </div>

            <!-- Company links -->
            <div>
                <p class="text-xs font-500 uppercase tracking-widest text-caption mb-4">Company</p>
                <ul class="flex flex-col gap-3">
                    {#each nav_links as link}
                        <li>
                            <a
                                href={link.href}
                                class="text-sm text-body hover:text-heading transition-colors duration-150"
                            >
                                {link.label}
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>

        <!-- Dashed separator + bottom bar -->
        <div class="mt-12 pt-6 border-t border-dashed border-border flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
            <p class="text-xs text-caption">
                &copy; {current_year} Elevate Company Limited. All rights reserved.
            </p>
            <p class="text-xs text-caption">elevateco.dev</p>
        </div>
    </div>
</footer>
