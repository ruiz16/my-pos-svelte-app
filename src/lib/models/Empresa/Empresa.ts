/* eslint-disable no-undef */
/// <reference path="./index.d.ts"/>

import mongoose, { Model } from "mongoose";
const { Schema } = mongoose;

const EmpresaSchema = new Schema({
    estado: { type: String, required: true },
    tipo_doc: { type: String, required: true },
    doc: { type: String, required: true },
    nombre: { type: String, required: true },
    nombre_comercial: { type: String, required: true },
    regimen: { type: String, required: false },
    actividad_eco: { type: String, required: false },
    resp_fiscal: { type: String, required: false },
    impuestos: { type: String, required: false },
    ambiente: { type: String, required: false },
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

    toJSON(): any {
        return {
            ...this._model
        };
    }
}

export type EmpresasType = EmpresaModelInterface & mongoose.Document;
export const EmpresaModel: Model<EmpresaModelInterface> = mongoose.models?.empresas || mongoose.model<EmpresaModelInterface>("empresas", EmpresaSchema, "empresas");
