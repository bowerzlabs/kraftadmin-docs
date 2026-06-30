<script lang="ts">
</script>

<svelte:head>
	<title>Prologue • KraftAdmin</title>
</svelte:head>

<section class="mx-auto max-w-5xl py-20">

	<div
		class="mb-12 rounded-xl border border-amber-300 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/40"
	>
		<div class="flex items-start gap-3">

			<div class="text-xl">
				🚧
			</div>

			<div>

				<h2 class="font-semibold text-amber-900 dark:text-amber-200">
					Early Development Preview
				</h2>

				<p class="mt-2 text-sm text-amber-800 dark:text-amber-300">
					KraftAdmin is under active development and has not yet reached its first stable release. While many core features are functional, APIs, generated interfaces, 
					and configuration options may change between releases. We recommend using the framework for evaluation, internal tools, prototypes, and non-critical applications until a stable release is announced. Community feedback and bug reports are invaluable in helping shape the project.
				</p>

			</div>

		</div>
	</div>

	<div class="mb-16 text-center">

		<p class="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
			Welcome to KraftAdmin
		</p>

		<h1 class="mb-6 text-5xl font-bold tracking-tight">
			Administration interfaces should be generated,
			<span class="text-blue-600">not manually built.</span>
		</h1>

		<p class="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-400">
			KraftAdmin is an annotation-driven administration framework for Spring Boot
			that generates resource management interfaces directly from your domain
			model, allowing you to spend less time building CRUD screens and more time
			building your application's business logic.
		</p>

	</div>

	<div class="grid gap-6 md:grid-cols-2">

		<div class="rounded-xl border p-6">

			<h2 class="mb-3 text-xl font-semibold">
				Why KraftAdmin?
			</h2>

			<p class="text-slate-600 dark:text-slate-400">
				Every application eventually needs an administration panel. User
				management, reports, settings, file uploads, and data management often
				require thousands of lines of repetitive code. KraftAdmin automates those
				common interfaces while allowing your application to remain in control.
			</p>

		</div>

		<div class="rounded-xl border p-6">

			<h2 class="mb-3 text-xl font-semibold">
				Built Around Your Application
			</h2>

			<p class="text-slate-600 dark:text-slate-400">
				KraftAdmin integrates with your existing Spring Boot project instead of
				replacing it. Your entities, services, repositories, business rules, and
				security configuration remain exactly where they belong—in your
				application.
			</p>

		</div>

	</div>


	<div class="grid gap-6 md:grid-cols-2">

		<div class="rounded-xl border p-6">

			<h2 class="mb-3 text-xl font-semibold">
				Convention over Configuration
			</h2>

			<p class="text-slate-600 dark:text-slate-400">
				KraftAdmin automatically infers sensible defaults from your entities.
				When additional control is needed, annotations allow you to customize
				fields, validation rules, storage providers, security behavior, and user
				experience without sacrificing productivity.
			</p>

		</div>

		<div class="rounded-xl border p-6">

			<h2 class="mb-3 text-xl font-semibold">
				An Evolving Framework
			</h2>

			<p class="text-slate-600 dark:text-slate-400">
				KraftAdmin is developed incrementally with a strong focus on developer
				experience, extensibility, and long-term stability. New features,
				integrations, and documentation are introduced continuously as the
				project matures.
			</p>

		</div>

	</div>


	<!-- feedback -->
	<div class="mt-20 rounded-xl border p-8">

	<h2 class="mb-4 text-2xl font-semibold">
		💬 Feedback & Issues
	</h2>

	<p class="text-slate-600 dark:text-slate-400">
		KraftAdmin is shaped by its community. If you discover a bug, have an
		idea for a new feature, or notice something that could be improved,
		please let us know.
	</p>

	<div class="mt-6 flex flex-wrap gap-4">

		<a
			href="https://github.com/bowerzlabs/kraftadmin/issues"
			target="_blank"
			class="rounded-lg border px-5 py-3 font-medium hover:border-blue-600"
		>
			Report an Issue
		</a>

		<a
			href="https://discord.gg/WJhTXeAkp"
			target="_blank"
			class="rounded-lg border px-5 py-3 font-medium hover:border-blue-600"
		>
			Join Discord
		</a>

	</div>

</div>

<!-- contributing -->
<div class="mt-8 rounded-xl border p-8">

	<h2 class="mb-4 text-2xl font-semibold">
		🤝 Contributing
	</h2>

	<p class="text-slate-600 dark:text-slate-400">
		Contributions of all sizes are welcome. Whether you're fixing a typo,
		reporting a bug, improving documentation, or implementing a new feature,
		your help makes KraftAdmin better for everyone.
	</p>

	<p class="mt-4 text-slate-600 dark:text-slate-400">
		If you're interested in contributing code, we recommend discussing larger
		changes through GitHub Issues or Discord before opening a pull request.
	</p>

</div>

<!-- support -->
<div class="mt-8 rounded-xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-950/30">

	<h2 class="mb-4 text-2xl font-semibold">
		❤️ Support KraftAdmin
	</h2>

	<p class="text-slate-700 dark:text-slate-300">
		KraftAdmin is an open-source project developed in personal time. Your
		support helps fund development, improve documentation, fix bugs, and
		deliver new features more quickly.
	</p>

	<ul class="mt-5 space-y-2 text-slate-700 dark:text-slate-300">

		<li>⭐ Star the project on GitHub</li>
		<li>🐛 Report bugs and suggest improvements</li>
		<li>📝 Improve the documentation</li>
		<li>💻 Contribute code through pull requests</li>
		<li>☕ Sponsor the project if your organization relies on it</li>

	</ul>

	<div class="mt-6 flex flex-wrap gap-4">

		<a
			href="https://github.com/bowerzlabs/kraftadmin"
			target="_blank"
			class="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
		>
			Star on GitHub
		</a>

		<a
			href="https://github.com/sponsors/bowerzlabs"
			target="_blank"
			class="rounded-lg border px-5 py-3 font-medium hover:border-blue-600"
		>
			Sponsor
		</a>

	</div>

</div>

<!-- roadmap -->
<div class="mt-8 rounded-xl border p-8">

	<h2 class="mb-4 text-2xl font-semibold">
		🛣️ Roadmap
	</h2>

	<p class="text-slate-600 dark:text-slate-400">
		The first stable release focuses on providing a robust administration
		engine for Spring Boot applications. Upcoming milestones include richer
		field components, dashboards, workflow automation, additional storage
		providers, improved security integrations, and a growing ecosystem of
		extensions.
	</p>

</div>

<div class="mt-20 text-center">

		<h2 class="mb-4 text-3xl font-bold">
			Ready to get started?
		</h2>

		<p class="mb-8 text-slate-600 dark:text-slate-400">
			Continue to the installation guide to add KraftAdmin to your project and
			generate your first administration interface.
		</p>

		<a
			href="/docs/installation"
			class="inline-flex rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
		>
			Get Started →
		</a>

	</div>

</section>