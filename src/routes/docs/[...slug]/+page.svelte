<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.metadata.title}</title>

	<meta
		name="description"
		content={data.metadata.description}
	/>
</svelte:head>

{#key data.slug}
	<svelte:component this={data.component} />
{/key}