import { authenticate } from "$lib/server/authenticate";
import { redirect, type Handle } from "@sveltejs/kit";
import { dbConnect } from "$lib/utils/db";

await dbConnect();

export const handle: Handle = async ({ event, resolve }) => {

	const is_protected = event.url.pathname.startsWith("/app")
	const auth = authenticate(event.cookies);

	if (is_protected && !auth) {
		event.cookies.delete("email");
		event.cookies.delete("name");
		throw redirect(307, "/login");
	}

	const response = await resolve(event);
	return response;
};