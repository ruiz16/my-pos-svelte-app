import type { ObjectId } from "mongodb"

export interface User {
    _id: ObjectId,
    user: string,
    name: string,
    email: string,
    password: string,
    resetTimer: number | null | undefined,
    refreshToken: string | null | undefined,
}
export interface UserWithoutId extends Omit<User, '_id'> { }
export interface UserWithoutPassword extends Omit<User, 'password'> { }

