<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import { enhance } from '$app/forms';
	import Select from '$/lib/components/Select.svelte';

	// TODO: Add types-definitions.
	export let action: string;
	export let isEditing: boolean;
	export let tablas;
	export let empresa;

	let input: any = {};
	if (input && empresa) {
		input = empresa;
	}

	// @ts-ignore
	const groupedData = tablas.reduce((result, item) => {
		const tipo = item.tipo;
		if (!result[tipo]) {
			result[tipo] = [];
		}
		result[tipo].push(item);
		return result;
	}, {});
	
</script>

<form class="mt-4 flex flex-col gap-4 pt-4" {action} method="post" use:enhance on:submit|preventDefault>
	<div class="grid grid-cols-4 gap-8 p-4 pt-0">
		<Select
			className=""
			identifier="estado"
			label="Estado"
			options={groupedData.estado}
			bind:value={input.estado}
			display_func={(a) => a.valor}
			{isEditing}
		/>
		<Select
			className=""
			identifier="tipo_doc"
			label="Tipo Documento"
			options={groupedData.tipo_doc}
			bind:value={input.tipo_doc}
			display_func={(a) => a.valor}
			{isEditing}
		/>
		<Input className="" identifier="doc" label="No. Identificación" bind:value={input.doc} required={true} />
		<Input className="" identifier="nombre" label="Nombre" bind:value={input.nombre} required={true} />
		<Input
			className=""
			identifier="nombre_comercial"
			label="Nombre Comercial"
			bind:value={input.nombre_comercial}
			required={true}
		/>
		<Select
			className=""
			identifier="actividad_eco"
			label="Actividad Económica"
			options={groupedData.actividad_eco}
			bind:value={input.actividad_eco}
			display_func={(a) => a.valor}
			{isEditing}
		/>
		<Select
			className=""
			identifier="resp_fiscal"
			label="Responsabilidad Fiscal"
			options={groupedData.resp_fiscal}
			bind:value={input.resp_fiscal}
			display_func={(a) => a.valor}
			{isEditing}
		/>
		<Select
			className=""
			identifier="impuestos"
			label="Impuestos"
			options={groupedData.impuestos}
			bind:value={input.impuestos}
			display_func={(a) => a.valor}
			{isEditing}
		/>
		<Select
			className=""
			identifier="regimen"
			label="Regimen Fiscal"
			options={groupedData.regimen}
			bind:value={input.regimen}
			display_func={(a) => a.valor}
			{isEditing}
		/>
		<Select
			className=""
			identifier="ambiente"
			label="Ambiente"
			options={groupedData.ambiente}
			bind:value={input.ambiente}
			display_func={(a) => a.valor}
			{isEditing}
		/>
	</div>
	<button
		type="submit"
		style="margin: auto;"
		class="btn bg-[#3c489f] text-white mb-4 mx-4 flex h-6 cursor-pointer px-4 rounded-md max-w-sm"
	>
		Guardar
	</button>
</form>
