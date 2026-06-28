<script lang="ts">
	interface Props {
		since: string;
	}

	let { since }: Props = $props();
</script>

<span class="ml-2 rounded bg-emerald-600 px-2 py-1 text-xs font-semibold text-white">
	v{since}
</span>