import { login_user } from '$/lib/server/functions/login';
import { SECRET_JWT_KEY } from '$env/static/private';
import { cookie_options } from "$lib/utils/utilities";

import type { Actions, RequestEvent, ActionFailure, Redirect } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';

import type { loginFormResponse } from './login';

export async function load({ cookies }) {
    const authToken = cookies.get('authToken');
    if (!authToken) { return { clearUser: true } }
    return { clearUser: false }
}

export const actions: Actions = {
    login: async ({ cookies, request }: RequestEvent): Promise<loginFormResponse | ActionFailure<loginFormResponse> | Redirect> => {

        const loginFormData = await request.formData();
        const user = loginFormData.get('user')?.toString().trim() ?? '';
        const password = loginFormData.get('password')?.toString().trim() ?? '';

        let loginResponse = {
            user,
            error: false,
            message: '',
        }

        const user_data = await login_user(user, password);

        if ("error" in user_data) {
            loginResponse.error = true;
            loginResponse.message = "usuario o contraseña incorrectos.";
        } else {
            const { user, token } = user_data;
            cookies.set('authToken', token, cookie_options);
            // Refresh token JWT.  Cookies event after login.
            const refreshToken = jwt.sign({ authedUser: user }, SECRET_JWT_KEY, { expiresIn: '120d' });
            cookies.set('refreshToken', refreshToken, { httpOnly: true, maxAge: 60 * 60 * 24 * 120, sameSite: 'strict', path: '/' });
            cookies.set("email", user.email, cookie_options);
            cookies.set("name", user.name, cookie_options);
            throw redirect(302, `/app/empresas/`)
        }

        return loginResponse

    },

}