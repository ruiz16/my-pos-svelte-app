/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {
    const token = cookies.get('authToken');
    const email = cookies.get('email');
    const name = cookies.get('name');
    return { token, email, name };
};