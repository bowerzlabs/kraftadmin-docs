<script lang="ts">
	interface Props {
		title: string;
		open?: boolean;
	}

	let { title, open = false }: Props = $props();
</script>

<details
	class="my-4 rounded-xl border border-slate-200 dark:border-slate-800"
	{open}
>
	<summary
		class="cursor-pointer px-5 py-4 font-semibold"
	>
		{title}
	</summary>

	<div class="border-t border-slate-200 p-5 dark:border-slate-800">
		<slot />
	</div>
</details>