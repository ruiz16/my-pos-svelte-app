<script lang="ts">
	export let identifier: string;
	export let label: string;
	export let choices: any[];
	export let value: any = {};
	export let className = '';
	let edit = true;
	let index = 0;

	$: {
		if (edit) {
			const selectedOption = choices.find((option) => option === value);
			if (selectedOption) index = choices.indexOf(selectedOption);
			value = choices[index] ? choices[index] : null;
		}
	}

	const handleChange = (event: any) => {
		const selectedValue = event.target.value;
		const selectedOption = choices.find((option) => option === selectedValue);

		// Verificar que la opción seleccionada es válida
		if (selectedOption) {
			value = selectedOption;
		}
	};
</script>

<span class={className + 'label'}>
	<label class="text-[#3c489f] mb-2" for={identifier}>{label}</label>
	<select class="select bg-slate-100" id={identifier} bind:value on:click={() => (edit = false)} on:change={handleChange}>
		<option value="" disabled selected>Selecciona</option>
		{#each choices as choice (choice)}
			<option value={choice}>{choice}</option>
		{/each}
	</select>
</span>
