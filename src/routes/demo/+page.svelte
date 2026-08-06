<script lang="ts">
</script>

<svelte:head>
	<title>Demo • KraftAdmin</title>

	<meta
		name="description"
		content="Explore KraftAdmin sample applications on GitHub while the official hosted demo is being built."
	/>
</svelte:head>

<section class="min-h-[70vh] border-b border-slate-200 dark:border-slate-800">

	<div class="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center sm:py-32">

		<p class="mb-5 text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
			KraftAdmin Demo
		</p>

		<h1 class="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
			The official demo is coming soon.
		</h1>

		<p class="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400 sm:text-xl">

			We are currently working on an official hosted demo where you will
			be able to explore KraftAdmin directly in your browser.

		</p>

		<div class="mt-10 w-full max-w-xl rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8">

			<h2 class="text-xl font-bold">
				Explore the samples on GitHub
			</h2>

			<p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">

				Working sample applications are already available in the
				KraftAdmin repository. Clone one, run it locally and explore the
				generated administration interface.

			</p>

			<a
				href="https://github.com/orgs/bowerzlabs/repositories"
				target="_blank"
				rel="noopener noreferrer"
				class="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-500 sm:w-auto"
			>
				View Samples on GitHub
			</a>

		</div>

		<p class="mt-8 text-sm text-slate-500 dark:text-slate-400">
			Or
			<a
				href="/docs/installation"
				class="font-medium text-indigo-600 hover:underline dark:text-indigo-400"
			>
				install KraftAdmin
			</a>
			in your own Spring Boot project.
		</p>

	</div>

</section>