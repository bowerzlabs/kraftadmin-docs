<script lang="ts">
	import './layout.css';

	import { onMount } from 'svelte';

	import favicon from '$lib/assets/favicon.svg';

	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();

	let theme = $state<'light' | 'dark'>('dark');

	onMount(() => {
		const savedTheme = localStorage.getItem('theme') as
			| 'light'
			| 'dark'
			| null;

		if (savedTheme) {
			theme = savedTheme;
		} else {
			theme = window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light';
		}
	});

	$effect(() => {
		document.documentElement.classList.toggle(
			'dark',
			theme === 'dark'
		);

		localStorage.setItem('theme', theme);
	});

	function toggleTheme() {
		theme = theme === 'dark' ? 'light' : 'dark';
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div
	class="min-h-screen bg-slate-100 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100"
>
	<Navbar {theme} {toggleTheme} />

	<main class="min-h-screen">
		{@render children()}
	</main>

	<Footer />
</div>
