<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let label: string;
	export let identifier: string;

	export let min: number;
	export let max: number;

	const dispatch = createEventDispatcher();

	function cambiarMin(e: any) {
		const nuevoMin = parseInt(e.target.value);
		dispatch('update', { min: nuevoMin, max });
	}

	function cambiarMax(e: any) {
		const nuevoMax = parseInt(e.target.value);
		dispatch('update', { min, max: nuevoMax });
	}
</script>

<p>
	<label for={`${identifier}_min`}>{label} mínimo</label>
	<input type="range" min={0} max={50000} value={min} on:change={cambiarMin} />
	<span>{min}</span>
</p>

<p>
	<label for={`${identifier}_max`}>{label} máximo</label>
	<input type="range" min={0} max={50000} value={max} on:change={cambiarMax} />
	<span>{max}</span>
</p>
