<script lang="ts">
	import { onMount } from 'svelte';
	import { IconChevronLeft } from '@tabler/icons-svelte';
	import Form from '../Form.svelte';

	import type { PageData } from './$types';
	export let data: PageData;

	import { nameWindow } from '../shared';

	// TODO: crear interface de empresa
	let datos: any = {};

	onMount(() => {
		const token = data.token;
		datos = JSON.parse(data.empresa);
	});
</script>

<section class="mx-[30px] mt-4 flex flex-col justify-center">
	<div class="flex items-center">
		<a
			class="mr-2 grid h-10 w-10 place-content-center rounded-full bg-[#3c489f] text-white"
			href="/app/empresas"
			rel="noopener noreferrer"
			title="Atras"
		>
			<IconChevronLeft class="mx-1" size={24} stroke={3} color="white" />
		</a>
		<span>
			<h2 class="title-page">Empresa : {datos.nombre} [NIT: {datos.doc}]</h2>
			<p class="unstyled text-sm text-blue-900">A continuación los datos de la {nameWindow.singular.toLowerCase()}.</p>
		</span>
	</div>
	<div class="card mb-3 shadow" style="margin-top: 16px;">
		<div class="pb-6">
			<Form input={datos} action={`./${datos._id}?/update`} />
		</div>
	</div>
</section>
