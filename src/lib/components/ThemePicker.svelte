<script lang="ts">
	import { onMount } from 'svelte';

	const initial = {
		bg: '#F0F9FA',
		fg: '#075985'
	};

	let bg: string = initial.bg;
	let fg: string = initial.fg;
	let dark = false;

	function getRGB(color: string) {
		if (color) {
			const r = parseInt(color.slice(1, 3), 16);
			const g = parseInt(color.slice(3, 5), 16);
			const b = parseInt(color.slice(5, 7), 16);

			return { r, g, b };
		}

		return null;
	}

	function setColor(variable: string, color: string) {
		if (typeof window != 'undefined') {
			const parsed = getRGB(color);
			if (parsed) {
				document.documentElement.style.setProperty(variable, formatRGB(parsed));
			}
		}
	}

	function formatRGB(value: { r: number; g: number; b: number } | null): string {
		if (value) {
			return `${value.r} ${value.g} ${value.b}`;
		}

		return '';
	}

	function exportTheme() {
		const data = new TextEncoder().encode(JSON.stringify({ bg, fg, dark }));
		const blob = new Blob([data], { type: 'application/octet-stream' });
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');

		link.href = url;
		link.download = generateColorInspiredName() + '.quarkustheme';

		link.click();
		URL.revokeObjectURL(url);
	}

	function generateColorInspiredName() {
		const colorAssociatedWords = [
			// Nature-inspired
			'meadow',
			'vineyard',
			'lavender',
			'iris',
			'rose',
			'olive',
			'coral',
			'jade',
			'amber',
			'cinnamon',
			'peppermint',
			'orchid',
			'hazel',
			'honey',
			'coffee',
			// Elements and materials
			'copper',
			'silver',
			'gold',
			'bronze',
			'steel',
			'marble',
			'velvet',
			'silk',
			'leather',
			'stone',
			'clay',
			'pearl',
			'ivory',
			'charcoal',
			'smoke',
			// Abstract and emotional
			'passion',
			'mystery',
			'calm',
			'energy',
			'joy',
			'wisdom',
			'power',
			'love',
			'freedom',
			'chaos',
			// Other descriptive terms
			'frost',
			'fog',
			'storm',
			'dawn',
			'dusk',
			'spice',
			'sugar',
			'salt',
			'pepper',
			'chili'
		];

		const nameSuffixes = [
			// Nature-inspired
			'leaf',
			'bloom',
			'petal',
			'bark',
			'root',
			'cloud',
			'rain',
			'fog',
			'storm',
			'wind',
			// Materials and textures
			'shine',
			'gloss',
			'luster',
			'dust',
			'ash',
			'foam',
			'wave',
			'ripple',
			'sand',
			'clay',
			// Abstract and conceptual
			'dream',
			'soul',
			'spirit',
			'mind',
			'heart',
			'light',
			'dark',
			'shadow',
			'echo',
			'pulse'
		];

		const randomWord =
			colorAssociatedWords[Math.floor(Math.random() * colorAssociatedWords.length)];
		const randomSuffix = nameSuffixes[Math.floor(Math.random() * nameSuffixes.length)];

		return `${randomWord}-${randomSuffix}`;
	}

	async function importTheme(el: HTMLInputElement) {
		if (el.files?.length) {
			const [file] = el.files;
			const data = JSON.parse(await file.text());
			bg = data.bg;
			fg = data.fg;
			dark = data.dark;

			const form = el.closest('#import-form') as HTMLFormElement;
			form.reset();
		}
	}

	function setDarkMode(value: boolean) {
		if (typeof window != 'undefined') {
			if (value) {
				document.body.classList.add('dark');
			} else {
				document.body.classList.remove('dark');
			}
		}
	}

	$: setColor('--color-bg', bg);
	$: setColor('--color-fg', fg);
	$: setDarkMode(dark);
</script>

<div class="fixed bottom-5 right-5 z-[999] w-80 rounded-md bg-white p-5 text-black">
	<div class="flex gap-3">
		<p>Background</p>
		<input type="color" bind:value={bg} />
		<div>{formatRGB(getRGB(bg))}</div>
	</div>
	<div class="flex gap-3">
		<p>Foreground</p>
		<input type="color" bind:value={fg} />
		<div>{formatRGB(getRGB(fg))}</div>
	</div>
	<label class="flex gap-3" for="dark">
		<div>Dark</div>
		<input type="checkbox" id="dark" bind:checked={dark} />
	</label>
	<div class="mt-5 grid grid-cols-2 gap-3">
		<form id="import-form">
			<label
				class="flex w-full cursor-pointer items-center justify-center rounded-md bg-black py-2 text-sm text-white"
				for="import-theme"
			>
				<span>Import</span>
				<input
					class="hidden"
					type="file"
					id="import-theme"
					on:change={(e) => importTheme(e.currentTarget)}
					accept=".quarkustheme"
				/>
			</label>
		</form>
		<button class="w-full rounded-md bg-black py-2 text-sm text-white" on:click={exportTheme}
			>Export</button
		>
	</div>
</div>
