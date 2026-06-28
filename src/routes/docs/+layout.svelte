<script lang="ts">
	import DocsLayout from '$lib/components/layouts/DocsLayout.svelte';


    let { data, children } = $props();
</script>

<DocsLayout slug={data.slug}>
    {@render children()}
</DocsLayout>