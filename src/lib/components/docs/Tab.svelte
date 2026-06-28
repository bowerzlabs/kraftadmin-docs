<script lang="ts">
	import { getContext } from 'svelte';

	interface Props {
		title: string;
	}

	let { title }: Props = $props();

	const tabs = getContext<{
		register(title: string): number;
		isActive(id: number): boolean;
	}>('tabs');

	const id = tabs.register(title);
</script>

{#if tabs.isActive(id)}
	<slot />
{/if}