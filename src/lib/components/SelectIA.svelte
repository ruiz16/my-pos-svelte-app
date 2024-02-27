<script>
	export let options = []; // Arreglo de opciones
	export let selectedValue = null; // Valor seleccionado

	// Función para manejar el cambio de selección
	function handleChange(event) {
		const selectedIndex = event.target.selectedIndex;
		selectedValue = options[selectedIndex];
	}
</script>

<!-- El componente del select -->
<select bind:value={selectedValue} on:change={handleChange}>
	{#each options as option (option._id)}
		<option value={option}>{option.valor}</option>
	{/each}
</select>
