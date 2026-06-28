<script lang="ts">
	interface Props {
		columns?: number;
	}

	let { columns = 2 }: Props = $props();

	const grid = $derived(
		columns === 3
			? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
			: "grid-cols-1 md:grid-cols-2"
	);
</script>

<div class={`my-8 grid gap-6 ${grid}`}>
	<slot />
</div>