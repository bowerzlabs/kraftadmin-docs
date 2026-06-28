<script lang="ts">
	interface Props {
		title?: string;
	}

	let { title = "Terminal" }: Props = $props();
</script>

<div class="my-6 overflow-hidden rounded-xl border border-slate-800">

	<div class="flex items-center gap-2 bg-slate-900 px-4 py-2">

		<div class="h-3 w-3 rounded-full bg-red-500"></div>
		<div class="h-3 w-3 rounded-full bg-yellow-500"></div>
		<div class="h-3 w-3 rounded-full bg-green-500"></div>

		<span class="ml-2 text-xs text-slate-400">
			{title}
		</span>

	</div>

	<pre class="overflow-x-auto bg-slate-950 p-4 text-sm text-slate-100"><code><slot /></code></pre>

</div>