<script lang="ts">
	import { enhance } from '$app/forms';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import ContactInput from '$lib/components/ContactInput.svelte';
	import ContactSelect from '$lib/components/ContactSelect.svelte';
	import ContactTextarea from '$lib/components/ContactTextarea.svelte';
	import { grow, stick } from '$lib/components/mouse/actions';
	import { beforeUpdate } from 'svelte';

	type E = Event & {
		currentTarget: HTMLFormElement;
	};

	let plan: string | null;

	beforeUpdate(() => {
		plan = $page.url.searchParams.get('plan');
	});
</script>

<div class="container mx-auto grid place-items-center pb-20 pt-20">
	<div
		class="w-full max-w-screen-md rounded-xl border border-foreground/10 bg-white/40 px-20 py-20 dark:bg-black/40"
		use:grow={{ size: 0 }}
	>
		<div class="text-center font-nelphim text-4xl">
			Fill out the form and we'll be in touch to coordinate a call.
		</div>
		<form method="POST" class="mt-20 grid grid-cols-2 gap-x-5 gap-y-5 font-roboto" use:enhance>
			<ContactInput class="col-span-2" label="Name" type="text" />
			<ContactInput class="col-span-1" label="Email" type="email" />
			<ContactInput
				title="Enter 10 digit mobile number"
				class="col-span-1"
				label="Phone Number"
				type="text"
				pattern="[0-9]{10}"
				required
			/>
			<ContactInput class="col-span-1" label="Business Name" type="text" required />
			<ContactInput class="col-span-1" label="Location" type="text" required />
			<ContactSelect
				class="col-span-2"
				label="Select a Plan"
				required
				value={plan}
				options={[
					{
						label: 'Basic Plan - 10$',
						value: 'basic'
					},
					{
						label: 'Standard Plan - 20$',
						value: 'standard'
					},
					{
						label: 'Premium Plan - 30$',
						value: 'premium'
					}
				]}
			/>
			<ContactTextarea class="col-span-2" label="Anything you'd like us to know?" />
			<ContactInput class="col-span-2" label="PS — how did you hear about us?" type="text" />
			<div class="col-span-2 mt-5">
				<button class="w-full rounded-md bg-foreground py-3 text-background" type="submit">
					Book a Call
				</button>
			</div>
		</form>
	</div>

	<div class="mt-10 flex flex-col items-center justify-between">
		<div class="flex items-center justify-between gap-5">
			<a class="flex items-start rounded-md px-3 py-3 font-roboto" href={base} use:stick>
				<span class="i-tabler-mail mt-px text-xl"></span>
				<span class="ml-2">hello@quarkus.in</span>
			</a>
			<a class="flex items-start rounded-md px-3 py-3 font-roboto" href={base} use:stick>
				<span class="i-tabler-phone mt-px text-xl"></span>
				<span class="ml-2">+91 9876676543</span>
			</a>
		</div>
		<div class="mt-5 flex items-center justify-start gap-1">
			<a href={base} class="grid h-10 w-10 place-items-center rounded-md" use:stick>
				<span class="i-tabler-brand-instagram text-2xl" />
			</a>
			<a href={base} class="grid h-10 w-10 place-items-center rounded-md" use:stick>
				<span class="i-tabler-brand-whatsapp text-2xl" />
			</a>
			<a href={base} class="grid h-10 w-10 place-items-center rounded-md" use:stick>
				<span class="i-tabler-brand-facebook text-2xl" />
			</a>
			<a href={base} class="grid h-10 w-10 place-items-center rounded-md" use:stick>
				<span class="i-tabler-brand-youtube text-2xl" />
			</a>
			<a href={base} class="grid h-10 w-10 place-items-center rounded-md" use:stick>
				<span class="i-tabler-brand-twitter text-2xl" />
			</a>
			<a href={base} class="grid h-10 w-10 place-items-center rounded-md" use:stick>
				<span class="i-tabler-brand-linkedin text-2xl" />
			</a>
		</div>
	</div>
</div>
