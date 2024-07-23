<script>
	import SiteBackground from '$lib/components/SiteBackground.svelte';
	import SiteImage from '$lib/components/SiteImage.svelte';
</script>

<section class="flex min-h-screen flex-col">
	<nav class="h-32 w-full">
		<div class="container mx-auto flex h-full items-center justify-between">
			<div class="font-krona text-2xl font-bold uppercase tracking-[0.2em] text-orange-800">
				Quarkus
			</div>
			<div class="flex gap-5">
				<a class="rounded-md px-3 py-1 text-orange-800" href="/" data-mouse-stick>Services</a>
				<a class="rounded-md px-3 py-1 text-orange-800" href="/" data-mouse-stick>About</a>
				<a class="rounded-md px-3 py-1 text-orange-800" href="/" data-mouse-stick>Contact</a>
			</div>
		</div>
	</nav>
	<div class="container mx-auto flex flex-1 items-center py-12">
		<div class="mb-40 grid grid-cols-2 items-center gap-10">
			<div>
				<div class="font-ibm mb-5 text-6xl text-orange-800" data-mouse-grow={80}>
					Let's build a website <br /> that makes you the easy choice
				</div>
				<div class="font-fira mb-10 text-xl text-orange-800" data-mouse-grow={50}>
					A generic website can make your unique business look like <br /> just another face in the crowd.
				</div>
				<button class="font-fira rounded-md bg-orange-900 px-10 py-3 text-white" data-mouse-stick
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
