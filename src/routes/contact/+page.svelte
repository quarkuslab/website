<script>
	import ContactInput from '$lib/components/ContactInput.svelte';
	import ContactSelect from '$lib/components/ContactSelect.svelte';
	import ContactTextarea from '$lib/components/ContactTextarea.svelte';
</script>

<div class="container mx-auto grid place-items-center pb-40">
	<div
		class="w-full max-w-screen-md rounded-xl border border-foreground/10 bg-white/40 px-20 py-20"
	>
		<div class="text-center font-nelphim text-4xl">
			Fill out the form and we'll be in touch to coordinate a call.
		</div>
		<form class="mt-20 grid grid-cols-2 gap-x-5 gap-y-5 font-roboto">
			<ContactInput class="col-span-2" label="Name" type="text" required />
			<ContactInput class="col-span-1" label="Email" type="email" required />
			<ContactInput class="col-span-1" label="Phone Number" type="tel" required />
			<ContactInput class="col-span-1" label="Business Name" type="text" required />
			<ContactInput class="col-span-1" label="Location" type="text" required />
			<ContactSelect
				class="col-span-2"
				label="Select a Plan"
				required
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
			<div class="col-span-2">
				<button class="w-full rounded-md bg-foreground py-3 text-background" type="submit">
					Book a Call
				</button>
			</div>
		</form>
	</div>
</div>
