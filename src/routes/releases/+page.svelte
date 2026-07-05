<script lang="ts">
    let { data } = $props();
    const releases = data.releases;
</script>

<section class="mx-auto w-full max-w-5xl px-4 py-10 md:px-6 md:py-16 overflow-x-hidden">
    {#if releases.length === 0}
        <div class="rounded-xl border border-slate-200 p-8 text-center dark:border-slate-800">
            No releases have been published yet.
        </div>
    {:else}
        <div class="">
            {#each releases as release}
                <article
                    class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition mb-5 hover:border-indigo-500 dark:border-slate-800 dark:bg-slate-950 md:p-8 max-w-full"
                >
                    <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div class="min-w-0 flex-1">
                            <h2 class="break-words text-xl font-bold md:text-2xl">
                                {release.name || release.tag_name}
                            </h2>
                            <div class="mt-2 flex flex-wrap items-center gap-2 text-xs md:text-sm">
                                <span class="rounded-full bg-indigo-100 px-3 py-1 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                                    {release.tag_name}
                                </span>
                                <span class="text-slate-500">
                                    {new Date(release.published_at).toLocaleDateString()}
                                </span>
                                {#if release.prerelease}
                                    <span class="rounded-full bg-amber-100 px-3 py-1 text-amber-700 dark:bg-amber-950 dark:text-amber-300">
                                        Pre-release
                                    </span>
                                {/if}
                            </div>
                        </div>

                        <a
                            href={release.html_url}
                            target="_blank"
                            class="flex-shrink-0 rounded-lg border border-slate-300 px-4 py-2 text-center text-sm font-medium hover:border-indigo-500 dark:border-slate-700"
                        >
                            View on GitHub →
                        </a>
                    </div>

                    {#if release.body}
                        <div
                            class="prose prose-slate mt-6 !max-w-none w-full break-words text-sm leading-relaxed dark:prose-invert md:mt-8 md:text-base"
                            style="word-wrap: break-word; overflow-wrap: break-word;"
                        >
                            {release.body}
                        </div>
                    {/if}
                </article>
            {/each}
        </div>
    {/if}
</section>