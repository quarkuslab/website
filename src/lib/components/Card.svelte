<script lang="ts">
	import { stick } from './mouse/actions';

	export let title: string;
</script>

<div
	class="flex w-full flex-col items-center justify-end rounded-xl border border-foreground/10 bg-white/70 px-20 py-10"
	use:stick
>
	<div class="mb-20 mt-10 h-auto w-full">
		<slot name="icon" />
	</div>
	<div class="mb-5 font-nelphim text-4xl text-foreground">{title}</div>
</div>
