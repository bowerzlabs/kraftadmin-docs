<script lang="ts">
	import Tabs from '$lib/components/docs/Tabs.svelte';
	import Tab from '$lib/components/docs/Tab.svelte';
	import Warning from '$lib/components/docs/Warning.svelte';
	import Card from '$lib/components/docs/Card.svelte';
	import CardGrid from '$lib/components/docs/CardGrid.svelte';
	import Steps from '$lib/components/docs/Steps.svelte';
	import Step from '$lib/components/docs/Step.svelte';

	let { data } = $props();

	const version = data.release.tag_name;
</script>

<svelte:head>
	<title>KraftAdmin</title>
	<meta
		name="description"
		content="Metadata-driven administration engine for Spring Boot."
	/>
</svelte:head>

<!-- Hero -->

<section class="border-b border-slate-200 dark:border-slate-800">

	<div class="mx-auto flex max-w-5xl flex-col items-center px-6 py-28 text-center">

		<!-- <div
			class="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 dark:border-indigo-900 dark:bg-indigo-950/40 dark:text-indigo-300"
		>
			🚧 {version}
		</div> -->

		<div
	class="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 dark:border-indigo-900 dark:bg-indigo-950/40 dark:text-indigo-300"
>
	{#if data.release.prerelease}
		🚧 {version}
	{:else}
		🚀 {version}
	{/if}
</div>

		<h1 class="max-w-4xl text-5xl font-black tracking-tight lg:text-7xl">
			Generate beautiful administration dashboards
			<span class="text-indigo-600 dark:text-indigo-400">
				from your Spring Boot entities.
			</span>
		</h1>

		<p
			class="mt-8 max-w-3xl text-xl leading-9 text-slate-600 dark:text-slate-400"
		>
			KraftAdmin is a developer-first administration engine that
			automatically generates reactive CRUD interfaces, telemetry,
			auditing and management tools directly from your Java and Kotlin
			domain models.
		</p>

		<div class="mt-12 flex flex-wrap justify-center gap-4">

			<a
				href="/docs"
				class="rounded-xl border border-slate-300 px-8 py-4 font-semibold transition hover:border-indigo-500 dark:border-slate-700"
			>
				Documentation
			</a>

			<a
				href="https://github.com/bowerzlabs/kraftadmin"
				target="_blank"
				class="rounded-xl border border-slate-300 px-8 py-4 font-semibold transition hover:border-indigo-500 dark:border-slate-700"
			>
				GitHub
			</a>

			<a
				href="https://discord.gg/WJhTXeAkp"
				target="_blank"
				class="rounded-xl border border-indigo-600 px-8 py-4 font-semibold text-indigo-600 transition hover:bg-indigo-600 hover:text-white dark:text-indigo-400"
			>
				Join Discord
			</a>

		</div>

		<div
			class="mt-14 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-slate-500"
		>
			<span class="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-900">
				Spring Boot
			</span>

			<span class="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-900">
				Java
			</span>

			<span class="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-900">
				Kotlin
			</span>

			<span class="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-900">
				Spring Data JPA
			</span>

			<span class="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-900">
				R2DBC
			</span>

			<span class="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-900">
				WebFlux
			</span>

			<span class="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-900">
				Svelte
			</span>

		</div>

		<div
	class="mt-12 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-300"
>
	📦 {version} • <code>com.bowerzlabs:kraft-admin</code>
</div>

	</div>

	<div class="mt-8 rounded-xl border border-slate-200 p-6 dark:border-slate-800">

	<div class="text-sm uppercase tracking-wide text-slate-500">
		Current Release
	</div>

	<div class="mt-2 text-3xl font-bold">
		{version}
	</div>

	<div class="mt-2 text-slate-500">
		Released {new Date(data.release.published_at).toLocaleDateString()}
	</div>

	<a
		href="/releases"
		class="mt-4 inline-flex text-indigo-600 hover:underline"
	>
		View changelog →
	</a>

</div>

</section>

<!-- Beta -->

<section class="mx-auto max-w-5xl px-6 py-16">

	<Warning title="Beta">

		KraftAdmin is currently in beta and should be used for evaluation,
		internal tooling and testing. APIs may change before the first stable
		release.

	</Warning>

</section>

<!-- Features -->

<section class="mx-auto max-w-7xl px-6 py-16">

	<div class="mb-12 text-center">

		<h2 class="text-4xl font-bold">
			Why KraftAdmin?
		</h2>

		<p class="mt-4 text-slate-600 dark:text-slate-400">
			Everything needed to build internal tools without building a frontend.
		</p>

	</div>

	<CardGrid>

		<Card title="⚡ Zero Configuration">
			Generate CRUD interfaces directly from your entities.
		</Card>

		<Card title="🧠 Smart Metadata">
			Automatically maps validation rules, relationships and annotations.
		</Card>

		<Card title="📊 Telemetry">
			Observe application activity and metrics in one dashboard.
		</Card>

		<Card title="🔒 Security">
			Spring Security integration with role-based access.
		</Card>

		<Card title="🎨 Modern UI">
			Responsive Svelte interface with built-in dark mode.
		</Card>

		<Card title="⚙ Reactive">
			Supports Spring Data JPA and R2DBC/WebFlux.
		</Card>

	</CardGrid>

</section>

<!-- Installation -->

<section class="border-y border-slate-200 py-20 dark:border-slate-800">

	<div class="mx-auto max-w-5xl px-6">

		<h2 class="mb-10 text-center text-4xl font-bold">
			Install in Minutes
		</h2>

		<Tabs>

			<Tab title="Gradle">

<pre><code>implementation("com.bowerzlabs:kraft-admin:{version}")</code></pre>

			</Tab>

			<Tab title="Maven">

<pre><code>&lt;dependency&gt;
    &lt;groupId&gt;com.bowerzlabs&lt;/groupId&gt;
    &lt;artifactId&gt;kraft-admin&lt;/artifactId&gt;
    &lt;version&gt;{version}&lt;/version&gt;
&lt;/dependency&gt;</code></pre>

			</Tab>

		</Tabs>

	</div>

</section>

<!-- How It Works -->

<section class="mx-auto max-w-6xl px-6 py-20">

	<h2 class="mb-12 text-center text-4xl font-bold">
		How It Works
	</h2>

	<Steps>

		<Step title="Install">
			Add the dependency.
		</Step>

		<Step title="Annotate">
			Use your existing JPA entities.
		</Step>

		<Step title="Run">
			Start your Spring Boot application.
		</Step>

		<Step title="Manage">
			Open <code>/admin</code>.
		</Step>

	</Steps>

</section>

<!-- Comparison -->

<section class="border-y border-slate-200 py-20 dark:border-slate-800">

	<div class="mx-auto max-w-5xl px-6">

		<h2 class="mb-10 text-center text-4xl font-bold">
			Build Less. Deliver More.
		</h2>

		<div class="overflow-hidden rounded-xl border dark:border-slate-800">

			<table class="w-full">

				<thead class="bg-slate-100 dark:bg-slate-900">

					<tr>

						<th class="p-4 text-left"></th>
						<th class="p-4">KraftAdmin</th>
						<th class="p-4">Build Yourself</th>

					</tr>

				</thead>

				<tbody>

					<tr class="border-t dark:border-slate-800">
						<td class="p-4">CRUD UI</td>
						<td class="p-4 text-center">✅</td>
						<td class="p-4 text-center">❌</td>
					</tr>

					<tr class="border-t dark:border-slate-800">
						<td class="p-4">Search & Filtering</td>
						<td class="p-4 text-center">✅</td>
						<td class="p-4 text-center">Manual</td>
					</tr>

					<tr class="border-t dark:border-slate-800">
						<td class="p-4">Auditing</td>
						<td class="p-4 text-center">✅</td>
						<td class="p-4 text-center">Manual</td>
					</tr>

					<tr class="border-t dark:border-slate-800">
						<td class="p-4">Telemetry</td>
						<td class="p-4 text-center">✅</td>
						<td class="p-4 text-center">Manual</td>
					</tr>

				</tbody>

			</table>

		</div>

	</div>

</section>

<!-- CTA -->

<section class="mx-auto max-w-4xl px-6 py-24 text-center">

	<h2 class="text-5xl font-bold">
		Spend less time building admin panels.
	</h2>

	<p class="mx-auto mt-6 max-w-2xl text-xl text-slate-600 dark:text-slate-400">
		Focus on your business logic while KraftAdmin generates the
		administration experience for you.
	</p>

	<div class="mt-10 flex justify-center gap-4">

		<a
			href="/docs/introduction"
			class="rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white hover:bg-indigo-500"
		>
			Get Started
		</a>

		<a
			href="https://github.com"
			class="rounded-xl border border-slate-300 px-8 py-4 font-semibold hover:border-indigo-500 dark:border-slate-700"
		>
			GitHub
		</a>

	</div>

</section>