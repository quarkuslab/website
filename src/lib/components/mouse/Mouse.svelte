<script>
	import { trackMouseMove, trackScroll } from './events';
	import { opacity, path, pointer, position } from './store';
</script>

<svelte:window on:mousemove={trackMouseMove()} on:scroll={trackScroll()} />
<svg class="pointer-events-none fixed left-0 top-0 z-50 h-full w-full mix-blend-difference">
	<path class="fill-white" d={$path} style:opacity={$opacity} />
</svg>
