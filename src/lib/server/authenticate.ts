import jwt from "jsonwebtoken";
import { SECRET_KEY } from "$env/static/private";
import type { Cookies } from "@sveltejs/kit";

interface auth {
	[key: string]: string | jwt.JwtPayload
}

export function authenticate(cookies: Cookies): auth | undefined {
	let token = cookies.get("auth-token");
	if (!token) return undefined;
	try {
		const auth = jwt.verify(token, SECRET_KEY);
		if (!auth) return undefined;
		return auth as auth;
	} catch {
		return undefined;
	}
}
