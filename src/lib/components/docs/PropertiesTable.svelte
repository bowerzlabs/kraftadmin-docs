<script lang="ts">
	interface Property {
		name: string;
		type: string;
		default?: string;
		description: string;
	}

	interface Props {
		properties: Property[];
	}

	let { properties }: Props = $props();
</script>

<div class="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">

<table class="w-full">

<thead class="bg-slate-100 dark:bg-slate-900">

<tr>

<th>Name</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>

</tr>

</thead>

<tbody>

{#each properties as property}

<tr class="border-t border-slate-200 dark:border-slate-800">

<td><code>{property.name}</code></td>

<td>{property.type}</td>

<td>{property.default}</td>

<td>{property.description}</td>

</tr>

{/each}

</tbody>

</table>

</div>