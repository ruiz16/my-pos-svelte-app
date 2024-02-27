import { EmpresaModel } from "$/lib/models/Empresa/Empresa";
import type { Actions } from "@sveltejs/kit";


export async function load() {
    const empresas = await EmpresaModel.find({}).lean();
    return { empresas: JSON.parse(JSON.stringify(empresas)) };
}

export const actions: Actions = {
    delete: async ({ request }) => {
        try {

            const body = await request.formData();
            const { _id } = JSON.parse(body.get('id') as string);
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
