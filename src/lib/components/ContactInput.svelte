<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	export let label: string;

	interface $$Props extends HTMLInputAttributes {
		label: string;
	}

	const name = label.split(' ').join('-').toLowerCase();
	const id = `contact-${name}`;
</script>

<label class={$$restProps.class ?? ''} for={id}>
	<p class="mb-2">{label}</p>
	<input
		{...$$restProps}
		class="w-full rounded-md border border-foreground/20 bg-white px-5 py-3 dark:bg-black"
		{name}
		{id}
	/>
</label>
