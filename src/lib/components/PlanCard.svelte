<script lang="ts">
	import { base } from '$app/paths';
	import { stick } from './mouse/actions';

	export let name: string;
	export let description: string;
	export let price: number;
	export let features: string[];

	export let flip = false;

	const styles = flip
		? 'bg-foreground text-background'
		: 'bg-white/40 text-foreground dark:bg-black/40';
	const btnStyles = flip ? 'bg-background text-foreground' : ' bg-foreground text-background';
	const borderStyles = flip ? 'border-background/50' : 'border-foreground/20';
</script>

<div class={`flex flex-col rounded-xl border border-foreground/20 p-10 ${styles}`} use:stick>
	<div class="font-nelphim text-3xl font-bold">{name}</div>
	<div class="mt-3 font-roboto">{description}</div>
	<div class="mt-8 font-staal text-6xl">{price}$</div>
	<div class={`my-5 h-px w-full border border-t ${borderStyles}`}></div>
	<div class="flex-1">
		{#each features as feature}
			<div class="flex items-center">
				<span class=" i-tabler-check" />
				<p class="pl-5 font-roboto">{feature}</p>
			</div>
		{/each}
	</div>
	<div class="mt-10">
		<a
			href={base + `/contact?plan=${name.toLowerCase()}`}
			class={`block w-full rounded-md py-3 text-center font-roboto ${btnStyles}`}>Get {name} Plan</a
		>
	</div>
</div>
