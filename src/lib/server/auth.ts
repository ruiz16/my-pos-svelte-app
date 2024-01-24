import type { Cookies } from '@sveltejs/kit';
import jwt from "jsonwebtoken";

import { SECRET_KEY } from "$env/static/private";

// import { userX } from '$/stores/User';
// import { get } from 'svelte/store';

export const authenticateUser = (cookies: Cookies) => {
	// get the cookies from the request
	const userToken = cookies.get('auth');
	if (!userToken) return undefined;

	// if the user token is not valid, return null
	// this is where you would check the user token against your database
	// to see if it is valid and return the user object

	try {
		const auth = jwt.verify(userToken, SECRET_KEY);
		if (!auth) return undefined;
		return auth;
	} catch (error) {
		return undefined;
	}
	// if (userToken !== null) {
	// 	const _user = get(userX);
	// 	const user = {
	// 		id: _user.cod_empresa,
	// 		email: _user.email,
	// 		type: 'Admin',
	// 		name: _user.nombre
	// 	};
	// 	return user;
	// }
};
