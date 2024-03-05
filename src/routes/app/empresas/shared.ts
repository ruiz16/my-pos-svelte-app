import type { EmpresaModelInterface } from '$lib/models/Empresa';

export const nameWindow = {
	plural: 'Empresas',
	singular: 'Empresa'
};

export interface Empresa extends EmpresaModelInterface {
	_id: string;
}
