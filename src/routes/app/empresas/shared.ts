export const nameWindow = {
	plural: 'Empresas',
	singular: 'Empresa'
};

export interface Empresa {
	_id: string;
	estado: { [valor: string]: string };
	nombre: string;
	nombre_comercial: string;
	tipo_doc: { [valor: string]: string };
	doc: string;
	observaciones: string;
}
