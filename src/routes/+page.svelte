<script>
	import Card from '$lib/components/Card.svelte';
	import GraphicArc from '$lib/components/GraphicArc.svelte';
	import GraphicBar from '$lib/components/GraphicBar.svelte';
	import GraphicCircle from '$lib/components/GraphicCircle.svelte';
	import { grow, stick } from '$lib/components/mouse/actions';
	import SiteBackground from '$lib/components/SiteBackground.svelte';
	import SiteImage from '$lib/components/SiteImage.svelte';
</script>

<section class="flex min-h-screen flex-col">
	<nav class="h-32 w-full">
		<div class="container mx-auto flex h-full items-center justify-between">
			<div class="font-staal text-2xl uppercase tracking-[0.2em] text-foreground">Quarkus</div>
			<div class="flex gap-5">
				<a class="rounded-md px-3 py-1 font-fira text-foreground" href="/" use:stick>Services</a>
				<a class="rounded-md px-3 py-1 font-fira text-foreground" href="/" use:stick>About</a>
				<a class="rounded-md px-3 py-1 font-fira text-foreground" href="/" use:stick>Contact</a>
			</div>
		</div>
	</nav>
	<div class="container mx-auto flex flex-1 items-center py-12">
		<div class="mb-40 grid grid-cols-2 items-center gap-10">
			<div>
				<div class="font-nelphim mb-5 text-6xl font-light text-foreground" use:grow={{ size: 80 }}>
					Let's build a website <br /> that makes you the easy choice
				</div>
				<div class="mb-10 font-fira text-xl text-foreground" use:grow={{ size: 50 }}>
					A generic website can make your unique business look like <br /> just another face in the crowd.
				</div>
				<button class="rounded-md bg-foreground px-10 py-3 font-fira text-background" use:stick
					>Get Website</button
				>
			</div>
			<div class="relative w-full max-w-2xl">
				<SiteBackground />
				<div class="absolute left-1/2 top-1/2 z-10 w-[40%] -translate-x-1/2 -translate-y-1/2">
					<SiteImage />
				</div>
			</div>
		</div>
	</div>
</section>

<section class="container mx-auto max-w-screen-xl py-20">
	<div class="mb-20 grid place-items-center">
		<div
			class="font-nelphim inline-block text-center text-4xl text-foreground"
			use:grow={{ size: 80 }}
		>
			Imagine a website that doesn't just <br />
			show you exist, but sets the new standard.
		</div>
	</div>
	<div class="grid grid-cols-3 gap-5">
		<Card title="Design">
			<GraphicBar slot="icon" />
		</Card>

		<Card title="Development">
			<GraphicArc slot="icon" />
		</Card>

		<Card title="Testing">
			<GraphicCircle slot="icon" />
		</Card>
	</div>
</section>
