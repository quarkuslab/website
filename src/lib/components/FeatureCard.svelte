<script lang="ts">
	import { stick } from './mouse/actions';

	export let title: string;
</script>

<div class="flex rounded-xl px-5 py-10" use:stick>
	<div class="h-20 w-20 text-foreground/30">
		<slot name="icon" />
	</div>
	<div class="font-roboto flex-1 pl-10 text-foreground">
		<div class="text-xl">{title}</div>
		<div class="mt-3">
			<slot />
		</div>
	</div>
</div>
