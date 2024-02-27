/* eslint-disable no-undef */
import type { TablaModelInterface } from "./index";

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

    toJSON() {
        return {
            ...this._model
        };
    }
}

export type TablasType = TablaModelInterface & mongoose.Document;
export const TablaModel: Model<TablaModelInterface> = mongoose.models?.tablas || mongoose.model<TablaModelInterface>("tablas", TablaSchema, "tablas");
