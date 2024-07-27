<script lang="ts">
	import { stick } from './mouse/actions';

	export let title: string;
</script>

<div
	class="flex w-full flex-col items-center justify-center rounded-xl bg-white px-20 py-10"
	use:stick
>
	<div class="mb-20 mt-20 h-auto w-full">
		<slot name="icon" />
	</div>
	<div class="font-noto text-4xl text-foreground">{title}</div>
</div>
