import { EmpresaModel } from "$/lib/models/Empresa/Empresa";
import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
    save: async ({ request }) => {
        const formData = await request.formData();
        const estado = formData.get("estado") || 'Activo';
        const tipo_doc = formData.get("tipo_doc") || 'NIT';
        const doc = formData.get("doc");
        const nombre = formData.get("nombre");
        const nombre_comercial = formData.get("nombre_comercial");
        const regimen = formData.get("regimen");
        const actividad_eco = formData.get("actividad_eco");
        const resp_fiscal = formData.get("resp_fiscal");
        const impuestos = formData.get("impuestos");
        const ambiente = formData.get("ambiente");

        const newEmpresa = await EmpresaModel.create({ estado, tipo_doc, doc, nombre, nombre_comercial, regimen, actividad_eco, resp_fiscal, impuestos, ambiente })
        return { success: true, id: newEmpresa._id };
    }
}