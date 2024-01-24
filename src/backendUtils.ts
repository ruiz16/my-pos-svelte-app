import type { Collection } from "mongodb";
import type { IUser, UserWithoutId, UserWithoutPassword } from "./types/user";
import type { registerFormData } from "./types/form";
import bcryptjs from 'bcryptjs';


export const returnAllUsers = async (collection: Collection) => {
    const Users = await collection.find().toArray();
    return Users
}

export const returnURLsList = async (collection: Collection): Promise<string[]> => {
    const projection = { URL: 1, _id: 0 }
    const users = await collection.find().project(projection).toArray();
    const userList: string[] = users.map((user) => user.URL)
    return userList.sort()
}

export const returnEmailsList = async (collection: Collection): Promise<string[]> => {
    const projection = { email: 1, _id: 0 }
    const users = await collection.find().project(projection).toArray();
    const emailList: string[] = users.map((user) => user.email.toString())
    return emailList
}

export const registerUser = async (collection: Collection, user: UserWithoutId) => {
    const register = await collection.insertOne(user);
    return register
}

export const bulkAddUsers = async (collection: Collection, users: UserWithoutId[]) => {
    const register = await collection.insertMany(users);
    return register
}

export const deleteAll = async (collection: Collection) => {
    const deleteMany = await collection.deleteMany();
    return deleteMany
}

export const findUserById = async (collection: Collection) => {
    const Users = await collection.find().toArray();
    return Users
}

export const findUserByUser = async (collection: Collection, user: string) => {
    const User = await collection.find({ user: user }).toArray();
    return JSON.parse(JSON.stringify(User[0], (key, value) => key === "_id" ? value.toString(value) : value))
}

export const findUserByEmail = async (collection: Collection, email: string) => {
    const projection = { email: 1, firstName: 1, _id: 0 }
    const User = await collection.find({ email: email }).project(projection).toArray();
    return JSON.parse(JSON.stringify(User[0], (key, value) => key === "_id" ? value.toString(value) : value))
}

export const findUserByUserWithPassword = async (collection: Collection, user: string) => {
    const projection = { user: 1, _id: 0, password: 1, resetTimer: 1, email: 1, name: 1 }
    const User = await collection.find({ user: user }).project(projection).toArray();
    return JSON.parse(JSON.stringify(User[0], (key, value) => key === "_id" ? value.toString(value) : value))
}

export const updateUserPassword = async (collection: Collection, user: IUser) => {
    const result = await collection.findOneAndUpdate(
        { email: user.email },
        { $set: { resetTimer: undefined, password: user.password } },
    );
    return result
}

export const setResetTimer = async (collection: Collection, user: UserWithoutPassword) => {
    const result = await collection.findOneAndUpdate(
        { email: user.email },
        { $set: { resetTimer: user.resetTimer } },
    );
    return result
}

export const setRefreshToken = async (collection: Collection, user: UserWithoutPassword) => {
    const result = await collection.findOneAndUpdate(
        { email: user.email },
        { $set: { refreshToken: user.refreshToken } },
    );
    return result
}

export const CheckUserStyledPage = (url: string) => {
    const nonUserStyledRoutes = ['', '/', '/signup', '/login', 'resetPassword'];
    return !nonUserStyledRoutes.includes(url);
};

export const registerFormToUserWithoutId = async (form: registerFormData): Promise<UserWithoutId> => {
    const hashedPassword = await bcryptjs.hash(form.password.toString(), 12);
    const user = {
        user: form.urlChoice as string,
        name: form.firstName.toString(),
        email: form.email.toString(),
        password: hashedPassword,
        resetTimer: null,
        refreshToken: null
    }

    return user
}
