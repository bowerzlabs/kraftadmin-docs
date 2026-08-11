<script lang="ts">
    import { onMount } from 'svelte';
    import { Cookie, X } from '@lucide/svelte';

    let visible = $state(false);

    onMount(() => {
        const consent = localStorage.getItem('cookie-consent');

        if (!consent) {
            visible = true;
        }
    });

    function accept() {
        localStorage.setItem('cookie-consent', 'accepted');
        visible = false;
    }

    function decline() {
        localStorage.setItem('cookie-consent', 'declined');
        visible = false;
    }
</script>

{#if visible}
    <div
        class="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-xl border
               border-slate-200 bg-white p-5 shadow-2xl
               dark:border-slate-800 dark:bg-slate-900"
    >
        <div class="flex items-start gap-4">
            <div
                class="hidden h-10 w-10 shrink-0 items-center justify-center
                       rounded-lg bg-blue-100 text-blue-600 sm:flex
                       dark:bg-blue-950 dark:text-blue-400"
            >
                <Cookie size={20} />
            </div>

            <div class="flex-1">
                <h2 class="font-semibold text-slate-900 dark:text-white">
                    We use cookies
                </h2>

                <p class="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    We use cookies and similar technologies to remember your
                    preferences and understand how our website is used. You can
                    accept or decline optional cookies.
                </p>

                <div class="mt-4 flex flex-wrap gap-3">
                    <button
                        onclick={accept}
                        class="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium
                               text-white transition hover:bg-blue-700"
                    >
                        Accept
                    </button>

                    <button
                        onclick={decline}
                        class="rounded-lg border border-slate-300 px-4 py-2
                               text-sm font-medium text-slate-700 transition
                               hover:bg-slate-50
                               dark:border-slate-700 dark:text-slate-300
                               dark:hover:bg-slate-800"
                    >
                        Decline
                    </button>
                </div>
            </div>

            <button
                onclick={decline}
                aria-label="Close cookie notice"
                class="text-slate-400 hover:text-slate-600
                       dark:hover:text-slate-200"
            >
                <X size={18} />
            </button>
        </div>
    </div>
{/if}