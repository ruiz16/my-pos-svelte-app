import type { ObjectId } from "mongodb"

export interface IUser {
    _id: ObjectId,
    user: string,
    name: string,
    email: string,
    password: string,
    resetTimer: number | null | undefined,
    refreshToken: string | null | undefined,
}
export interface UserWithoutId extends Omit<IUser, '_id'> { }
export interface UserWithoutPassword extends Omit<IUser, 'password'> { }

