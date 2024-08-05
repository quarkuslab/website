<script lang="ts">
	import { getContext } from 'svelte';
	import type { FaqContext } from './context';
	import { grow, stick } from '../mouse/actions';
	import { slide } from 'svelte/transition';

	const { isActive, toggle } = getContext<FaqContext>('faq');

	export let key: string;
	export let question: string;
</script>

<li class="border-b border-foreground text-lg last:border-transparent">
	<button
		type="button"
		class="flex w-full cursor-pointer items-center justify-between rounded-md px-1 py-3 text-left"
		use:stick
		on:click={() => toggle(key)}
	>
		<span>{question}</span>
		<span
			class="i-tabler-plus transition-transform duration-300"
			class:rotate-45={$isActive(key)}
		/>
	</button>
	{#if $isActive(key)}
		<div transition:slide class="py-3" use:grow={{ size: 50 }}>
			<slot />
		</div>
	{/if}
</li>
