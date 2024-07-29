<script lang="ts">
	import { grow } from './mouse/actions';

	export let label: string | undefined = undefined;
</script>

<div class="grid place-items-center">
	{#if label}
		<div
			class="mb-10 inline-block text-center font-staal text-lg uppercase tracking-widest text-foreground"
			use:grow={{ size: 40 }}
		>
			{label}
		</div>
	{/if}
	<div class="text-center font-nelphim text-5xl text-foreground" use:grow={{ size: 80 }}>
		<slot />
	</div>
</div>
