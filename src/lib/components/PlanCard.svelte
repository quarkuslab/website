<script lang="ts">
	import { stick } from './mouse/actions';

	export let name: string;
	export let price: number;
</script>

<div
	class="rounded-xl border border-foreground/10 bg-white/40 p-10 text-foreground dark:bg-black/40"
	use:stick
>
	<div class="font-nelphim text-2xl font-bold">{name}</div>
	<div class="font-staal text-6xl">{price}$</div>
</div>
