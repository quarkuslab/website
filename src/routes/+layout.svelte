<script lang="ts">
	import '../app.css';
	import '@fontsource/staatliches';
	import '@fontsource/roboto';
	import '../assets/fonts/nelphim/stylesheet.css';

	import Mouse from '$lib/components/mouse/Mouse.svelte';
	import { grow, stick } from '$lib/components/mouse/actions';
	import Navbar from '$lib/components/Navbar.svelte';
	import ThemePicker from '$lib/components/ThemePicker.svelte';

	import { afterNavigate, beforeNavigate, onNavigate } from '$app/navigation';
	import { base } from '$app/paths';

	beforeNavigate(() => {
		if (typeof document != 'undefined') {
			document.documentElement.style.scrollBehavior = 'auto';
		}
	});

	afterNavigate(() => {
		if (typeof document != 'undefined') {
			document.documentElement.style.scrollBehavior = 'smooth';
		}
	});

	onNavigate((navigation) => {
		// @ts-ignore
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			// @ts-ignore
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<Mouse />
<!-- <ThemePicker /> -->
<Navbar class="flex items-center justify-between">
	<div>
		<a
			href={base + '/#'}
			class="rounded-md px-3 py-2 font-staal text-2xl uppercase tracking-[0.2em] text-foreground"
			use:stick>Quarkus</a
		>
	</div>
	<div class="flex gap-5">
		<a class="rounded-md px-3 py-1 font-roboto text-foreground" href={base + '/#about'} use:stick
			>About</a
		>
		<a class="rounded-md px-3 py-1 font-roboto text-foreground" href={base + '/#projects'} use:stick
			>Projects</a
		>
		<a class="rounded-md px-3 py-1 font-roboto text-foreground" href={base + '/#services'} use:stick
			>Services</a
		>
		<a class="rounded-md px-3 py-1 font-roboto text-foreground" href={base + '/contact'} use:stick
			>Contact</a
		>
	</div>
</Navbar>
<main>
	<slot />
</main>
