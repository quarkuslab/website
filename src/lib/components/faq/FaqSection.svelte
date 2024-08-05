<script lang="ts">
	import { getContext } from 'svelte';
	import type { FaqContext } from './context';
	import { grow, stick } from '../mouse/actions';
	import { slide } from 'svelte/transition';

	const { isActive, toggle } = getContext<FaqContext>('faq');

	export let key: string;
	export let question: string;
</script>

<li
	class="border-b border-foreground font-roboto text-lg last:border-transparent"
	use:stick={{ target: '.faq-trigger' }}
>
	<button
		type="button"
		class="faq-trigger flex w-full cursor-pointer items-center justify-between rounded-md px-1 py-3 text-left"
		on:click={() => toggle(key)}
	>
		<span>{question}</span>
		<span
			class="i-tabler-plus transition-transform duration-300"
			class:rotate-45={$isActive(key)}
		/>
	</button>
	{#if $isActive(key)}
		<div class="px-1 py-3 [&_p]:mb-3" transition:slide>
			<slot />
		</div>
	{/if}
</li>
