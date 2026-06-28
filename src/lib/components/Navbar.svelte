<script lang="ts">
    import { page } from '$app/state';

    let {
        theme,
        toggleTheme
    }: {
        theme: 'light' | 'dark';
        toggleTheme: () => void;
    } = $props();

    let mobileOpen = $state(false);

    const links = [
        {
            title: 'Documentation',
            href: '/docs'
        },
        {
            title: 'Demo',
            href: '/demo'
        },
        {
            title: 'Releases',
            href: '/releases'
        }
    ];

    function isActive(href: string) {
        return page.url.pathname.startsWith(href);
    }

    function closeMenu() {
        mobileOpen = false;
    }
</script>

<header class="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">

    <nav class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">

        <!-- Logo -->

        <a
            href="/"
            class="flex items-center gap-3"
        >
            <img
                src="/logo.svg"
                alt="KraftAdmin"
                class="h-8 w-8 rounded"
            />

            <span class="text-lg font-bold">
                KraftAdmin
            </span>
        </a>

        <!-- Desktop Navigation -->

        <ul class="hidden items-center gap-8 md:flex">

            {#each links as link}

                <li>

                    <a
                        href={link.href}
                        class:text-indigo-600={isActive(link.href)}
                        class:dark:text-indigo-400={isActive(link.href)}
                        class="text-sm font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                        {link.title}
                    </a>

                </li>

            {/each}

        </ul>

        <!-- Desktop Actions -->

        <div class="hidden items-center gap-3 md:flex">

            <button
                onclick={toggleTheme}
                aria-label="Toggle theme"
                class="rounded-lg border border-slate-300 p-2 transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-900"
            >

                {#if theme === 'dark'}
                    🌙
                {:else}
                    ☀️
                {/if}

            </button>

            <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
            >
                GitHub
            </a>

            <a href="/docs">

                <button
                    class="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500"
                >
                    Get Started
                </button>

            </a>

        </div>

        <!-- Mobile Toggle -->

        <button
            onclick={() => mobileOpen = !mobileOpen}
            class="rounded-lg p-2 transition hover:bg-slate-100 dark:hover:bg-slate-900 md:hidden"
            aria-label="Toggle menu"
        >

            {#if mobileOpen}
                ✕
            {:else}
                ☰
            {/if}

        </button>

    </nav>

    <!-- Mobile Navigation -->

    {#if mobileOpen}

        <div class="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 md:hidden">

            <nav class="space-y-2 p-4">

                {#each links as link}

                    <a
                        href={link.href}
                        onclick={closeMenu}
                        class:bg-slate-100={isActive(link.href)}
                        class:dark:bg-slate-900={isActive(link.href)}
                        class="block rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-slate-100 dark:hover:bg-slate-900"
                    >
                        {link.title}
                    </a>

                {/each}

                <hr class="my-3 border-slate-200 dark:border-slate-800" />

                <button
                    onclick={toggleTheme}
                    class="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-slate-100 dark:hover:bg-slate-900"
                >

                    <span>Theme</span>

                    <span>

                        {#if theme === 'dark'}
                            🌙 Dark
                        {:else}
                            ☀️ Light
                        {/if}

                    </span>

                </button>

                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="block rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-slate-100 dark:hover:bg-slate-900"
                >
                    GitHub
                </a>

                <a
                    href="/docs"
                    onclick={closeMenu}
                    class="mt-4 block rounded-lg bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-indigo-500"
                >
                    Get Started
                </a>

            </nav>

        </div>

    {/if}

</header>