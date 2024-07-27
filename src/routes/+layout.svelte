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
	import { stick } from '$lib/components/mouse/actions';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Mouse />
<Navbar class="flex items-center justify-between">
	<div class="font-staal text-2xl uppercase tracking-[0.2em] text-foreground">Quarkus</div>
	<div class="flex gap-5">
		<a class="rounded-md px-3 py-1 font-fira text-foreground" href="/" use:stick>Services</a>
		<a class="rounded-md px-3 py-1 font-fira text-foreground" href="/" use:stick>About</a>
		<a class="rounded-md px-3 py-1 font-fira text-foreground" href="/" use:stick>Contact</a>
	</div>
</Navbar>
<main>
	<slot />
</main>
