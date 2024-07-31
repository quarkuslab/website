<script lang="ts">
	import { stick } from './mouse/actions';

	type Image = {
		img: {
			w: number;
			h: number;
			src: string;
		};
		sources: Record<string, string>;
	};

	export let image: Image;
	export let label: string;
</script>

<div
	class=" group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl"
	use:stick={{ opacity: 10 }}
>
	<enhanced:img src={image} alt={label} />
	<div
		class="absolute bottom-5 right-5 flex h-12 w-12 scale-50 items-center justify-center rounded-xl bg-background opacity-0 shadow-2xl transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
	>
		<span class=" i-tabler-arrow-up-right text-2xl" />
	</div>
</div>
