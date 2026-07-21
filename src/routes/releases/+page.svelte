<script lang="ts">
	import { updates } from "$lib/data/updates/updates";
</script>

<svelte:head>
	<title>Updates — KraftAdmin</title>

	<meta
		name="description"
		content="Follow the latest KraftAdmin releases, improvements, features, and announcements for Spring Boot developers."
	/>
</svelte:head>

<section class="border-b border-slate-200 dark:border-slate-800">
	<div class="mx-auto max-w-4xl px-6 py-20 sm:py-28">

		<p class="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
			KraftAdmin Updates
		</p>

		<h1 class="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
			What's new in KraftAdmin.
		</h1>

		<p class="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
			Follow new releases, improvements, features and important changes
			as KraftAdmin evolves.
		</p>

	</div>
</section>

<section class="mx-auto max-w-4xl px-6 py-16 sm:py-20">

	<div class="space-y-16">

		{#each updates as update}

			<article class="relative border-l-2 border-slate-200 pl-6 dark:border-slate-800 sm:pl-10">

				<div
					class="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-white bg-indigo-600 dark:border-slate-950"
				></div>

				<div class="flex flex-wrap items-center gap-3 text-sm">

					<span class="rounded-full bg-indigo-100 px-3 py-1 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
						{update.version}
					</span>

					<span class="text-slate-500">
						{update.date}
					</span>

				</div>

				<h2 class="mt-5 text-2xl font-bold sm:text-3xl">
					{update.title}
				</h2>

				<p class="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">
					{update.description}
				</p>

				{#if update.features.length}

					<div class="mt-6">

						<h3 class="text-sm font-semibold uppercase tracking-wide text-slate-500">
							What's included
						</h3>

						<ul class="mt-4 space-y-3">

							{#each update.features as feature}

								<li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">

									<span class="mt-1 text-indigo-600 dark:text-indigo-400">
										✓
									</span>

									<span>{feature}</span>

								</li>

							{/each}

						</ul>

					</div>

				{/if}

			</article>

		{/each}

	</div>

</section>