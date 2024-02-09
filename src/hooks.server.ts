import { sequence } from '@sveltejs/kit/hooks';
import jwt, { type JwtPayload } from 'jsonwebtoken';
import { dbConnect } from "$db/connection";
import { UserModel } from "$/lib/models/Usuario/Usuario";
import { SECRET_JWT_KEY } from "$env/static/private";
import { cookie_options } from './lib/utils/utilities';

await dbConnect();

//@ts-ignore
async function firstHandle({ event, resolve }) {

	// Recuperar el authToken de las cookies y verificarlo
	const authToken = event.cookies.get('authToken');
	try {
		if (!authToken) {
			event.locals.authedUser = undefined;
			return;
		}

		const claims = jwt.verify(authToken, SECRET_JWT_KEY) as JwtPayload;
		if (!claims) event.locals.authedUser = undefined;

		if (authToken && claims) {
			const fullUser = await UserModel.findById(claims.id, { password: 0 });
			event.locals.authedUser = fullUser;
		}

	} catch (e) {
		if (e instanceof Error) {
			throw new Error(e.message);
		} else {
			throw new Error('Un error desconocido. <FirstHandleError>');
		}
	} finally {
		const response = await resolve(event);
		// eslint-disable-next-line no-unsafe-finally
		return response;
	}
}

//@ts-ignore
async function secondHandle({ event, resolve }) {

	// Si no hay un usuario autenticado, intentar autenticar con el refreshToken
	if (!event.locals.authedUser) {
		const refreshToken = event.cookies.get('refreshToken');
		try {

			if (!refreshToken) {
				event.locals.authedUser = undefined;
				return;
			}

			const claims = jwt.verify(refreshToken, SECRET_JWT_KEY) as JwtPayload;
			if (!claims) event.locals.authedUser = undefined;

			if (refreshToken && claims) {
				const fullUser = await UserModel.findById(claims.id, { password: 0 });
				event.locals.authedUser = fullUser;

				if (!event.cookies.get('authToken')) {
					// Generar y configurar el nuevo authToken si no existe (dependiendo del refresh)
					const authToken = jwt.sign({ authedUser: fullUser }, SECRET_JWT_KEY, { expiresIn: 10 });
					event.cookies.set('authToken', authToken, cookie_options);
				}
			}
		}
		catch (e) {
			if (e instanceof Error) {
				throw new Error(e.message);
			} else {
				throw new Error('Un error desconocido. <SecondHandleError>');
			}
		} finally {
			const response = await resolve(event);
			// eslint-disable-next-line no-unsafe-finally
			return response;
		}
	}

	if (event.locals) {
		const response = await resolve(event);
		return response;
	}
}

export const handle = sequence(firstHandle, secondHandle);



// export const handle: Handle = async ({ event, resolve }) => {

// 	const is_protected = event.url.pathname.startsWith("/app")
// 	const auth = authenticate(event.cookies);

// 	if (is_protected && !auth) {
// 		event.cookies.delete("email");
// 		event.cookies.delete("name");
// 		throw redirect(307, "/login");
// 	}

// 	const response = await resolve(event);
// 	return response;
// };