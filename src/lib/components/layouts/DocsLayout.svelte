<script lang="ts">
	import { tick } from 'svelte';
	import Sidebar from '$lib/components/docs/Sidebar.svelte';
	import Breadcrumbs from '$lib/components/docs/Breadcrumbs.svelte';
	import PrevNext from '$lib/components/docs/PrevNext.svelte';

	let { slug } = $props();

	let sidebarOpen = $state(false);

	let article: HTMLElement;

	async function enhanceCodeBlocks() {
		await tick();

		if (!article) return;

		article.querySelectorAll('pre').forEach((pre) => {
			if (pre.querySelector('.copy-button')) return;

			pre.classList.add('relative');

			const button = document.createElement('button');

			button.className =
				'copy-button absolute right-3 top-3 rounded-md border border-slate-700 bg-slate-900/90 px-3 py-1 text-xs text-white transition hover:bg-slate-800';

			button.textContent = 'Copy';

			button.onclick = async () => {
				const code = pre.querySelector('code')?.textContent ?? '';

				try {
					await navigator.clipboard.writeText(code);

					button.textContent = 'Copied ✓';

					setTimeout(() => {
						button.textContent = 'Copy';
					}, 2000);
				} catch (err) {
					console.error(err);
				}
			};

			pre.appendChild(button);
		});
	}

	$effect(() => {
		slug;
		enhanceCodeBlocks();
	});
</script>

<div class="mx-auto flex max-w-7xl flex-col xl:flex-row">

	<!-- Mobile Header -->
	<div class="flex items-center justify-between border-b border-slate-200 px-4 py-3 dark:border-slate-800 xl:hidden">

		<button
			onclick={() => (sidebarOpen = !sidebarOpen)}
			class="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium transition hover:bg-slate-100 dark:border-slate-800 dark:hover:bg-slate-900"
		>
			{sidebarOpen ? '✕ Close' : '☰ Documentation'}
		</button>

	</div>

	<!-- Sidebar -->
	<aside
		class:hidden={!sidebarOpen}
		class="w-full shrink-0 border-b border-slate-200 dark:border-slate-800 dark:bg-slate-950 xl:block xl:w-64 xl:border-b-0 xl:border-r"
	>
		<div class="xl:sticky xl:top-16 xl:max-h-[calc(100vh-4rem)] xl:overflow-y-auto">
			<Sidebar current={slug} />
		</div>
	</aside>

	<!-- Main Content -->
	<main class="min-w-0 flex-1 px-4 py-8 sm:px-6 lg:px-10">

		<Breadcrumbs slug={slug} />

		<article
			bind:this={article}
			class="prose prose-slate max-w-none dark:prose-invert"
		>
			<slot />
		</article>

		<PrevNext slug={slug} />

	</main>

</div>