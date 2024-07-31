<script>
	import { stick } from './mouse/actions';
</script>

<div class="border-t border-foreground font-roboto text-xl [&:nth-last-child(-n+2)]:border-b">
	<div class="rounded-md px-1 py-3" use:stick>
		<slot />
	</div>
</div>
