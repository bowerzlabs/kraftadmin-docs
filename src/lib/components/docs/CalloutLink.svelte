<script lang="ts">
	interface Props {
		title: string;
		href: string;
		description?: string;
	}

	let {
		title,
		href,
		description
	}: Props = $props();
</script>

<a
	href={href}
	class="my-6 flex items-center justify-between rounded-xl border border-slate-200 p-5 transition hover:border-indigo-500 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-900"
>

<div>

<div class="font-semibold">

{title}

</div>

{#if description}

<div class="mt-1 text-sm text-slate-500">

{description}

</div>

{/if}

</div>

<div class="text-2xl">

→

</div>

</a>