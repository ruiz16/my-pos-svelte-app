/* eslint-disable no-undef */
/// <reference path="./index.d.ts"/>

import mongoose, { Model } from "mongoose";
const { Schema } = mongoose;

const TablaSchema = new Schema({
    tipo: { type: String, required: true },
    clave: { type: String, required: true },
    valor: { type: String, required: true },
},
    { timestamps: true }
);

TablaSchema.index({ tipo: 1, clave: 1 }, { unique: true });

export class Tablas {
    private _model: TablaModelInterface;

    constructor(model: TablaModelInterface) {
        this._model = model || {};
    }

    toJSON(): any {
        return {
            ...this._model
        };
    }
}

export type TablasType = TablaModelInterface & mongoose.Document;
export const TablaModel: Model<TablaModelInterface> = mongoose.models?.tablas || mongoose.model<TablaModelInterface>("tablas", TablaSchema, "tablas");
