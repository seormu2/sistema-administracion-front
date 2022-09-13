export interface User {
    id       : string,
    username : string,
    token    : string

}

export interface AccessOk {
    data: User,
    message: string,
    status: number
}