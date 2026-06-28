<script lang="ts">
	interface Props {
		src: string;
		alt: string;
		caption?: string;
	}

	let {
		src,
		alt,
		caption
	}: Props = $props();
</script>

<figure class="my-8">

	<img
		{src}
		{alt}
		class="rounded-xl border border-slate-200 shadow dark:border-slate-800"
	/>

	{#if caption}
		<figcaption class="mt-3 text-center text-sm text-slate-500">
			{caption}
		</figcaption>
	{/if}

</figure>