<script lang="ts">
	import { getBreadcrumbs } from '$lib/docs/navigation';

	interface Props {
		slug: string;
	}

	let { slug }: Props = $props();

	const breadcrumbs = $derived(getBreadcrumbs(slug));
</script>

<nav class="mb-8 flex flex-wrap items-center gap-2 text-sm">

	{#each breadcrumbs as crumb, index}

		{#if index > 0}
			<span class="text-slate-400">/</span>
		{/if}

		{#if crumb.href === '#'}

			<span class="font-medium text-slate-500 dark:text-slate-400">
				{crumb.title}
			</span>

		{:else}

			<a
				href={crumb.href}
				class="transition hover:text-indigo-600 dark:hover:text-indigo-400"
			>
				{crumb.title}
			</a>

		{/if}

	{/each}

</nav>