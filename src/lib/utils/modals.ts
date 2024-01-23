import type { ModalSettings, ModalStore } from '@skeletonlabs/skeleton';

export function openDeleteModal(data: any, modalStore: ModalStore): Promise<boolean> {
	return new Promise((resolve) => {
		const modal: ModalSettings = {
			type: 'confirm',
			// Data
			title: '¿Confirmar Eliminado?',
			body: '¿Estas seguro de eliminar el registro?',
			// TRUE if confirm pressed, FALSE if cancel pressed
			response: (r: boolean) => {
				resolve(r);
			}
		};
		modalStore.trigger(modal);
	});
}
