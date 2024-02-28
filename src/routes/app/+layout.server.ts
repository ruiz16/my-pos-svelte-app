import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies, locals }) {
    
    if (!locals.authedUser) {
        cookies.delete("authToken");
        cookies.delete("refreshToken");
        throw redirect(303, '/login');
    }

    const token = cookies.get('authToken');
    if (!token) {
        cookies.delete("authToken");
        cookies.delete("refreshToken");
        throw redirect(303, '/login');
    }

    return { token };
};