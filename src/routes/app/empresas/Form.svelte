<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import Dropdown from '$lib/components/Dropdown.svelte';
	import { ApiService } from '$/services';

	export let input: any = {};
	export let token = '';
	export let action: string = '';

	const estados = ['Activo', 'Inactivo'];
	const tiposDocumento = ['Cedula de Ciudadania', 'Tarjeta de Identidad', 'Pasaporte', 'Cedula de Extranjeria'];
	const regimenesFiscales = [
		'No Responsable de IVA',
		'Si Responsable de IVA',
		'Impuesto al Consumo',
		'Si Responsable de IVA e Impuesto al Consumo'
	];
	const actividadesEconomicas = ['Empleado', 'Pensionado', 'Profesional Independiente', 'Comverciante', 'Otro'];
	const responsabilidadesFiscales = ['Gran Contribuyente', 'Contribuyente', 'No Contribuyente'];
	const impuestos = ['Impuesto de valor agregado', 'Otro impuesto'];
	const ambientes = ['Desarrollo', 'Pruebas', 'Producción'];

	const END_POINT = 'empresa';
	async function handleSubmit() {
		if (action === 'create') {
			ApiService(END_POINT, 'POST', token, input).then((response) => {
				console.log(response);
			});
		}

		if (action === 'update') {
			ApiService(`${END_POINT}/${input._id}`, 'PUT', token, input).then((response) => {
				console.log(response);
			});
		}
	}
</script>

<form class="mt-4 flex flex-col gap-4 pt-4" on:submit|preventDefault={handleSubmit}>
	<div class="grid grid-cols-4 gap-8 p-4 pt-0">
		<Dropdown className="col-span-2" identifier="estado" label="Estado" choices={estados} bind:value={input.estado} />
		<Dropdown
			className="col-span-2"
			identifier="tipo_doc"
			label="Tipo de Documento"
			choices={tiposDocumento}
			bind:value={input.tipo_doc}
		/>
		<Input className="col-span-2" identifier="doc" label="No. Identificación" bind:value={input.doc} />
		<Input className="col-span-2" identifier="nombre" label="Nombre" bind:value={input.nombre} />
		<Input className="col-span-2" identifier="nombre_comercial" label="Nombre Comercial" bind:value={input.nombre_comercial} />
		<Dropdown
			className="col-span-2"
			identifier="actividad_eco"
			label="Actividad Económica"
			choices={actividadesEconomicas}
			bind:value={input.actividad_eco}
		/>
		<Dropdown
			className="col-span-2"
			identifier="resp_fiscal"
			label="Responsabilidad Fiscal"
			choices={responsabilidadesFiscales}
			bind:value={input.resp_fiscal}
		/>
		<Dropdown className="col-span-2" identifier="impuestos" label="Impuestos" choices={impuestos} bind:value={input.impuestos} />
		<Dropdown
			className="col-span-2"
			identifier="regimen"
			label="Regimen Fiscal"
			choices={regimenesFiscales}
			bind:value={input.regimen}
		/>
		<Dropdown className="col-span-2" identifier="ambiente" label="Ambiente" choices={ambientes} bind:value={input.ambiente} />
	</div>
	<button
		class="btn bg-[#3c489f] text-white mb-4 mx-4 flex h-6 cursor-pointer px-4 rounded-md max-w-sm"
		type="submit"
		style="margin: auto;"
	>
		Guardar
	</button>
</form>
