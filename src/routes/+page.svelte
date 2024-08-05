<script>
	import { base } from '$app/paths';
	import Card from '$lib/components/Card.svelte';
	import ContactInput from '$lib/components/ContactInput.svelte';
	import ContactSelect from '$lib/components/ContactSelect.svelte';
	import ContactTextarea from '$lib/components/ContactTextarea.svelte';
	import FeatureCard from '$lib/components/FeatureCard.svelte';
	import GraphicArc from '$lib/components/GraphicArc.svelte';
	import GraphicBar from '$lib/components/GraphicBar.svelte';
	import GraphicCircle from '$lib/components/GraphicCircle.svelte';
	import { grow, stick } from '$lib/components/mouse/actions';
	import PlanCard from '$lib/components/PlanCard.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import SiteBackground from '$lib/components/SiteBackground.svelte';
	import SiteImage from '$lib/components/SiteImage.svelte';
	import SolutionCard from '$lib/components/SolutionCard.svelte';

	import p1 from '../assets/images/project-1.png?enhanced';
	import p2 from '../assets/images/project-3.png?enhanced';
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

<section class="container mx-auto mt-40 max-w-screen-xl py-20">
	<SectionHeader label="Process">
		Imagine a website <br /> that sets the new standard.
	</SectionHeader>
	<div class="mt-20 grid grid-cols-3 gap-5">
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

<section class="container mx-auto mt-40 py-20">
	<SectionHeader label="Solution">
		Craft a standout
		<br /> website with Quarkus
	</SectionHeader>
	<div class="mx-auto mt-20 grid max-w-screen-lg grid-cols-2 gap-x-5">
		<SolutionCard>Look bigger</SolutionCard>
		<SolutionCard>Earn customer trust</SolutionCard>
		<SolutionCard>Showcase your brand</SolutionCard>
		<SolutionCard>Connect with your ideal audience</SolutionCard>
		<SolutionCard>Stand out from the crowd</SolutionCard>
		<SolutionCard>Raise your value</SolutionCard>
	</div>
</section>

<section class="container mx-auto max-w-screen-xl py-20">
	<div class=" rounded-xl border border-foreground/10 bg-white/40 p-32 dark:bg-black/40">
		<SectionHeader label="Features">
			A website that works for <br /> your business.
		</SectionHeader>
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

<section class="container mx-auto mt-40 py-20">
	<SectionHeader label="Projects">Websites beyond the imagination</SectionHeader>
	<div class="mx-auto mt-20 grid max-w-screen-xl grid-cols-2 gap-10">
		<ProjectCard image={p1} label="Project 1" />
		<ProjectCard image={p2} label="Project 2" />
	</div>
</section>

<section class="container mx-auto mt-40 py-20">
	<SectionHeader label="Plans">We've got a plan that's <br /> perfect for you</SectionHeader>
	<div class="mt-20 grid grid-cols-3 gap-5">
		<PlanCard
			description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sint eius fuga non ducimus totam sed?"
			features={['Hello', 'World Class']}
			name="Standard"
			price={10}
		/>
		<PlanCard
			description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sint eius fuga non ducimus totam sed?"
			features={['Hello', 'World Class', 'Hello', 'World Class']}
			name="Premium"
			price={20}
		/>
		<PlanCard
			description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sint eius fuga non ducimus totam sed?"
			features={[
				'Hello',
				'World Class',
				'Hello',
				'World Class',
				'Hello',
				'World Class',
				'Hello',
				'World Class',
				'Hello',
				'World Class'
			]}
			name="Enterprise"
			price={30}
		/>
	</div>
</section>

<footer class="mt-20 border-t border-foreground/10 bg-white/40 dark:bg-black/40">
	<div class="container mx-auto grid place-items-center pb-10 pt-20">
		<div>
			<div class="text-center font-nelphim text-6xl">Let's talk about your website</div>
			<div class="mt-5 text-center text-xl">
				Tell us about your business and we'll arrange a call to chat about your needs and how we can
				help.
			</div>
		</div>
		<div class="mt-10">
			<a
				href={base + '/contact'}
				class="rounded-md bg-foreground px-10 py-3 text-background"
				use:stick>Contact US</a
			>
		</div>
		<div class="mt-20 flex items-center justify-center gap-1">
			<a href="/" class="grid h-10 w-10 place-items-center rounded-md" use:stick>
				<span class="i-tabler-brand-instagram text-2xl" />
			</a>
			<a href="/" class="grid h-10 w-10 place-items-center rounded-md" use:stick>
				<span class="i-tabler-brand-facebook text-2xl" />
			</a>
			<a href="/" class="grid h-10 w-10 place-items-center rounded-md" use:stick>
				<span class="i-tabler-brand-youtube text-2xl" />
			</a>
			<a href="/" class="grid h-10 w-10 place-items-center rounded-md" use:stick>
				<span class="i-tabler-brand-twitter text-2xl" />
			</a>
			<a href="/" class="grid h-10 w-10 place-items-center rounded-md" use:stick>
				<span class="i-tabler-brand-linkedin text-2xl" />
			</a>
		</div>
		<!-- <div class="mt-20 flex items-center justify-center gap-1">
			<a href="/" class="rounded-md px-3 py-2 text-sm underline" use:stick>Instagram</a>
			<a href="/" class="rounded-md px-3 py-2 text-sm underline" use:stick>Facebook</a>
			<a href="/" class="rounded-md px-3 py-2 text-sm underline" use:stick>Youtube</a>
			<a href="/" class="rounded-md px-3 py-2 text-sm underline" use:stick>Twitter</a>
			<a href="/" class="rounded-md px-3 py-2 text-sm underline" use:stick>LinkedIn</a>
		</div> -->
	</div>
	<div class="border-t border-foreground/10 py-3 text-sm">
		<div class="container mx-auto grid place-items-center">© Quarkus | All rights reserved</div>
	</div>
</footer>
