<script lang="ts">
	import { setContext } from 'svelte';

	interface TabItem {
		id: number;
		title: string;
	}

	let active = $state(0);
	let tabs = $state<TabItem[]>([]);

	function register(title: string) {
		const id = tabs.length;

		tabs.push({
			id,
			title
		});

		return id;
	}

	function isActive(id: number) {
		return active === id;
	}

	setContext('tabs', {
		register,
		isActive,
		select: (id: number) => (active = id)
	});
</script>

<div class="my-6 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">

	<div class="flex overflow-x-auto border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">

		{#each tabs as tab}

			<button
				onclick={() => (active = tab.id)}
				class={`border-b-2 px-5 py-3 text-sm font-medium whitespace-nowrap transition ${
					active === tab.id
						? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
						: 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
				}`}
			>
				{tab.title}
			</button>

		{/each}

	</div>

	<div class="p-5">
		<slot />
	</div>

</div>