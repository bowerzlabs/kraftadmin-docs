<script lang="ts">
	interface Props {
		title: string;
	}

	let { title }: Props = $props();
</script>

<li class="relative">
	<div class="absolute -left-[34px] flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
	</div>

	<h3 class="mb-2 text-lg font-semibold">
		{title}
	</h3>

	<div class="prose dark:prose-invert max-w-none">
		<slot />
	</div>
</li>