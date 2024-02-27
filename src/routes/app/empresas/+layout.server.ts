import { TablaModel } from "$/lib/models/Tablas/Tabla";

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
    const tablas = await TablaModel.find({}).lean();
    return { tablas: JSON.parse(JSON.stringify(tablas)) };
}