import { EmpresaModel } from "$/lib/models/Empresa/Empresa";
import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
    save: async ({ request }) => {
        try {
            const formData = await request.formData();
            // Convertir FormData a un objeto plano
            const value: Record<string, string | object> = {};

            formData.forEach((formDataEntryValue, key) => {
                if (typeof formDataEntryValue === 'string') {
                    try {
                        // Intentar realizar JSON.parse en cada cadena JSON
                        value[key] = JSON.parse(formDataEntryValue);
                    } catch (error) {
                        // Si no se puede analizar como JSON, simplemente asignar el valor de cadena
                        value[key] = formDataEntryValue;
                    }
                } else {
                    // Si no es una cadena, simplemente asignar el valor
                    value[key] = formDataEntryValue;
                }
            });
            const newEmpresa = await EmpresaModel.create(value);
            return { success: true, id: JSON.stringify(newEmpresa._id) };
        } catch (error: any) {
            if (error.code === 11000) {
                return { success: false, error: "Ya existe una empresa con el mismo documento" };
            } else {
                return { success: false, error: error.message };
            }
        }
    }
}