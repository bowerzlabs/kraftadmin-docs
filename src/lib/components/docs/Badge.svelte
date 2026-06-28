<script lang="ts">
	interface Props {
		color?: string;
	}

	let { color = "indigo" }: Props = $props();
</script>

<span class={`rounded-full bg-${color}-100 px-2 py-1 text-xs font-semibold text-${color}-700 dark:bg-${color}-900/40 dark:text-${color}-300`}>
	<slot />
</span>