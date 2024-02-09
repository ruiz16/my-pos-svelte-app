<script lang="ts">
	import { nameWindow } from '../shared';

	import Form from '../Form.svelte';
	import { IconChevronLeft } from '@tabler/icons-svelte';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';

	export let form: any = {};

	$: if (form?.success === true) {
		const url = `/empresas/${form.id}`;
		if (browser) goto(url);
	}
</script>

<section class="mx-[30px] mt-4 flex flex-col justify-center">
	<div class="flex items-center">
		<a
			class="grid h-10 w-10 place-content-center rounded-full bg-[#3c489f] text-white"
			href="/app/empresas"
			rel="noopener noreferrer"
			title="Atras"
		>
			<IconChevronLeft class="mx-1" size={24} stroke={3} color="white" />
		</a>
		<span class="ml-2">
			<h2 class="title-page">Nueva {nameWindow.singular}</h2>
			<p class="unstyled text-sm text-blue-900">A continuación, ingrese los datos de la {nameWindow.singular.toLowerCase()}.</p>
		</span>
	</div>
	<div class="card mb-3 shadow" style="margin-top: 16px;">
		<div class="pb-6">
			<Form input={undefined} action="./nuevo?/save" />
		</div>
	</div>
</section>
