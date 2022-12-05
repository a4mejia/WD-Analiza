import UserViewVue from "@/views/UserView.vue"
import { api } from "./session";

export function getUsers(id: string){
    return api<User>;
}
export interface User{
    name: string
    email: string
    password: string
}