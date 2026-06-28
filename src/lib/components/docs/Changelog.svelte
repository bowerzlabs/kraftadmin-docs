<script lang="ts">
	interface Props {
		version: string;
		date?: string;
	}

	let {
		version,
		date
	}: Props = $props();
</script>

<section class="my-8">

<div class="mb-4 flex items-center gap-3">

<span class="rounded bg-indigo-600 px-3 py-1 font-semibold text-white">

v{version}

</span>

{#if date}

<span class="text-sm text-slate-500">

{date}

</span>

{/if}

</div>

<div class="ml-2 border-l-2 border-slate-200 pl-6 dark:border-slate-800">

<slot />

</div>

</section>