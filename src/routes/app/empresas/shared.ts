import type { EmpresaModelInterface } from '$lib/models/Empresa';
import type { ObjectId } from 'mongodb';

export const nameWindow = {
	plural: 'Empresas',
	singular: 'Empresa'
};

export interface Empresa extends EmpresaModelInterface {
	_id?: ObjectId;
}
