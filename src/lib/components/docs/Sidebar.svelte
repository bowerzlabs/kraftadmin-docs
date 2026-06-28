<script lang="ts">
	import { page } from '$app/state';
	import { getNavigation } from '$lib/docs/navigation';

	const navigation = getNavigation();

	function href(slug: string) {
		return `/docs/${slug}`;
	}

	function isActive(slug: string) {
		return page.url.pathname === href(slug);
	}

	function sectionActive(
		items: {
			title: string;
			slug: string;
		}[]
	) {
		return items.some((item) => isActive(item.slug));
	}
</script>

<aside
	class="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto border-r border-slate-200 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950"
>
	<nav class="space-y-6 p-6">

		{#each navigation as section}

			<details
				open={sectionActive(section.items)}
				class="group"
			>

				<summary
					class="cursor-pointer select-none text-sm font-semibold text-slate-900 marker:hidden dark:text-slate-100"
				>
					{section.title}
				</summary>

				<ul class="mt-3 ml-2 space-y-1">

					{#each section.items as item}

						<li>

							<a
								href={href(item.slug)}
								aria-current={isActive(item.slug) ? 'page' : undefined}
								class:bg-indigo-50={isActive(item.slug)}
								class:text-indigo-600={isActive(item.slug)}
								class:dark:bg-indigo-950={isActive(item.slug)}
								class:dark:text-indigo-400={isActive(item.slug)}
								class="block rounded-lg px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-100"
							>
								{item.title}
							</a>

						</li>

					{/each}

				</ul>

			</details>

		{/each}

	</nav>
</aside>