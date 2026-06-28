<script lang="ts">
	let { data } = $props();

	const releases = data.releases;
</script>

<svelte:head>
	<title>Releases • KraftAdmin</title>
	<meta
		name="description"
		content="KraftAdmin release history and changelog."
	/>
</svelte:head>

<section class="border-b border-slate-200 dark:border-slate-800">
	<div class="mx-auto max-w-5xl px-6 py-20">

		<h1 class="text-5xl font-black">
			Releases
		</h1>

		<p class="mt-4 text-lg text-slate-600 dark:text-slate-400">
			Latest releases, improvements and bug fixes for KraftAdmin.
		</p>

	</div>
</section>

<section class="mx-auto max-w-5xl px-6 py-16">

	{#if releases.length === 0}

		<div class="rounded-xl border border-slate-200 p-8 text-center dark:border-slate-800">
			No releases have been published yet.
		</div>

	{:else}

		<div class="space-y-8">

			{#each releases as release}

				<article
					class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-indigo-500 dark:border-slate-800 dark:bg-slate-950"
				>

					<div class="flex flex-wrap items-center justify-between gap-4">

						<div>

							<h2 class="text-2xl font-bold">
								{release.name || release.tag_name}
							</h2>

							<div class="mt-2 flex flex-wrap items-center gap-3 text-sm">

								<span class="rounded-full bg-indigo-100 px-3 py-1 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
									{release.tag_name}
								</span>

								<span class="text-slate-500">
									{new Date(release.published_at).toLocaleDateString()}
								</span>

								{#if release.prerelease}
									<span class="rounded-full bg-amber-100 px-3 py-1 text-amber-700 dark:bg-amber-950 dark:text-amber-300">
										Pre-release
									</span>
								{/if}

							</div>

						</div>

						<a
							href={release.html_url}
							target="_blank"
							class="rounded-lg border border-slate-300 px-4 py-2 font-medium hover:border-indigo-500 dark:border-slate-700"
						>
							View on GitHub →
						</a>

					</div>

					{#if release.body}

						<div
							class="prose mt-8 max-w-none whitespace-pre-wrap dark:prose-invert"
						>
							{release.body}
						</div>

					{/if}

				</article>

			{/each}

		</div>

	{/if}

</section>