<script lang="ts">
	type Props = {
		code: string;
		language?: string;
	};

	let { code, language = '' }: Props = $props();

	let copied = $state(false);
	let showToast = $state(false);
	let toastMessage = $state('');

	let toastTimeout: ReturnType<typeof setTimeout>;
	let copiedTimeout: ReturnType<typeof setTimeout>;

	async function copyCode() {
		try {
			if (navigator.clipboard && window.isSecureContext) {
				await navigator.clipboard.writeText(code);
			} else {
				const textarea = document.createElement('textarea');

				textarea.value = code;
				textarea.style.position = 'fixed';
				textarea.style.left = '-9999px';
				textarea.style.opacity = '0';

				document.body.appendChild(textarea);

				textarea.focus();
				textarea.select();

				const successful = document.execCommand('copy');

				document.body.removeChild(textarea);

				if (!successful) {
					throw new Error('Copy command failed');
				}
			}

			copied = true;
			showToast = true;
			toastMessage = 'Copied to clipboard';

			clearTimeout(copiedTimeout);
			clearTimeout(toastTimeout);

			copiedTimeout = setTimeout(() => {
				copied = false;
			}, 2000);

			toastTimeout = setTimeout(() => {
				showToast = false;
			}, 2500);
		} catch (error) {
			console.error('Failed to copy code:', error);

			copied = false;
			showToast = true;
			toastMessage = 'Failed to copy code';

			clearTimeout(toastTimeout);

			toastTimeout = setTimeout(() => {
				showToast = false;
			}, 2500);
		}
	}
</script>

<div
	class="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950"
>
	<!-- Header -->

	<div
		class="flex items-center justify-between border-b border-slate-200 px-4 py-3 dark:border-slate-800"
	>
		{#if language}
			<span
				class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
			>
				{language}
			</span>
		{:else}
			<span></span>
		{/if}

		<button
			type="button"
			onclick={copyCode}
			class="rounded-lg px-3 py-1.5 text-xs font-bold text-slate-600 transition hover:bg-slate-200 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
		>
			{copied ? 'Copied!' : 'Copy'}
		</button>
	</div>

	<!-- Code -->

	<pre
		class="overflow-x-auto p-5 text-sm leading-7 text-slate-800 dark:text-slate-200"
	><code>{code}</code></pre>
</div>

<!-- Toast -->

{#if showToast}
	<div
		class="pointer-events-none fixed inset-x-0 bottom-6 z-[9999] flex justify-center"
		role="status"
		aria-live="polite"
	>
		<div
			class="pointer-events-auto flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-2xl dark:border-slate-700 dark:bg-slate-900 dark:text-white"
		>
			{#if toastMessage === 'Copied to clipboard'}
				<span
					class="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400"
				>
					✓
				</span>
			{:else}
				<span
					class="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400"
				>
					!
				</span>
			{/if}

			{toastMessage}
		</div>
	</div>
{/if}