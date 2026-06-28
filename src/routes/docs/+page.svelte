<script lang="ts">
	import { docsConfig } from '$lib/docs/config';
</script>

<svelte:head>
	<title>{docsConfig.title}</title>

	<meta
		name="description"
		content={docsConfig.description}
	/>
</svelte:head>

<section class="border-b border-slate-200 dark:border-slate-800">
	<div class="mx-auto max-w-5xl px-6 py-20">

		<div
			class="mb-6 inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 dark:border-indigo-900 dark:bg-indigo-950/30 dark:text-indigo-300"
		>
			Documentation
		</div>

		<h1 class="text-5xl font-black">
			{docsConfig.title}
		</h1>

		<p class="mt-6 max-w-3xl text-xl text-slate-600 dark:text-slate-400">
			{docsConfig.description}
		</p>

		<div class="mt-10 flex flex-wrap gap-4">

			<a
				href="/docs/introduction"
				class="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-500"
			>
				Get Started
			</a>

			{#if docsConfig.repository}
				<a
					href={docsConfig.repository}
					target="_blank"
					class="rounded-xl border border-slate-300 px-6 py-3 font-semibold hover:border-indigo-500 dark:border-slate-700"
				>
					GitHub
				</a>
			{/if}

		</div>

	</div>
</section>

<section class="mx-auto max-w-6xl px-6 py-16">

	<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

		{#each docsConfig.sidebar as group}

			<div class="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">

				<h2 class="mb-5 text-xl font-bold">
					{group.title}
				</h2>

				<ul class="space-y-3">

					{#each group.items as page}

						<li>

							<a
								href={`/docs/${page.slug}`}
								class="group flex items-center justify-between rounded-lg px-3 py-2 transition hover:bg-slate-100 dark:hover:bg-slate-900"
							>

								<span>{page.title}</span>

								<span
									class="opacity-0 transition group-hover:opacity-100"
								>
									→
								</span>

							</a>

						</li>

					{/each}

				</ul>

			</div>

		{/each}

	</div>

</section>

{#if docsConfig.editBaseUrl}

<section class="border-t border-slate-200 dark:border-slate-800">
	<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">

		<div>

			<h2 class="font-semibold">
				Found an issue?
			</h2>

			<p class="text-slate-600 dark:text-slate-400">
				Help improve the documentation.
			</p>

		</div>

		<a
			href={docsConfig.repository}
			target="_blank"
			class="rounded-lg border border-slate-300 px-5 py-2 font-medium hover:border-indigo-500 dark:border-slate-700"
		>
			Contribute →
		</a>

	</div>
</section>

{/if}