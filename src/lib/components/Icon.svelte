<script lang="ts">
	import a from '@iconify/json/json/tabler.json';
	import Icon from '@iconify/svelte';
	import { getIconData } from '@iconify/utils';

	export let name: string;

	const data = getIconData(a, name);
	if (!data) throw new Error('invalid icon');
</script>

<Icon icon={data} />
