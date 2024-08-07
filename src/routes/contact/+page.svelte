<script lang="ts">
	import { enhance } from '$app/forms';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import ContactInput from '$lib/components/ContactInput.svelte';
	import ContactSelect from '$lib/components/ContactSelect.svelte';
	import ContactTextarea from '$lib/components/ContactTextarea.svelte';
	import { grow, stick } from '$lib/components/mouse/actions';
	import { beforeUpdate, onMount } from 'svelte';
	import type { ActionData } from './$types';

	type E = Event & {
		currentTarget: HTMLFormElement;
	};

	const UNKNOWN_ERROR = 'Unknown error occurred. Please try again later';

	let successDialog: HTMLDialogElement;
	let errorDialog: HTMLDialogElement;
	let plan: string | null;
	let sending = false;
	let form: ActionData;
	let error = UNKNOWN_ERROR;

	beforeUpdate(() => {
		plan = $page.url.searchParams.get('plan');
	});
</script>

<dialog
	bind:this={successDialog}
	class="w-full max-w-md border border-foreground/20 font-roboto text-foreground shadow-lg"
>
	<form method="dialog" class="p-5">
		<header class="mb-3">
			<h3 class="text-2xl">Enquiry Submitted</h3>
		</header>
		<article class="mb-5">
			<p>We will be in touch shortly</p>
		</article>
		<footer class="flex items-center justify-end">
			<button
				class="rounded-md bg-foreground px-10 py-3 text-sm text-background hover:bg-foreground/70"
				>Okay</button
			>
		</footer>
	</form>
</dialog>
<dialog
	bind:this={errorDialog}
	class="w-full max-w-md border border-red-500 font-roboto text-red-500 shadow-lg"
>
	<form method="dialog" class="p-5">
		<header class="mb-3">
			<h3 class="text-2xl">Error</h3>
		</header>
		<article class="mb-5">
			<p>
				{error}
			</p>
		</article>
		<footer class="flex items-center justify-end">
			<button class="rounded-md bg-red-500 px-10 py-3 text-sm text-white hover:bg-red-600"
				>Okay</button
			>
		</footer>
	</form>
</dialog>
<div class="container mx-auto grid place-items-center pb-20 pt-20">
	<div
		class="w-full max-w-screen-md rounded-xl border border-foreground/10 bg-white/40 px-20 py-20 dark:bg-black/40"
		use:grow={{ size: 0 }}
	>
		<div class="text-center font-nelphim text-4xl">
			Fill out the form and we'll be in touch to coordinate a call.
		</div>
		<form
			method="POST"
			class="mt-20 grid grid-cols-2 gap-x-5 gap-y-5 font-roboto"
			use:enhance={() => {
				sending = true;
				return ({ update, result }) => {
					update().finally(() => {
						sending = false;
						if (result.type == 'success') {
							plan = null;
							successDialog.showModal();
						} else if (result.type == 'failure') {
							if (result.data?.phone) {
								error = 'Invalid Phone Number. Please enter 10-digit Phone Number';
							}
							errorDialog.showModal();
						}
					});
				};
			}}
		>
			<ContactInput class="col-span-2" label="Name" type="text" required />
			<ContactInput class="col-span-1" label="Email" type="email" required />
			<ContactInput
				title="Enter 10 digit mobile number"
				class="col-span-1"
				label="Phone Number"
				type="tel"
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
				<button
					class="flex w-full items-center justify-center rounded-md bg-foreground py-3 text-background"
					type="submit"
					disabled={sending}
				>
					{#if sending}
						<div
							class="inline-block size-6 animate-spin rounded-full border-[3px] border-current border-t-transparent text-background"
							role="status"
							aria-label="loading"
						>
							<span class="sr-only">Loading...</span>
						</div>
					{:else}
						<span>Book a Call</span>
					{/if}
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

<style>
	@keyframes slide-in-up {
		from {
			transform: translateY(100%);
		}
	}

	@keyframes scale-down {
		to {
			transform: scale(0.75);
		}
	}

	dialog {
		display: block;
		inset: 0;
		overflow: hidden;
		transition: opacity 0.5s;
		animation: scale-down 0.5s forwards;
		animation-timing-function: cubic-bezier(0.5, -0.5, 0.1, 1.5);
		border-radius: 0.5rem;
		padding: 0;
	}

	dialog[open] {
		animation: slide-in-up 0.5s forwards;
	}

	dialog:not([open]) {
		pointer-events: none;
		opacity: 0;
	}

	dialog::backdrop {
		backdrop-filter: blur(0.25rem);
	}
</style>
