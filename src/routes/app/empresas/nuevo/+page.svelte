<script lang="ts">
	import { getToastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import { nameWindow } from '../shared';

	import Form from '../Form.svelte';
	import { IconChevronLeft } from '@tabler/icons-svelte';

	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';

	const toastStore = getToastStore();

	export let form: any = {};
	export let data: PageData;

	$: if (form?.success === true) {
		const url = `/app/empresas/${JSON.parse(form.id)}?success=true`;
		if (browser) {
			const toast: ToastSettings = { message: 'Empresa creada exitosamente', timeout: 5000, background: 'bg-green-600' };
			toastStore.trigger(toast);
			goto(url);
		}
	} else if (form?.error) {
		const url = `/app/empresas/nuevo?success=false`;
		if (browser) {
			const toast: ToastSettings = { message: form.error, timeout: 5000, background: 'bg-red-600' };
			toastStore.trigger(toast);
			goto(url);
		}
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
			<Form action="./nuevo?/save" tablas={data.tablas} empresa={null} isEditing={false} />
		</div>
	</div>
</section>
