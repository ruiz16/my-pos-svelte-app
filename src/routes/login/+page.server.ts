import type { Actions, RequestEvent, ActionFailure, Redirect } from '@sveltejs/kit';
// import { redirect } from '@sveltejs/kit';
import type { loginFormResponse } from '../../types/form';
// import { findUserByUserWithPassword } from "../../backendUtils";
// import { SECRET_KEY } from '$env/static/private';
// import jwt from 'jsonwebtoken';
import { login_user } from '$/lib/server/functions/login';

export async function load({ cookies }) {
    const authToken = cookies.get('authToken');
    if (!authToken) return { clearUser: true }
    return { clearUser: false }
}

export const actions: Actions = {
    // eslint-disable-next-line no-unused-vars
    login: async ({ cookies, request }: RequestEvent): Promise<loginFormResponse | ActionFailure<loginFormResponse> | Redirect> => {

        const loginFormData = await request.formData();
        const user = loginFormData.get('user')?.toString().trim() ?? '';
        const password = loginFormData.get('password')?.toString().trim() ?? '';

        let loginResponse = {
            user,
            error: false,
            message: '',
        }

        try {

            const user_data = await login_user(user, password);
            console.log(user_data);

            // // const userAttemptingLogin = await findUserByUserWithPassword(collection, user);
            // // const authAttempt = password === userAttemptingLogin.password;

            // if (!authAttempt) {
            //     loginResponse.error = true;
            //     loginResponse.message = "usuario o contraseña incorrectos.";
            // }

            // if (authAttempt) {
            //     // eslint-disable-next-line no-unused-vars
            //     const { password, ...userAttemptingLoginMinusPassword } = userAttemptingLogin;
            //     const authToken = jwt.sign({ authedUser: userAttemptingLoginMinusPassword }, SECRET_KEY, { expiresIn: 10 });
            //     cookies.set('authToken', authToken, { httpOnly: true, maxAge: 60 * 60 * 24, sameSite: 'strict' });
            //     const refreshToken = jwt.sign({ authedUser: userAttemptingLoginMinusPassword }, SECRET_KEY, { expiresIn: '120d' });
            //     cookies.set('refreshToken', refreshToken, { httpOnly: true, maxAge: 60 * 60 * 24 * 120, sameSite: 'strict' });
            //     cookies.set("email", userAttemptingLogin.email, { httpOnly: true, maxAge: 60 * 60 * 24, sameSite: 'strict' });
            //     cookies.set("name", userAttemptingLogin.name, { httpOnly: true, maxAge: 60 * 60 * 24, sameSite: 'strict' });

            //     throw redirect(302, `/app/empresas/`)
            // }
        }
        finally { /* empty */ }
        return loginResponse

    },

}