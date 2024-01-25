import mongoose, { Model } from "mongoose";
const { Schema } = mongoose;

export type UserModelType = {
	_id: string;
	user: string,
	name: string,
	email: string,
	password: string,
	resetTimer: number | null | undefined,
	refreshToken: string | null | undefined,
};

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

export const UserModel: Model<UserModelType> = mongoose.models.usuarios ?? mongoose.model<UserModelType>('usuarios', UserSchema, 'usuarios');
UserModel.createIndexes();
