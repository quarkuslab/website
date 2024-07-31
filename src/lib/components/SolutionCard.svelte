<script>
	import { stick } from './mouse/actions';
</script>

<div
	class="border-t border-foreground py-3 font-roboto text-xl [&:nth-last-child(-n+2)]:border-b"
	use:stick
>
	<slot />
</div>
