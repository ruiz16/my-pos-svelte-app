import { sequence } from '@sveltejs/kit/hooks';
import { dbConn } from './dbConn';
import { findUserByUser } from './backendUtils';
import jwt, { type JwtPayload } from 'jsonwebtoken';
import { SECRET_KEY } from '$env/static/private';

//@ts-ignore
async function firstHandle({ event, resolve }) {
	// console.log('first handle');
	//event.locals = "I went through the first load!"
	const authToken = event.cookies.get('authToken');
	try {
		if (!authToken) event.locals.authedUser = undefined;

		const claims = jwt.verify(authToken, SECRET_KEY) as JwtPayload;
		if (!claims) event.locals.authedUser = undefined;

		if (authToken && claims) {
			const db = await dbConn();
			const collection = db.collection('usuarios');
			const fullUser = await findUserByUser(collection, claims.authedUser.user);
			// eslint-disable-next-line no-unused-vars
			const { password, ...userMinusPassword } = fullUser;
			event.locals.authedUser = userMinusPassword;

		}
	}
	finally {
		const response = await resolve(event);
		// eslint-disable-next-line no-unsafe-finally
		return response;
	}
}

//@ts-ignore
async function secondHandle({ event, resolve }) {
	// console.log('second handle');
	if (!event.locals.authedUser) {
		const refreshToken = event.cookies.get('refreshToken');
		try {
			if (!refreshToken) event.locals.authedUser = undefined;

			const claims = jwt.verify(refreshToken, SECRET_KEY) as JwtPayload;
			if (!claims) event.locals.authedUser = undefined;

			if (refreshToken && claims) {
				const db = await dbConn();
				const collection = db.collection('usuarios');
				const fullUser = await findUserByUser(collection, claims.authedUser.user);
				// eslint-disable-next-line no-unused-vars
				const { password, ...userMinusPassword } = fullUser;
				event.locals.authedUser = userMinusPassword;

				if (!event.cookies.get('authToken')) {
					// Generar y configurar el nuevo authToken
					const authToken = jwt.sign({ authedUser: userMinusPassword }, SECRET_KEY, { expiresIn: 10 });
					event.cookies.set('authToken', authToken, { httpOnly: true, maxAge: 60 * 60 * 24, sameSite: 'strict' });
				}
			}
		}
		finally {
			// Resolver el evento después de configurar la cookie
			const response = await resolve(event);
			// eslint-disable-next-line no-unsafe-finally
			return response;
		}
	}

	// Si ya hay authedUser, resolver el evento directamente
	if (event.locals) {
		const response = await resolve(event);
		return response;
	}
}

export const handle = sequence(firstHandle, secondHandle);