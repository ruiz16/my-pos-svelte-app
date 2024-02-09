// eslint-disable-next-line no-unused-vars
interface UserModelInterface {
    user: string,
    name: string,
    email: string,
    password: string,
    resetTimer: number | null | undefined,
    refreshToken?: string | null | undefined,
};