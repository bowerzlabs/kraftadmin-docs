<script lang="ts">
	interface Props {
		title: string;
		href?: string;
	}

	let { title, href }: Props = $props();
</script>

<svelte:element
	this={href ? "a" : "div"}
	href={href}
	class="block rounded-xl border border-slate-200 bg-white p-6 transition hover:border-indigo-500 hover:shadow dark:border-slate-800 dark:bg-slate-900"
>

	<h3 class="mb-2 text-lg font-semibold">
		{title}
	</h3>

	<div class="text-sm text-slate-600 dark:text-slate-300">
		<slot />
	</div>

</svelte:element>