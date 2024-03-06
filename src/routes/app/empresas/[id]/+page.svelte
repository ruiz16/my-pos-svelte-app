<script lang="ts">
	import { getToastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';

	import { afterUpdate } from 'svelte';
	import { IconChevronLeft } from '@tabler/icons-svelte';
	import { nameWindow } from '../shared';
	import Form from '../Form.svelte';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';

	export let data: PageData | any;
	export let form: any = {};

	const toastStore = getToastStore();

	afterUpdate(() => {
		if (form?.success === true) {
			const url = `/app/empresas/${JSON.parse(form.id)}?type=edit&success=true`;
			if (browser) {
				const toast: ToastSettings = { message: 'Empresa actualizada exitosamente', timeout: 5000, background: 'bg-green-600' };
				toastStore.trigger(toast);
				goto(url, { invalidateAll: true });
			}
		} else if (form?.error) {
			const toast: ToastSettings = { message: form.error, timeout: 5000, background: 'bg-red-600' };
			toastStore.trigger(toast);
		}
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
			<h2 class="title-page">Empresa : {data.empresa.nombre} [NIT: {data.empresa.doc}]</h2>
			<p class="unstyled text-sm text-blue-900">A continuación los datos de la {nameWindow.singular.toLowerCase()}.</p>
		</span>
	</div>
	<div class="card mb-3 shadow" style="margin-top: 16px;">
		<div class="pb-6">
			{#key data.empresa}
				<Form action={`./${data.empresa._id}?/update`} tablas={data.tablas} empresa={data.empresa} isEditing={true} />
			{/key}
		</div>
	</div>
</section>
