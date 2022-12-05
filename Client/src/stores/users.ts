import { api } from "./session";

export function getUser(name: string){
    return api<User>;
}
export function updateUser(name: string, handle: string){
    return api
}
export function addUser(user: User){
    return api<User>(`user`, user);
}
export interface User{
    name: string
    handle: string
    email: string
    password: string
}