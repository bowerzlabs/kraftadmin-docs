<script lang="ts">
    interface NavigationItem {
        title: string;
        href: string;
    }

    let {
        previous,
        next
    }: {
        previous: NavigationItem | null;
        next: NavigationItem | null;
    } = $props();
</script>

<div class="mt-16 flex justify-between">

    {#if previous}
        <a
            href={previous.href}
            class="rounded-lg border border-slate-800 p-4 hover:border-indigo-500 transition-colors"
        >
            <div class="text-xs text-slate-500">
                Previous
            </div>

            <div class="font-semibold">
                {previous.title}
            </div>
        </a>
    {:else}
        <div></div>
    {/if}

    {#if next}
        <a
            href={next.href}
            class="rounded-lg border border-slate-800 p-4 text-right hover:border-indigo-500 transition-colors"
        >
            <div class="text-xs text-slate-500">
                Next
            </div>

            <div class="font-semibold">
                {next.title}
            </div>
        </a>
    {/if}

</div>