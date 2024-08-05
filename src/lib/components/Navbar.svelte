<script lang="ts">
	import { onMount } from 'svelte';

	let el: HTMLElement;

	onMount(() => {
		if (typeof document === undefined) return;
		if (typeof el === undefined) return;

		const observer = new IntersectionObserver(
			([e]) => e.target.classList.toggle('pinned', e.intersectionRatio < 1),
			{
				threshold: [1]
			}
		);

		observer.observe(el);
	});
</script>

<div bind:this={el} class="group sticky -top-px z-40 mt-8 h-16 w-full">
	<div
		class={`container mx-auto mt-4 h-full rounded-md border border-transparent bg-transparent backdrop-blur-sm transition group-[.pinned]:translate-y-2 group-[.pinned]:border-foreground/20 group-[.pinned]:bg-white/80 ${$$props.class}`}
	>
		<slot></slot>
	</div>
</div>
