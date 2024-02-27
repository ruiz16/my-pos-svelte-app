/* eslint-disable no-undef */
/// <reference path="./index.d.ts"/>

import mongoose, { Model } from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
    user: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    resetTimer: { type: String, required: true },
    refreshToken: { type: String, required: false },
},
    { timestamps: true }
);

export class Usuarios {
    private _model: UserModelInterface;

    constructor(model: UserModelInterface) {
        this._model = model || {};
    }

    toJSON() {
        return {
            ...this._model
        };
    }
}

export interface _user extends UserModelInterface { };
export const UserModel: Model<UserModelInterface> = mongoose.models?.usuarios ?? mongoose.model<UserModelInterface>('usuarios', UserSchema, 'usuarios');