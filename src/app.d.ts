/* eslint-disable no-unused-vars */
// See https://kit.svelte.dev/docs/types#app

import type { UserWithoutPassword } from "$/types/user";

// for information about these interfaces
declare global {
	namespace App {
		interface Error {
			code: number,
			message: string,
		}
		interface Locals {
			authedUser: UserWithoutPassword | undefined,
			user: { id: string; email: string; name: string; },
			auth: { id: string }
		}
		// interface PageData {}
		// interface Platform {}
	}
	
	type user = { id: string; email: string; name: string; };
	type auth = { id: string; };
}

export { };