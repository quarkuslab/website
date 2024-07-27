<script>
	import { grow, stick } from '$lib/components/mouse/actions';
	import SiteBackground from '$lib/components/SiteBackground.svelte';
	import SiteImage from '$lib/components/SiteImage.svelte';
</script>

<section class="flex min-h-screen flex-col">
	<nav class="h-32 w-full">
		<div class="container mx-auto flex h-full items-center justify-between">
			<div class="font-staal text-2xl uppercase tracking-[0.2em] text-foreground">Quarkus</div>
			<div class="flex gap-5">
				<a class="rounded-md px-3 py-1 text-foreground" href="/" use:stick>Services</a>
				<a class="rounded-md px-3 py-1 text-foreground" href="/" use:stick>About</a>
				<a class="rounded-md px-3 py-1 text-foreground" href="/" use:stick>Contact</a>
			</div>
		</div>
	</nav>
	<div class="container mx-auto flex flex-1 items-center py-12">
		<div class="mb-40 grid grid-cols-2 items-center gap-10">
			<div>
				<div class="mb-5 font-noto text-6xl text-foreground" use:grow={{ size: 80 }}>
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

<section class="container mx-auto py-20">
	<div class="mb-20 grid place-items-center">
		<div
			class="inline-block text-center font-noto text-5xl text-foreground"
			use:grow={{ size: 80 }}
		>
			Lorem ipsum dolor sit <br /> amet consectetur.
		</div>
	</div>
	<div class="grid grid-cols-3 gap-10">
		<div
			class="flex w-full flex-col items-center justify-center rounded-xl bg-white px-20 py-10"
			use:stick
		>
			<div class="mb-10 h-20 w-20 rounded-full bg-foreground"></div>
			<div class="mb-5 font-noto text-4xl text-foreground">Design</div>
			<div class="text-center font-fira text-foreground">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus cumque dicta iure iusto
				laborum quibusdam, eveniet aliquid pariatur eius asperiores repudiandae, velit repellat
				nihil libero! Commodi amet optio repellendus quibusdam.
			</div>
		</div>

		<div
			class="flex w-full flex-col items-center justify-center rounded-xl bg-white px-20 py-10"
			use:stick
		>
			<div class="mb-10 h-20 w-20 rounded-full bg-foreground"></div>
			<div class="mb-5 font-noto text-4xl text-foreground">Design</div>
			<div class="text-center font-fira text-foreground">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus cumque dicta iure iusto
				laborum quibusdam, eveniet aliquid pariatur eius asperiores repudiandae, velit repellat
				nihil libero! Commodi amet optio repellendus quibusdam.
			</div>
		</div>

		<div
			class="flex w-full flex-col items-center justify-center rounded-xl bg-white px-20 py-10"
			use:stick
		>
			<div class="mb-10 h-20 w-20 rounded-full bg-foreground"></div>
			<div class="mb-5 font-noto text-4xl text-foreground">Design</div>
			<div class="text-center font-fira text-foreground">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus cumque dicta iure iusto
				laborum quibusdam, eveniet aliquid pariatur eius asperiores repudiandae, velit repellat
				nihil libero! Commodi amet optio repellendus quibusdam.
			</div>
		</div>
	</div>
</section>
