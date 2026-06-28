<script lang="ts">
	interface Props {
		method: string;
		path: string;
	}

	let { method, path }: Props = $props();

	const colors = {
		GET: "bg-green-600",
		POST: "bg-blue-600",
		PUT: "bg-orange-600",
		PATCH: "bg-yellow-600",
		DELETE: "bg-red-600"
	};

	const color = $derived(colors[method] ?? "bg-slate-700");
</script>

<div class="my-6 flex items-center gap-4 rounded-xl border border-slate-200 p-4 dark:border-slate-800">

	<span class={`rounded px-3 py-1 text-xs font-bold text-white ${color}`}>
		{method}
	</span>

	<code class="font-mono">
		{path}
	</code>

</div>

<div class="mt-4">
	<slot />
</div>

