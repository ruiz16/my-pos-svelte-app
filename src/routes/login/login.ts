/* eslint-disable no-undef */

export interface loginFormData {
    email: FormDataEntryValue,
    password: FormDataEntryValue,
    [key: string]: any
}

export interface loginFormResponse extends Omit<loginFormData, 'password'> {
    error: boolean,
    message: string,
}