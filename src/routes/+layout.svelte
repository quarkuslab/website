<script>
	import '../app.css';
	import '@fontsource/staatliches';
	import '@fontsource/ibm-plex-serif';
	import '@fontsource/fira-sans';
	import '@fontsource-variable/noto-serif';
	import '@fontsource/aref-ruqaa';
	import '@fontsource/kurale';
	import '@fontsource-variable/inter';
	import '@fontsource/roboto';
	import '../assets/fonts/aesthetic/stylesheet.css';
	import '../assets/fonts/nelphim/stylesheet.css';

	import Mouse from '$lib/components/mouse/Mouse.svelte';
	import { grow, stick } from '$lib/components/mouse/actions';
	import Navbar from '$lib/components/Navbar.svelte';
	import ThemePicker from '$lib/components/ThemePicker.svelte';
</script>

<Mouse />
<ThemePicker />
<Navbar class="flex items-center justify-between">
	<div>
		<a
			href="/"
			class="font-staal text-2xl uppercase tracking-[0.2em] text-foreground"
			use:grow={{ size: 50 }}>Quarkus</a
		>
	</div>
	<div class="flex gap-5">
		<a class="rounded-md px-3 py-1 font-fira text-foreground" href="/" use:stick>Services</a>
		<a class="rounded-md px-3 py-1 font-fira text-foreground" href="/" use:stick>About</a>
		<a class="rounded-md px-3 py-1 font-fira text-foreground" href="/contact" use:stick>Contact</a>
	</div>
</Navbar>
<main>
	<slot />
</main>
