<script lang="ts">
	import { tick } from 'svelte';
	import Sidebar from '$lib/components/docs/Sidebar.svelte';
	import Breadcrumbs from '$lib/components/docs/Breadcrumbs.svelte';
	import PrevNext from '$lib/components/docs/PrevNext.svelte';
	import TableOfContents from '$lib/components/docs/TableOfContents.svelte';

	let { slug } = $props();

	let sidebarOpen = $state(false);

	let article: HTMLElement;

	async function enhanceCodeBlocks() {
		await tick();

		if (!article) return;

		article.querySelectorAll('pre').forEach((pre) => {
			// Don't add twice
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
		slug; // rerun when documentation page changes
		enhanceCodeBlocks();
	});
</script>

<div class="mx-auto grid max-w-7xl grid-cols-1 xl:grid-cols-[280px_minmax(0,1fr)_260px]">

	<button
		onclick={() => (sidebarOpen = !sidebarOpen)}
		class="m-4 rounded-lg border border-slate-200 px-4 py-2 dark:border-slate-800 xl:hidden"
	>
		☰ Documentation
	</button>

	<aside
		class:hidden={!sidebarOpen}
		class="border-r dark:border-slate-800 dark:bg-slate-950 xl:block"
	>
		<Sidebar current={slug} />
	</aside>

	<main class="min-w-0 px-6 py-8">

		<!-- <Breadcrumbs slug={slug} /> -->
		<Breadcrumbs slug={slug} />

		<article
			bind:this={article}
			class="prose prose-slate dark:prose-invert max-w-none"
		>
			<slot />
		</article>

		<PrevNext slug={slug} />

	</main>

	<TableOfContents />

</div>