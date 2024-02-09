import { EmpresaModel } from "$/lib/models/Empresa/Empresa";
import type { Actions } from "@sveltejs/kit";


export async function load() {
    const _empresas = await EmpresaModel.find({}).lean();
    return { empresas: JSON.stringify(_empresas) }
}

export const actions: Actions | any = {
    delete: async ({ request }: any): Promise<any> => {
        try {

            const body = await request.formData();
            const { _id } = JSON.parse(body.get('data'));
            const result = await EmpresaModel.deleteOne({ _id });

            // Devuelve la respuesta adecuada
            return {
                body: JSON.stringify(result),
                headers: {
                    'Content-Type': 'application/json',
                },
            };
        } catch (error) {
            // Manejo de errores
            console.error('Error en la función del lado del servidor:', error);
            return {
                status: 500,
                body: JSON.stringify({ error: 'Error en el servidor' }),
                headers: {
                    'Content-Type': 'application/json',
                },
            };
        }
    }
}
