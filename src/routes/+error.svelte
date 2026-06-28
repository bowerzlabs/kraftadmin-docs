<script lang="ts">
	import { page } from '$app/state';

	const status = $derived(page.status);
	const message = $derived(page.error?.message ?? 'Something went wrong');
</script>

<svelte:head>
	<title>{status} • KraftAdmin</title>
</svelte:head>

<section
	class="flex min-h-[calc(100vh-8rem)] items-center justify-center px-6"
>
	<div class="mx-auto max-w-2xl text-center">

		<div
			class="mb-6 text-8xl font-black tracking-tight text-indigo-600 dark:text-indigo-400"
		>
			{status}
		</div>

		<h1 class="mb-4 text-4xl font-bold">
			{status === 404
				? 'Page not found'
				: 'Something went wrong'}
		</h1>

		<p class="mx-auto mb-10 max-w-xl text-lg text-slate-600 dark:text-slate-400">
			{message}
		</p>

		<div class="flex flex-col justify-center gap-4 sm:flex-row">

			<a
				href="/"
				class="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-500"
			>
				🏠 Home
			</a>

			<a
				href="/docs"
				class="rounded-lg border border-slate-300 px-6 py-3 font-medium transition hover:border-indigo-500 dark:border-slate-700"
			>
				📚 Documentation
			</a>

			<button
				onclick={() => history.back()}
				class="cursor-pointer rounded-lg border border-slate-300 px-6 py-3 font-medium transition hover:border-indigo-500 dark:border-slate-700"
			>
				← Go Back
			</button>

		</div>

		{#if status === 404}

			<div
				class="mt-16 rounded-xl border border-slate-200 bg-slate-50 p-6 text-left dark:border-slate-800 dark:bg-slate-900"
			>

				<h2 class="mb-4 text-lg font-semibold">
					You might be looking for
				</h2>

				<ul class="space-y-2">

					<li>
						<a
							href="/docs/introduction"
							class="text-indigo-600 hover:underline dark:text-indigo-400"
						>
							Getting Started
						</a>
					</li>

					<li>
						<a
							href="/docs/installation"
							class="text-indigo-600 hover:underline dark:text-indigo-400"
						>
							Installation
						</a>
					</li>

					<li>
						<a
							href="/docs"
							class="text-indigo-600 hover:underline dark:text-indigo-400"
						>
							Browse Documentation
						</a>
					</li>

					<li>
						<a
							href="/releases"
							class="text-indigo-600 hover:underline dark:text-indigo-400"
						>
							Release Notes
						</a>
					</li>

				</ul>

			</div>

		{/if}

	</div>
</section>