<script lang="ts">
	interface Props {
		title?: string;
	}

	let { title = "Project Structure" }: Props = $props();
</script>

<div class="my-6 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">

	<div class="border-b border-slate-200 bg-slate-100 px-4 py-2 font-semibold dark:border-slate-800 dark:bg-slate-900">
		📁 {title}
	</div>

	<pre class="overflow-x-auto p-4 text-sm"><code><slot /></code></pre>

</div>