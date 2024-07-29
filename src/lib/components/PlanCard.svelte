<script lang="ts">
	import { stick } from './mouse/actions';

	export let name: string;
	export let price: number;
</script>

<div class="text-foreground border-foreground/10 rounded-xl border bg-white p-10" use:stick>
	<div class="font-nelphim text-2xl font-bold">{name}</div>
	<div class="font-staal text-6xl">{price}$</div>
</div>
