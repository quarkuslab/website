<script lang="ts">
	import type { HTMLSelectAttributes } from 'svelte/elements';

	type Option = {
		label: string;
		value: string;
	};

	export let label;
	export let options;

	interface $$Props extends HTMLSelectAttributes {
		label: string;
		options: Option[];
	}

	const name = label.split(' ').join('-').toLowerCase();
	const id = `contact-${name}`;
</script>

<label class={$$restProps.class ?? ''} for={id}>
	<p class="mb-2">{label}</p>
	<select
		{...$$restProps}
		class="w-full cursor-pointer rounded-md border border-foreground/20 bg-white px-5 py-3"
		{name}
		{id}
	>
		<option disabled selected></option>
		{#each options as op}
			<option value={op.value}>{op.label}</option>
		{/each}
	</select>
</label>
