import type { RequestEvent } from '@sveltejs/kit';
import { userX } from '$/stores/User';
import { get } from 'svelte/store';

export const authenticateUser = (event: RequestEvent) => {
	// get the cookies from the request
	const { cookies } = event;
	const userToken = cookies.get('auth');

	// if the user token is not valid, return null
	// this is where you would check the user token against your database
	// to see if it is valid and return the user object
	if (userToken !== null) {
		const _user = get(userX);
		const user = {
			id: _user.cod_empresa,
			email: _user.email,
			type: 'Admin',
			name: _user.nombre
		};
		return user;
	}

	return null;
};
