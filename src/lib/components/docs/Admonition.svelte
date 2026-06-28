<script lang="ts">
	const variants = {
		note: {
			icon: '📝',
			title: 'Note',
			border: 'border-blue-500',
			bg: 'bg-blue-50 dark:bg-blue-950/30',
			text: 'text-blue-900 dark:text-blue-100'
		},

		info: {
			icon: 'ℹ️',
			title: 'Info',
			border: 'border-sky-500',
			bg: 'bg-sky-50 dark:bg-sky-950/30',
			text: 'text-sky-900 dark:text-sky-100'
		},

		tip: {
			icon: '💡',
			title: 'Tip',
			border: 'border-emerald-500',
			bg: 'bg-emerald-50 dark:bg-emerald-950/30',
			text: 'text-emerald-900 dark:text-emerald-100'
		},

		success: {
			icon: '✅',
			title: 'Success',
			border: 'border-green-500',
			bg: 'bg-green-50 dark:bg-green-950/30',
			text: 'text-green-900 dark:text-green-100'
		},

		warning: {
			icon: '⚠️',
			title: 'Warning',
			border: 'border-amber-500',
			bg: 'bg-amber-50 dark:bg-amber-950/30',
			text: 'text-amber-900 dark:text-amber-100'
		},

		danger: {
			icon: '🚫',
			title: 'Danger',
			border: 'border-red-500',
			bg: 'bg-red-50 dark:bg-red-950/30',
			text: 'text-red-900 dark:text-red-100'
		},

		error: {
			icon: '❌',
			title: 'Error',
			border: 'border-rose-500',
			bg: 'bg-rose-50 dark:bg-rose-950/30',
			text: 'text-rose-900 dark:text-rose-100'
		},

		important: {
			icon: '📌',
			title: 'Important',
			border: 'border-violet-500',
			bg: 'bg-violet-50 dark:bg-violet-950/30',
			text: 'text-violet-900 dark:text-violet-100'
		},

		experimental: {
			icon: '🧪',
			title: 'Experimental',
			border: 'border-fuchsia-500',
			bg: 'bg-fuchsia-50 dark:bg-fuchsia-950/30',
			text: 'text-fuchsia-900 dark:text-fuchsia-100'
		},

		deprecated: {
			icon: '🗑️',
			title: 'Deprecated',
			border: 'border-gray-500',
			bg: 'bg-gray-100 dark:bg-gray-900/40',
			text: 'text-gray-900 dark:text-gray-100'
		},

		new: {
			icon: '✨',
			title: 'New',
			border: 'border-lime-500',
			bg: 'bg-lime-50 dark:bg-lime-950/30',
			text: 'text-lime-900 dark:text-lime-100'
		}
	} as const;

	type Variant = keyof typeof variants;

	interface Props {
		type?: Variant;
		title?: string;
	}

	let {
		type = 'note',
		title
	}: Props = $props();

	const style = $derived(variants[type]);
</script>

<div class={`my-6 rounded-xl border-l-4 p-5 ${style.border} ${style.bg}`}>
	<div class={`mb-2 flex items-center gap-2 font-semibold ${style.text}`}>
		<span class="text-lg">{style.icon}</span>
		<span>{title ?? style.title}</span>
	</div>

	<div class="prose prose-sm dark:prose-invert max-w-none">
		<slot />
	</div>
</div>