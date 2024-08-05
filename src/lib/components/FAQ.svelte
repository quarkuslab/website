<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	import { grow, stick } from './mouse/actions';

	type Layer = {
		question: string;
		answer: string;
	};

	export let layers: Layer[];

	let open: number | undefined = undefined;

	function isActive(index: number, active: number | undefined) {
		return typeof active != 'undefined' && active == index;
	}

	function toggle(index: number) {
		if (open == index) {
			open = undefined;
		} else {
			open = index;
		}
	}
</script>

<ul>
	{#each layers as layer, i}
		<li class="border-b border-foreground text-lg last:border-transparent">
			<button
				type="button"
				class="flex w-full cursor-pointer items-center justify-between rounded-md px-1 py-3 text-left"
				use:stick
				on:click={() => toggle(i)}
			>
				<span>{layer.question}</span>
				<span
					class="i-tabler-plus transition-transform duration-300"
					class:rotate-45={isActive(i, open)}
				/>
			</button>
			{#if isActive(i, open)}
				<div transition:slide class="py-3" use:grow={{ size: 50 }}>
					{layer.answer}
				</div>
			{/if}
		</li>
	{/each}
</ul>
