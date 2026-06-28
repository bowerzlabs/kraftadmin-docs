<script lang="ts">
	import { page } from '$app/state';
	import { tick } from 'svelte';

	interface Heading {
		id: string;
		text: string;
		level: string;
	}

	let headings = $state<Heading[]>([]);
	let active = $state('');

	$effect(async () => {
		// rerun whenever the route changes
		page.url.pathname;

		await tick();

		const elements = [
			...document.querySelectorAll('article h2, article h3')
		];

		headings = elements.map((node) => ({
			id: node.id,
			text: node.textContent ?? '',
			level: node.tagName
		}));

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						active = entry.target.id;
					}
				}
			},
			{
				rootMargin: '-80px 0px -70% 0px'
			}
		);

		elements.forEach((e) => observer.observe(e));

		return () => observer.disconnect();
	});
</script>

<aside
	class="sticky top-20 hidden h-fit w-64 xl:block"
>
	<div
		class="border-l border-slate-200 pl-6 dark:border-slate-800"
	>

		<h3
			class="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-100"
		>
			On this page
		</h3>

		<ul class="space-y-2">

			{#each headings as heading}

				<li class:ml-4={heading.level === 'H3'}>

					<a
						href={'#' + heading.id}
						class:text-indigo-600={active === heading.id}
						class:dark:text-indigo-400={active === heading.id}
						class="block text-sm transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
					>
						{heading.text}
					</a>

				</li>

			{/each}

		</ul>

	</div>
</aside>