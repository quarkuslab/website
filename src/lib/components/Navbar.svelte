<script lang="ts">
	import { quintOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';

	let y = 0;
	let lastScroll = 0;
	let scrollOffset = 0;

	$: show = y > 50;
</script>

<svelte:window
	bind:scrollY={y}
	on:scroll={() => {
		scrollOffset = lastScroll - window.scrollY;
		lastScroll = window.scrollY;
	}}
/>
<nav class="h-32 w-full">
	<div class={`container mx-auto h-full ${$$props.class}`}>
		<slot />
	</div>
	{#if show}
		<div
			in:fly={{ y: 50, duration: 700, opacity: 0, easing: quintOut }}
			out:fade
			class="fixed inset-x-0 top-0 z-40"
		>
			<div
				class={`container mx-auto mt-8 h-16 rounded-md border border-foreground/10 bg-white/50 backdrop-blur-sm ${$$props.class}`}
			>
				<slot />
			</div>
		</div>
	{/if}
</nav>
