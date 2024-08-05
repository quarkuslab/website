<script lang="ts">
	import { setContext } from 'svelte';
	import { context } from './context';

	setContext('faq', context);
</script>

<ul>
	<slot />
</ul>
