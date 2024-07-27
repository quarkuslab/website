<script>
	import '../app.css';
	import '@fontsource/staatliches';
	import '@fontsource/ibm-plex-serif';
	import '@fontsource/fira-sans';
	import '@fontsource-variable/noto-serif';
	import '@fontsource/aref-ruqaa';
	import '@fontsource/kurale';
	import '../assets/fonts/aesthetic/stylesheet.css';
	import '../assets/fonts/nelphim/stylesheet.css';

	import Mouse from '$lib/components/mouse/Mouse.svelte';
</script>

<Mouse />
<main class="bg-background">
	<slot />
</main>
