import { redirect } from '@sveltejs/kit';

export function load({ cookies }) {
    cookies.delete("authToken");
    cookies.delete("refreshToken");
    cookies.delete("email");
    cookies.delete("name");
    throw redirect(301, '/login')
}