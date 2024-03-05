<script lang="ts">
	import { IconPencil, IconTrash } from '@tabler/icons-svelte';
	import ButtonNew from '$lib/components/ButtonNew.svelte';
	import { Paginator, Modal, type PaginationSettings, Toast } from '@skeletonlabs/skeleton';

	import { getModalStore } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();

	import { onMount } from 'svelte';
	import { calculatePaginatedSource } from '$lib/utils/utilities.js';

	import { nameWindow, type Empresa } from './shared';
	import { openDeleteModal } from '$/lib/utils/modals';

	import type { PageData } from './$types';
	export let data: PageData;

	let sourceData: Empresa[] = [];
	let paginatedSource: Empresa[];
	let tablas: [];

	// CONFIGURACION TABLA
	const sourceHeader = ['#', 'Estado', 'Nombre', 'Nombre Comercial', 'Tipo Documento', 'No. Identificación', 'Opciones'];
	let paginationSettings = {
		page: 0,
		limit: 10,
		size: sourceData.length,
		amounts: [10, 20, 100]
	} satisfies PaginationSettings;

	async function deleteHandler(id: string, empresa: Empresa) {
		openDeleteModal(empresa, modalStore).then(async (result) => {
			if (result === true) {
				const response = await fetch('?/delete', {
					method: 'POST',
					body: new URLSearchParams({ id }),
					headers: { 'x-sveltekit-action': 'true', 'Content-Type': 'application/x-www-form-urlencoded' }
				});
				if (response.status === 200) {
					paginatedSource = paginatedSource.filter(function (item) {
						return item._id !== id;
					});
				}
			}
		});
	}

	async function getData(token: string) {
		sourceData = data.empresas;
		tablas = data.tablas;
	}

	let token = '';
	onMount(() => {
		token = data.token;
		getData(token);
	});

	$: paginatedSource = calculatePaginatedSource(0, paginationSettings.limit, sourceData);
</script>

<section class="mx-[30px] mt-4 flex flex-col justify-center">
	<div class="flex items-center justify-between">
		<span>
			<h2 class="title-page">Lista de {nameWindow.plural}</h2>
			<p class="unstyled text-sm text-blue-900">A continuación, lista de todos los {nameWindow.plural.toLowerCase()}.</p>
		</span>
		<ButtonNew title="Nueva Empresa" url="/app/empresas/nuevo" label="NUEVO" className="mt-4" />
	</div>

	<div class="flex flex-col items-end">
		<!-- Responsive Container (recommended) -->
		<div class="table-container relative overflow-x-auto">
			<!-- Native Table Element -->
			<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
				<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						{#each sourceHeader as header}
							<th class="h-6">{header}</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each paginatedSource as data, i (data._id)}
						<tr>
							<td class="pl-1">{i + 1}</td>
							<td>{data.estado.valor}</td>
							<td>{data.nombre}</td>
							<td>{data.nombre_comercial}</td>
							<td>{data.tipo_doc?.valor ?? ''}</td>
							<td>{data.doc}</td>
							<td class="mt-1 flex items-center gap-2 py-2">
								<a
									class="flex gap-1 btn btn-sm px-2 py-1 bg-slate-400 hover:bg-orange-400 text-white border-none rounded-md"
									title="Editar"
									href={`/app/empresas/${data._id}?type=edit`}
									role="button"
								>
									Editar <IconPencil size={12} />
								</a>
								<form method="POST" on:submit|preventDefault={() => deleteHandler(data._id, data)}>
									<!-- HIDDEN VALUE ID -->
									<input name="id" type="text" hidden value={data._id} />
									<button
										class="flex gap-1 btn btn-sm px-2 py-1 border-none bg-slate-400 hover:bg-red-600 text-white rounded-md cursor-pointer"
										title="Eliminar"
										type="submit"
									>
										Eliminar <IconTrash size={12} />
									</button>
								</form>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
			<Paginator
				class="pagination mt-4 text-xs"
				bind:settings={paginationSettings}
				showFirstLastButtons={false}
				showPreviousNextButtons={true}
				showNumerals
				maxNumerals={3}
				amountText="elementos"
			/>
		</div>
	</div>
</section>

<Modal background="bg-white" regionBackdrop="bg-black/60" buttonTextCancel="Cancelar" buttonTextConfirm="Confirmar" />
