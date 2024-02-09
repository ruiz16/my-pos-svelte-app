import { EmpresaModel } from "$/lib/models/Empresa/Empresa";
import type { Actions } from "@sveltejs/kit";

export async function load({ params }) {
    const Empresas = await EmpresaModel.findById(params.id, { __v: 0 }).lean();
    return { empresa: JSON.stringify(Empresas) };
}

export const actions: Actions = {
    update: async ({ request, params }) => {
        const formData = await request.formData();
        const estado = formData.get("estado");
        const tipo_doc = formData.get("tipo_doc");
        const doc = formData.get("doc");
        const nombre = formData.get("nombre");
        const nombre_comercial = formData.get("nombre_comercial");
        const regimen = formData.get("regimen");
        const actividad_eco = formData.get("actividad_eco");
        const resp_fiscal = formData.get("resp_fiscal");
        const impuestos = formData.get("impuestos");
        const ambiente = formData.get("ambiente");
        const newEmpresa = EmpresaModel.updateOne({ _id: params.id }, { estado, tipo_doc, doc, nombre, nombre_comercial, regimen, actividad_eco, resp_fiscal, impuestos, ambiente })
        return newEmpresa;
    },

}