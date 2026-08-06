<script lang="ts">
	import Tabs from '$lib/components/docs/Tabs.svelte';
	import Tab from '$lib/components/docs/Tab.svelte';
	import Warning from '$lib/components/docs/Warning.svelte';
	import Card from '$lib/components/docs/Card.svelte';
	import CardGrid from '$lib/components/docs/CardGrid.svelte';
	import Steps from '$lib/components/docs/Steps.svelte';
	import Step from '$lib/components/docs/Step.svelte';
	import CopyCode from '$lib/components/docs/CopyCode.svelte';

	const version = '0.1.28-beta';

	const structuredData = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: 'KraftAdmin',
		applicationCategory: 'DeveloperApplication',
		operatingSystem: 'Any',
		description:
			'An annotation-driven administration framework for Spring Boot that generates CRUD interfaces and administration panels from application entities.',
		url: 'https://kraftadmin.com/',
		softwareVersion: version,
		applicationSubCategory: [
			'Spring Boot Admin Panel',
			'CRUD Framework',
			'Developer Tools',
			'Internal Tools'
		],
		offers: {
			'@type': 'Offer',
			price: '0',
			priceCurrency: 'USD'
		}
	});

	const gradleDependency =
		'implementation("com.bowerzlabs:kraft-admin:0.1.28-beta")';

	const mavenDependency = `<dependency>
    <groupId>com.bowerzlabs</groupId>
    <artifactId>kraft-admin</artifactId>
    <version>0.1.28-beta</version>
</dependency>`;
</script>

<svelte:head>
	<title>KraftAdmin — Admin Panel &amp; CRUD UI for Spring Boot</title>

	<meta
		name="description"
		content="KraftAdmin automatically generates admin panels, CRUD interfaces, forms, search, filtering, relationships, file uploads, and dashboards from your Spring Boot entities."
	/>

	<meta
		name="keywords"
		content="Spring Boot admin panel, Spring Boot CRUD, Java admin panel, Kotlin admin panel, Spring Boot administration, JPA admin interface, Spring Security admin panel, internal tools Spring Boot"
	/>

	<meta name="robots" content="index, follow" />

	<link rel="canonical" href="https://kraftadmin.com/" />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="KraftAdmin" />
	<meta
		property="og:title"
		content="KraftAdmin — Admin Panel &amp; CRUD UI for Spring Boot"
	/>
	<meta
		property="og:description"
		content="Automatically generate powerful administration interfaces from your Spring Boot entities."
	/>
	<meta property="og:url" content="https://kraftadmin.com/" />
	<meta property="og:image" content="https://kraftadmin.com/og-image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="KraftAdmin — Admin Panel for Spring Boot"
	/>

	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="KraftAdmin — Admin Panel &amp; CRUD UI for Spring Boot"
	/>
	<meta
		name="twitter:description"
		content="Generate administration panels and CRUD interfaces directly from your Spring Boot entities."
	/>
	<meta name="twitter:image" content="https://kraftadmin.com/og-image.png" />

	<script type="application/ld+json">{structuredData}</script>
</svelte:head>

<!-- Hero -->

<section class="border-b border-slate-200 dark:border-slate-800">

	<div class="mx-auto flex max-w-5xl flex-col items-center px-6 py-28 text-center">

		<div
			class="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-300"
		>
			{version} · Beta
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
			domain model. Spend less time building administration interfaces
			and more time building your application.

		</p>

		<div class="mt-12 flex flex-wrap justify-center gap-4">

			<a
				href="/docs/introduction"
				class="rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white transition hover:bg-indigo-500"
			>
				Get Started
			</a>

			<a
				href="/docs"
				class="rounded-xl border border-slate-300 px-8 py-4 font-semibold transition hover:border-indigo-500 dark:border-slate-700"
			>
				Documentation
			</a>

			<a
				href="https://github.com/bowerzlabs/kraftadmin"
				target="_blank"
				rel="noopener noreferrer"
				class="rounded-xl border border-slate-300 px-8 py-4 font-semibold transition hover:border-indigo-500 dark:border-slate-700"
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

	</div>

</section>


<!-- Product Showcase -->

<section class="min-w-0 overflow-hidden border-b border-slate-200 py-20 dark:border-slate-800">

<div class="mx-auto min-w-0 max-w-7xl px-4 sm:px-6">

	<div class="mx-auto mb-12 max-w-3xl text-center">

		<p class="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
			KraftAdmin in action
		</p>

		<h2 class="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
			Your application data, ready to manage.
		</h2>

		<p class="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 dark:text-slate-400">
			From generated resource tables to forms, relationships and custom
			actions, KraftAdmin gives your Spring Boot application a complete
			administration interface with minimal configuration.
		</p>

	</div>


	<!-- Horizontal Showcase -->

	<div class="relative min-w-0">

		<div
			class="flex min-w-0 snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-6 sm:gap-6"
		>

			<!-- Dashboard -->

			<article
				class="w-[calc(100vw-2rem)] shrink-0 snap-center sm:w-[85vw] sm:max-w-5xl"
			>

				<div
					class="overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-xl dark:border-slate-800 dark:bg-slate-900 sm:rounded-2xl"
				>

					<img
						src="/dashboard.png"
						alt="KraftAdmin dashboard"
						class="block aspect-video w-full object-cover"
					/>

				</div>

				<p class="mt-3 text-center text-sm text-slate-500">
					Generated administration dashboard
				</p>

			</article>


			<!-- Resource List -->

			<article
				class="w-[calc(100vw-2rem)] shrink-0 snap-center sm:w-[85vw] sm:max-w-5xl"
			>

				<div
					class="overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-xl dark:border-slate-800 dark:bg-slate-900 sm:rounded-2xl"
				>

					<img
						src="/list.png"
						alt="KraftAdmin resource list"
						class="block aspect-video w-full object-cover"
					/>

				</div>

				<p class="mt-3 text-center text-sm text-slate-500">
					Searchable, sortable and filterable resource tables
				</p>

			</article>


			<!-- Forms -->

			<article
				class="w-[calc(100vw-2rem)] shrink-0 snap-center sm:w-[85vw] sm:max-w-5xl"
			>

				<div
					class="overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-xl dark:border-slate-800 dark:bg-slate-900 sm:rounded-2xl"
				>

					<img
						src="/form.png"
						alt="KraftAdmin form interface"
						class="block aspect-video w-full object-cover"
					/>

				</div>

				<p class="mt-3 text-center text-sm text-slate-500">
					Generated forms with validation and custom field configuration
				</p>

			</article>


			<!-- Details -->

			<article
				class="w-[calc(100vw-2rem)] shrink-0 snap-center sm:w-[85vw] sm:max-w-5xl"
			>

				<div
					class="overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-xl dark:border-slate-800 dark:bg-slate-900 sm:rounded-2xl"
				>

					<img
						src="/details.png"
						alt="KraftAdmin details screen"
						class="block aspect-video w-full object-cover"
					/>

				</div>

				<p class="mt-3 text-center text-sm text-slate-500">
					Generated details screen
				</p>

			</article>

		</div>

	</div>


	<p class="mt-3 text-center text-sm text-slate-400">
		Swipe or scroll horizontally to explore
	</p>

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
			Everything needed to build internal tools without building an administration frontend from scratch.
		</p>

	</div>

	<CardGrid>

		<Card title="Annotation Driven">

			Generate administration resources directly from annotated entities.

		</Card>

		<Card title="CRUD Generation">

			Create, edit, view and manage data without writing controllers or templates.

		</Card>

		<Card title="Custom Actions">

			Add application-specific actions directly to your administration interface.

		</Card>

		<Card title="Extensible">

			Customize fields, resources, storage providers, security and administration behavior.

		</Card>

		<Card title="Spring Security">

			Integrates with your existing authentication and authorization.

		</Card>

		<Card title="Built for Spring Boot">

			Works alongside your existing services, repositories and business logic.

		</Card>

	</CardGrid>

</section>


<!-- Installation -->

<section class="border-y border-slate-200 py-20 dark:border-slate-800">

	<div class="mx-auto max-w-5xl px-6">

		<p class="mb-8 text-center text-slate-600 dark:text-slate-400">

			Add a single dependency and annotate the entities you want to manage.

		</p>

		<h2 class="mb-10 text-center text-4xl font-bold">
			Install in Minutes
		</h2>

<Tabs>

	<Tab title="Gradle">

		<CopyCode
			code={gradleDependency}
			language="Gradle"
		/>

	</Tab>

	<Tab title="Maven">

		<CopyCode
			code={mavenDependency}
			language="Maven"
		/>

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

		<div class="overflow-x-auto rounded-xl border dark:border-slate-800">

			<table class="w-full min-w-[700px]">

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

						<td class="p-4 text-center">Included</td>

						<td class="p-4 text-center">Manual</td>

					</tr>

					<tr class="border-t dark:border-slate-800">

						<td class="p-4">Create & Edit Forms</td>

						<td class="p-4 text-center">Generated</td>

						<td class="p-4 text-center">Manual</td>

					</tr>

					<tr class="border-t dark:border-slate-800">

						<td class="p-4">Detail Pages</td>

						<td class="p-4 text-center">Generated</td>

						<td class="p-4 text-center">Manual</td>

					</tr>

					<tr class="border-t dark:border-slate-800">

						<td class="p-4">Search</td>

						<td class="p-4 text-center">Included</td>

						<td class="p-4 text-center">Manual</td>

					</tr>

					<tr class="border-t dark:border-slate-800">

						<td class="p-4">Pagination</td>

						<td class="p-4 text-center">Included</td>

						<td class="p-4 text-center">Manual</td>

					</tr>

					<tr class="border-t dark:border-slate-800">

						<td class="p-4">Sorting</td>

						<td class="p-4 text-center">Included</td>

						<td class="p-4 text-center">Manual</td>

					</tr>

					<tr class="border-t dark:border-slate-800">

						<td class="p-4">Filtering</td>

						<td class="p-4 text-center">Included</td>

						<td class="p-4 text-center">Manual</td>

					</tr>

					<tr class="border-t dark:border-slate-800">

						<td class="p-4">Relationship Handling</td>

						<td class="p-4 text-center">Included</td>

						<td class="p-4 text-center">Manual</td>

					</tr>

					<tr class="border-t dark:border-slate-800">

						<td class="p-4">Bean Validation Integration</td>

						<td class="p-4 text-center">Included</td>

						<td class="p-4 text-center">Manual</td>

					</tr>

					<tr class="border-t dark:border-slate-800">

						<td class="p-4">File Upload Support</td>

						<td class="p-4 text-center">Included</td>

						<td class="p-4 text-center">Manual</td>

					</tr>

					<tr class="border-t dark:border-slate-800">

						<td class="p-4">Spring Security Integration</td>

						<td class="p-4 text-center">Included</td>

						<td class="p-4 text-center">Manual</td>

					</tr>

					<tr class="border-t dark:border-slate-800">

						<td class="p-4">Dark Mode</td>

						<td class="p-4 text-center">Included</td>

						<td class="p-4 text-center">Manual</td>

					</tr>

					<tr class="border-t dark:border-slate-800">

						<td class="p-4">Responsive UI</td>

						<td class="p-4 text-center">Included</td>

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
		Build your administration panel in minutes.
	</h2>

	<p class="mx-auto mt-6 max-w-2xl text-xl text-slate-600 dark:text-slate-400">

		KraftAdmin lets you focus on your domain while automatically generating
		the repetitive administration interface around it.

	</p>

	<div class="mt-10 flex flex-wrap justify-center gap-4">

		<a
			href="/docs/introduction"
			class="rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white transition hover:bg-indigo-500"
		>
			Read the Documentation
		</a>

		<a
			href="https://github.com/bowerzlabs/kraftadmin"
			target="_blank"
			rel="noopener noreferrer"
			class="rounded-xl border border-slate-300 px-8 py-4 font-semibold transition hover:border-indigo-500 dark:border-slate-700"
		>
			View on GitHub
		</a>

	</div>

</section>


<!-- Feedback -->

<div class="mx-auto max-w-5xl px-6 pb-10">
	<form
		action="https://buttondown.com/api/emails/embed-subscribe/nyadero"
		method="post"
		class="mx-auto max-w-xl rounded-2xl border border-border-subtle bg-bg-surface p-6 shadow-sm sm:p-8"
	>
		<div class="space-y-2">
			<label
				for="bd-email"
				class="block text-sm font-semibold text-text-main"
			>
				Subscribe to the newsletter
			</label>

			<p class="text-sm leading-relaxed text-text-muted">
				Get occasional updates, ideas, and insights delivered straight to your inbox.
			</p>
		</div>

		<div class="mt-6 flex flex-col gap-3 sm:flex-row">
			<input
				type="email"
				name="email"
				id="bd-email"
				placeholder="you@example.com"
				required
				class="min-w-0 flex-1 rounded-xl border border-border-subtle bg-bg-main px-4 py-3 text-sm text-text-main outline-none transition placeholder:text-text-muted focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
			/>

			<button
				type="submit"
				class="rounded-xl bg-blue-500 px-5 text-white py-3 text-sm font-bold  transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:ring-offset-2"
			>
				Subscribe
			</button>
		</div>
	</form>
</div>

