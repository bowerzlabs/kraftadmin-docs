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

		<div class="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-300">

			🚧 {version} • Beta

		</div>

		<h1 class="max-w-4xl text-5xl font-black tracking-tight lg:text-7xl">

			Generate administration panels
			<span class="text-indigo-600 dark:text-indigo-400">
				from your Spring Boot entities.
			</span>

		</h1>

		<p class="mt-8 max-w-3xl text-xl leading-9 text-slate-600 dark:text-slate-400">

			KraftAdmin is an annotation-driven administration framework for
			Spring Boot that generates CRUD interfaces directly from your
			domain model. Spend less time building admin dashboards and more
			time building your application.

		</p>

		<div class="mt-12 flex flex-wrap justify-center gap-4">

			<a
				href="/docs/introduction"
				class="rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white hover:bg-indigo-500"
			>
				Get Started
			</a>

			<a
				href="/docs"
				class="rounded-xl border border-slate-300 px-8 py-4 font-semibold hover:border-indigo-500 dark:border-slate-700"
			>
				Documentation
			</a>

			<a
				href="https://github.com/bowerzlabs/kraftadmin"
				target="_blank"
				class="rounded-xl border border-slate-300 px-8 py-4 font-semibold hover:border-indigo-500 dark:border-slate-700"
			>
				GitHub
			</a>

		</div>

		<div class="mt-14 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-slate-500">

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
				JPA
			</span>

			<span class="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-900">
				Spring Security
			</span>

		</div>

		<div class="mt-10 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-300">

			📦 <code>implementation("com.bowerzlabs:kraft-admin:{version}")</code>

		</div>

	</div>

</section>

<!-- Beta -->

<section class="mx-auto max-w-5xl px-6 py-14">

	<Warning title="Early Beta">

		KraftAdmin is under active development.

		The framework is already suitable for experimentation and internal
		projects, but APIs and generated interfaces may evolve before the
		first stable release.

		Feedback, bug reports and contributions are highly encouraged.

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

	<Card title="⚡ Annotation Driven">
		Generate administration resources directly from annotated entities.
	</Card>

	<Card title="📋 CRUD Generation">
		Create, edit, view and manage data without writing controllers or templates.
	</Card>

	<Card title="🧩 Extensible">
		Customize fields, resources, storage providers and security.
	</Card>

	<Card title="🔒 Spring Security">
		Integrates with your existing authentication and authorization.
	</Card>

	<Card title="☁ Storage Providers">
		Local storage today, with Cloudinary and S3 integrations available.
	</Card>

	<Card title="🚀 Built for Spring Boot">
		Works alongside your existing services, repositories and business logic.
	</Card>

</CardGrid>

</section>

<!-- Installation -->

<section class="border-y border-slate-200 py-20 dark:border-slate-800">

	<p class="mb-8 text-center text-slate-600 dark:text-slate-400">
	Add a single dependency and annotate the entities you want to manage.
</p>

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
		Add the KraftAdmin dependency.
	</Step>

	<Step title="Annotate">
		Mark your entities with <code>@KraftAdminResource</code>.
	</Step>

	<Step title="Run">
		Start your Spring Boot application.
	</Step>

	<Step title="Manage">
		Open <code>/admin</code> and begin managing your data.
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

					<tbody>

	<tr class="border-t dark:border-slate-800">
		<td class="p-4">CRUD UI</td>
		<td class="p-4 text-center">✅</td>
		<td class="p-4 text-center">❌</td>
	</tr>

	<tr class="border-t dark:border-slate-800">
		<td class="p-4">Create & Edit Forms</td>
		<td class="p-4 text-center">✅</td>
		<td class="p-4 text-center">Manual</td>
	</tr>

	<tr class="border-t dark:border-slate-800">
		<td class="p-4">Detail Pages</td>
		<td class="p-4 text-center">✅</td>
		<td class="p-4 text-center">Manual</td>
	</tr>

	<tr class="border-t dark:border-slate-800">
		<td class="p-4">Search</td>
		<td class="p-4 text-center">✅</td>
		<td class="p-4 text-center">Manual</td>
	</tr>

	<tr class="border-t dark:border-slate-800">
		<td class="p-4">Pagination</td>
		<td class="p-4 text-center">✅</td>
		<td class="p-4 text-center">Manual</td>
	</tr>

	<tr class="border-t dark:border-slate-800">
		<td class="p-4">Sorting</td>
		<td class="p-4 text-center">✅</td>
		<td class="p-4 text-center">Manual</td>
	</tr>

	<tr class="border-t dark:border-slate-800">
		<td class="p-4">Filtering</td>
		<td class="p-4 text-center">✅</td>
		<td class="p-4 text-center">Manual</td>
	</tr>

	<tr class="border-t dark:border-slate-800">
		<td class="p-4">Relationship Handling</td>
		<td class="p-4 text-center">✅</td>
		<td class="p-4 text-center">Manual</td>
	</tr>

	<tr class="border-t dark:border-slate-800">
		<td class="p-4">Bean Validation Integration</td>
		<td class="p-4 text-center">✅</td>
		<td class="p-4 text-center">Manual</td>
	</tr>

	<tr class="border-t dark:border-slate-800">
		<td class="p-4">File Upload Support</td>
		<td class="p-4 text-center">✅</td>
		<td class="p-4 text-center">Manual</td>
	</tr>

	<tr class="border-t dark:border-slate-800">
		<td class="p-4">Spring Security Integration</td>
		<td class="p-4 text-center">✅</td>
		<td class="p-4 text-center">Manual</td>
	</tr>

	<tr class="border-t dark:border-slate-800">
		<td class="p-4">Dark Mode</td>
		<td class="p-4 text-center">✅</td>
		<td class="p-4 text-center">Manual</td>
	</tr>

	<tr class="border-t dark:border-slate-800">
		<td class="p-4">Responsive UI</td>
		<td class="p-4 text-center">✅</td>
		<td class="p-4 text-center">Manual</td>
	</tr>

	<tr class="border-t dark:border-slate-800">
		<td class="p-4">Telemetry <span class="text-xs text-slate-500">(Optional)</span></td>
		<td class="p-4 text-center">✅</td>
		<td class="p-4 text-center">Manual</td>
	</tr>

	<tr class="border-t dark:border-slate-800">
		<td class="p-4">Configuration</td>
		<td class="p-4 text-center">Simple</td>
		<td class="p-4 text-center">Extensive</td>
	</tr>

	<tr class="border-t dark:border-slate-800">
		<td class="p-4">Development Time</td>
		<td class="p-4 text-center">Minutes</td>
		<td class="p-4 text-center">Days–Weeks</td>
	</tr>


				</tbody>

			</table>

		</div>

	</div>

</section>

<!-- CTA -->

<section class="mx-auto max-w-4xl px-6 py-24 text-center">

	<h2 class="text-5xl font-bold">
		Build your admin panel in minutes.
	</h2>

	<p class="mx-auto mt-6 max-w-2xl text-xl text-slate-600 dark:text-slate-400">

		KraftAdmin lets you focus on your domain while automatically generating
		the repetitive administration interface around it.

	</p>

	<div class="mt-10 flex justify-center gap-4">

		<a
			href="/docs/introduction"
			class="rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white hover:bg-indigo-500"
		>
			Read the Documentation
		</a>

		<a
			href="https://github.com/bowerzlabs/kraftadmin"
			target="_blank"
			class="rounded-xl border border-slate-300 px-8 py-4 font-semibold hover:border-indigo-500 dark:border-slate-700"
		>
			View on GitHub
		</a>

	</div>

</section>

<div class="mt-5">
		<div data-reach-form="9e819e0d-8a10-4973-b051-5c53a7203f89"></div>
	</div>