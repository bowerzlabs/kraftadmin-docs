<script lang="ts">
    let year = new Date().getFullYear();
</script>

<footer class="border-t border-slate-900 bg-slate-950 py-12">
	<div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:grid-cols-4">

	<!-- Brand -->
	<div class="md:col-span-2">
		<a href="/" class="inline-flex items-center gap-3">
			<img
				src="/kraftadmin1.png"
				alt="KraftAdmin"
				class="h-8 w-8 rounded-lg"
			/>

			<span class="text-lg font-bold text-white">
				KraftAdmin
			</span>
		</a>

		<p class="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
			The open-source administration framework for Spring Boot.
			Automatically generate powerful CRUD interfaces and admin panels
			from your application entities.
		</p>

		<div class="mt-6 flex flex-wrap gap-2">
			<span class="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-400">
				Spring Boot
			</span>

			<span class="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-400">
				Java
			</span>

			<span class="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-400">
				Kotlin
			</span>
		</div>
	</div>

	<!-- Resources -->
	<div>
		<h4 class="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
			Resources
		</h4>

		<ul class="space-y-3 text-sm text-slate-400">
			<li>
				<a
					href="/docs"
					class="transition-colors hover:text-indigo-400"
				>
					Documentation
				</a>
			</li>

			<li>
				<a
					href="/demo"
					class="transition-colors hover:text-indigo-400"
				>
					Live Demo
				</a>
			</li>

			<li>
				<a
					href="/updates"
					class="transition-colors hover:text-indigo-400"
				>
					Updates
				</a>
			</li>

			<li>
				<a
					href="/docs/introduction"
					class="transition-colors hover:text-indigo-400"
				>
					Get Started
				</a>
			</li>
		</ul>
	</div>

	<!-- Community -->
	<div>
		<h4 class="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
			Community
		</h4>

		<ul class="space-y-3 text-sm text-slate-400">
			<li>
				<a
					href="https://github.com/bowerzlabs/kraftadmin"
					target="_blank"
					rel="noopener noreferrer"
					class="transition-colors hover:text-white"
				>
					GitHub
				</a>
			</li>

			<!-- <li>
				<a
					href="/contributing"
					class="transition-colors hover:text-white"
				>
					Contributing
				</a>
			</li>

			<li>
				<a
					href="/support"
					class="transition-colors hover:text-white"
				>
					Support
				</a>
			</li> -->


		</ul>
	</div>
</div>

<!-- Bottom -->
<div
	class="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-slate-900 px-4 pt-8 text-xs text-slate-600 sm:flex-row"
>
	<p>
	&copy; {year} KraftAdmin
</p>

	<div class="flex gap-5">
		<a
			href="/privacy"
			class="transition-colors hover:text-slate-400"
		>
			Privacy
		</a>

		<a
			href="/terms"
			class="transition-colors hover:text-slate-400"
		>
			Terms
		</a>
	</div>
</div>


</footer>
