<script>
	import Card from '$lib/components/Card.svelte';
	import FeatureCard from '$lib/components/FeatureCard.svelte';
	import GraphicArc from '$lib/components/GraphicArc.svelte';
	import GraphicBar from '$lib/components/GraphicBar.svelte';
	import GraphicCircle from '$lib/components/GraphicCircle.svelte';
	import { grow, stick } from '$lib/components/mouse/actions';
	import SiteBackground from '$lib/components/SiteBackground.svelte';
	import SiteImage from '$lib/components/SiteImage.svelte';
</script>

<section class="container mx-auto grid min-h-[calc(100vh-8rem)] place-items-center">
	<div class="mb-32 grid grid-cols-2 items-center gap-10">
		<div>
			<div class="mb-5 font-nelphim text-6xl font-light text-foreground" use:grow={{ size: 80 }}>
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
</section>

<section class="container mx-auto max-w-screen-xl py-20">
	<div class="mb-20 grid place-items-center">
		<div
			class="inline-block text-center font-nelphim text-4xl text-foreground"
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

<section class="container mx-auto mt-40 max-w-screen-xl py-20">
	<div class="flex flex-col items-center rounded-xl border border-foreground/10 bg-white p-32">
		<div
			class="mb-10 inline-block text-center font-staal text-lg uppercase tracking-widest text-foreground"
			use:grow={{ size: 40 }}
		>
			Features
		</div>
		<div class="text-center font-nelphim text-5xl text-foreground">
			A website that works for <br /> your business.
		</div>
		<div class="mt-20 grid w-full px-20">
			<FeatureCard title="Stand-out digital presence">
				<svelte:fragment slot="icon">
					<span class="i-tabler-app-window-filled h-full w-full" />
				</svelte:fragment>
				<svelte:fragment>
					A custom-built website that serves as a digital extension of your brand, positioning you
					to stand out. Lorem ipsum dolor sit amet consectetur.
				</svelte:fragment>
			</FeatureCard>

			<FeatureCard title="Stand-out digital presence">
				<svelte:fragment slot="icon">
					<span class="i-tabler-sun-filled h-full w-full" />
				</svelte:fragment>
				<svelte:fragment>
					A custom-built website that serves as a digital extension of your brand, positioning you
					to stand out. Lorem ipsum dolor sit amet consectetur.
				</svelte:fragment>
			</FeatureCard>

			<FeatureCard title="Stand-out digital presence">
				<svelte:fragment slot="icon">
					<span class="i-tabler-settings-filled h-full w-full" />
				</svelte:fragment>
				<svelte:fragment>
					A custom-built website that serves as a digital extension of your brand, positioning you
					to stand out. Lorem ipsum dolor sit amet consectetur.
				</svelte:fragment>
			</FeatureCard>

			<FeatureCard title="Stand-out digital presence">
				<svelte:fragment slot="icon">
					<span class="i-tabler-shield-half-filled h-full w-full" />
				</svelte:fragment>
				<svelte:fragment>
					A custom-built website that serves as a digital extension of your brand, positioning you
					to stand out. Lorem ipsum dolor sit amet consectetur.
				</svelte:fragment>
			</FeatureCard>
		</div>
	</div>
</section>
<section class="min-h-screen"></section>
