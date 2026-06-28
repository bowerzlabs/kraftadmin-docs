<script lang="ts">
	import Admonition from './Admonition.svelte';

	interface Props {
		title?: string;
	}

	let { title }: Props = $props();
</script>

<Admonition
	type="important"
	{title}
>
	<slot />
</Admonition>