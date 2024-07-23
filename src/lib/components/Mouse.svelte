<script lang="ts">
	import { onMount } from 'svelte';
	import { spring, tweened } from 'svelte/motion';

	interface Shape {
		w: number; // width
		h: number; // height
		tl: number; // Top Left Radius
		tr: number; // Top Right Radius
		bl: number; // Bottom Left Radius
		br: number; // Bottom Right Radius
	}

	interface Position {
		x: number;
		y: number;
	}

	interface Target {
		type: 'grow' | 'stick';
		size: number;
		rect: DOMRect;
	}

	export let radius: number = 10;

	const pos = spring<Position>({ x: 0, y: 0 }, { damping: 0.5, stiffness: 0.05 });
	const shape = spring<Shape>(circle(radius), {
		damping: 0.3,
		stiffness: 0.05
	});
	let targets: Target[] = [];

	$: pathD = p({
		x: $pos.x,
		y: $pos.y,
		w: $shape.w,
		h: $shape.h,
		tl: $shape.tl,
		tr: $shape.tr,
		bl: $shape.bl,
		br: $shape.br
	});

	onMount(() => {
		const growTargets: Target[] = Array.from(document.querySelectorAll('[data-mouse-grow]')).map(
			(el) => ({
				type: 'grow',
				size: parseInt(el.getAttribute('data-mouse-grow')!),
				rect: el.getBoundingClientRect()
			})
		);
		const stickTargets: Target[] = Array.from(document.querySelectorAll('[data-mouse-stick]')).map(
			(el) => ({
				type: 'stick',
				rect: el.getBoundingClientRect(),
				size: parseInt(window.getComputedStyle(el).borderRadius.match(/\d+/)?.[0] || '0')
			})
		);

		targets = [...growTargets, ...stickTargets];
	});

	function getTargetElement(e: MouseEvent) {
		const x = e.clientX;
		const y = e.clientY;
		const isMouseOverElement = (rect: DOMRect) =>
			x >= rect.left && x < rect.right && y >= rect.top && y < rect.bottom;

		for (const target of targets) {
			if (isMouseOverElement(target.rect)) {
				return target;
			}
		}

		return null;
	}

	function onMove(e: MouseEvent) {
		const target = getTargetElement(e);

		if (target) {
			if (target.type == 'grow') {
				shape.set(circle(target.size));
			} else if (target.type == 'stick') {
				shape.set(circle(0));
				shape.set(rectangle(target.rect.width, target.rect.height, target.size));
			}
		} else {
			shape.set(circle(radius));
		}

		if (target && target.type == 'stick') {
			pos.set({
				x: target.rect.left + target.rect.width / 2,
				y: target.rect.top + target.rect.height / 2
			});
		} else {
			pos.set({ x: e.clientX, y: e.clientY });
		}
	}

	function circle(radius: number): Shape {
		return {
			w: radius * 2,
			h: radius * 2,
			tl: radius,
			tr: radius,
			bl: radius,
			br: radius
		};
	}

	function rectangle(width: number, height: number, radius: number): Shape {
		return {
			w: width,
			h: height,
			tl: radius,
			tr: radius,
			bl: radius,
			br: radius
		};
	}

	function p(opts: Shape & Position) {
		return `
    M ${opts.x + opts.tl - opts.w / 2},${opts.y - opts.h / 2}
    H ${opts.x - opts.tr + opts.w / 2}
    A ${opts.tr},${opts.tr} 0 0 1 ${opts.x + opts.w / 2},${opts.y + opts.tr - opts.h / 2}
    V ${opts.y - opts.br + opts.h / 2}
    A ${opts.tr},${opts.tr} 0 0 1 ${opts.x - opts.br + opts.w / 2},${opts.y + opts.h / 2}
    H ${opts.x + opts.bl - opts.w / 2}
    A ${opts.tr},${opts.tr} 0 0 1 ${opts.x - opts.w / 2},${opts.y - opts.bl + opts.h / 2}
    V ${opts.y + opts.tl - opts.h / 2}
    A ${opts.tr},${opts.tr} 0 0 1 ${opts.x + opts.tl - opts.w / 2},${opts.y - opts.h / 2}
    Z
    `;
	}
</script>

<svelte:window on:mousemove={onMove} />
<svg class="pointer-events-none absolute left-0 top-0 z-50 h-full w-full mix-blend-difference">
	<path class="fill-white" d={pathD} />
</svg>
