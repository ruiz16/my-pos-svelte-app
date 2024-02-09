
import type { _user } from "$lib/models/Usuario/Usuario";

// Type and store for the user data.
import type { Writable } from "svelte/store";
import { writable } from "svelte/store";

interface UserWithoutPassword extends Omit<_user, 'password'> { }

export const user: Writable<UserWithoutPassword | undefined> = writable(undefined);
export const displayUser: Writable<UserWithoutPassword | undefined> = writable(undefined);