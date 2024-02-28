/* eslint-disable no-undef */
import type { EmpresaModelInterface } from "./index";

import mongoose, { Model } from "mongoose";
const { Schema } = mongoose;

const Mixed = Schema.Types.Mixed;

const EmpresaSchema = new Schema({
    estado: { type: Mixed, required: true },
    tipo_doc: { type: Mixed, required: true },
    doc: { type: String, required: true },
    nombre: { type: String, required: true },
    nombre_comercial: { type: String, required: true },
    regimen: { type: Mixed, required: true },
    actividad_eco: { type: Mixed, required: true },
    resp_fiscal: { type: Mixed, required: true },
    impuestos: { type: Mixed, required: true },
    ambiente: { type: Mixed, required: true },
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
