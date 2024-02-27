/* eslint-disable no-undef */
import type { EmpresaModelInterface } from "./index";

import mongoose, { Model } from "mongoose";
const { Schema } = mongoose;

const Mixed = Schema.Types.Mixed;

const EmpresaSchema = new Schema({
    estado: { type: Mixed, required: false },
    tipo_doc: { type: Mixed, required: false },
    doc: { type: String, required: false },
    nombre: { type: String, required: false },
    nombre_comercial: { type: String, required: false },
    regimen: { type: Mixed, required: false },
    actividad_eco: { type: Mixed, required: false },
    resp_fiscal: { type: Mixed, required: false },
    impuestos: { type: Mixed, required: false },
    ambiente: { type: Mixed, required: false },
    id_software: { type: String, required: false },
    token: { type: String, required: false },
    token_pass: { type: String, required: false },
    observaciones: { type: String, required: false },
},
    { timestamps: true }
);

EmpresaSchema.index({ doc: 1, estado: 1 }, { unique: true });

export class Empresas {
    private _model: EmpresaModelInterface;

    constructor(model: EmpresaModelInterface) {
        this._model = model || {};
    }

    toJSON() {
        return {
            ...this._model
        };
    }
}

export type EmpresasType = EmpresaModelInterface & mongoose.Document;
export const EmpresaModel: Model<EmpresaModelInterface> = mongoose.models?.empresas || mongoose.model<EmpresaModelInterface>("empresas", EmpresaSchema, "empresas");
