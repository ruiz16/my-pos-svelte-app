<script>
	// @ts-nocheck
	export let options = [];
	export let display_func = (a) => a;
	export let value;
	let index = 0;

	$: {
		const selectedOption = options.find((option) => option.valor === value?.valor);
		if (selectedOption) {
			index = options.indexOf(selectedOption);
		}
		value = options[index] ? options[index].valor : null;
	}
</script>

<select bind:value>
	{#each options as option (option.valor)}
		<option value={option.valor}>{display_func(option)}</option>
	{/each}
</select>
