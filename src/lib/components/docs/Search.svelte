<script lang="ts">

    import { navigation } from '$lib/docs/navigation';

    let query = '';

    $: results = navigation
        .flatMap((section) => section.items)
        .filter((page) =>
            page.title.toLowerCase().includes(query.toLowerCase())
        );

</script>

<div class="relative">

    <input
        bind:value={query}
        placeholder="Search docs..."
        class="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 outline-none focus:border-indigo-500"
    />

    {#if query}

        <div class="absolute mt-2 w-full rounded-lg border border-slate-800 bg-slate-950">

            {#each results as result}

                <a
                    href={result.href}
                    class="block px-4 py-2 hover:bg-slate-900"
                >
                    {result.title}
                </a>

            {/each}

        </div>

    {/if}

</div>