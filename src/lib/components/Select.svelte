<script>
	// @ts-nocheck
	export let identifier;
	export let options = [];
	export let display_func = (a) => a;
	export let value = {};
	export let isEditing;
	export let label;
	export let className;
	let selectedValue = isEditing ? value : options[0];

	function handleSelectChange(event) {
		const selectedIndex = event.target.selectedIndex;
		selectedValue = options[selectedIndex];
	}
</script>

<span class={className + 'label'}>
	<label class="text-[#3c489f] mb-2" for={identifier}>{label}</label>
	<select on:change={handleSelectChange} name={identifier} id={identifier} class="w-full">
		{#each options as option (option)}
			<option value={JSON.stringify(option)} selected={selectedValue.valor === option.valor}>{display_func(option)}</option>
		{/each}
	</select>
</span>
