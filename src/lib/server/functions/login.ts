/* eslint-disable no-undef */

import jwt from "jsonwebtoken";

import { SECRET_JWT_KEY } from "$env/static/private";
import { email_regexp } from "$/lib/utils/utilities";
import { UserModel } from "$/lib/models/Usuario/Usuario";

export async function login_user(email: string, password: string): Promise<{ error: string } | { token: string; user: user }> {

	const user = await get_user(email, password);
	if ("error" in user) { return { error: user.error }; }

	const token = jwt.sign({ id: user.id }, SECRET_JWT_KEY);
	return { token, user };
}

async function get_user(email: string, password: string): Promise<{ error: string } | user> {

	if (!email) { return { error: "Email es requerido." }; }
	if (!email.match(email_regexp)) { return { error: "Ingrese un correo válido." }; }

	const user = await UserModel.findOne({ email });
	if (!user) { return { error: "Usuario no encontrado." }; }
	if (!password) { return { error: "Contraseña es requerida." }; }

	const password_is_correct = password === user.password;
	if (!password_is_correct) { return { error: "Contraseña no es la correcta." }; }

	const id = user._id.toString();
	const name = user.name;
	return { id, email, name };
}
