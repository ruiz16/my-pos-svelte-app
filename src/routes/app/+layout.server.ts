import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {
    const token = cookies.get('authToken');
    const email = cookies.get('email');
    const name = cookies.get('name');
    if (!token) throw redirect(303, '/login');
    return { token, email, name };
};