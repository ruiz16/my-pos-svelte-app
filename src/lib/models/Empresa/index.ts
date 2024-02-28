import type { TablasType } from "$/lib/models/Tablas/Tabla";

export interface EmpresaModelInterface {
    estado: TablasType
    tipo_doc: TablasType
    doc: string
    nombre: string
    nombre_comercial: string
    actividad_eco: TablasType
    resp_fiscal: TablasType
    impuestos: TablasType
    ambiente: TablasType
    id_software?: string
    token?: string
    token_pass?: string
    observaciones?: string
}