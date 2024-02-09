import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies, locals }) {
    if (!locals.authedUser) throw redirect(303, '/login');
    const token = cookies.get('authToken');
    if (!token) throw redirect(303, '/login');
    return { token };
};