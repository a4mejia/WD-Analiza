import {computed, reactive } from "vue";
import myFetch from "@/services/myFetch";

const session = reactive ({
//    admin: 
    user: null as User | null,
    loading:0,
    error:null as string | null,
    messages: [] as Message[],
});
export default session;

export function setError(error: string | null) {
    session.error = error;
    if(error){
        session.messages.push({ type: 'danger', text: error});
    }
};
export const isLoading = computed(() => !! session.loading);

export async function api<T>(url: string, data: any = null, method?: string ){
    session.loading++;
    setError(null);
    try {
        return await myFetch<T>(url, data, method);
    } catch (error) {
        setError(error as string);
    }finally{
        session.loading--;
    }
    return {} as T;
};
export interface User{
    name: string;
    handle:string;
    email: string;
    password: string;
};
export interface AddUserInfo{
    firstname: string;
    lastname: string;
    handle:string;
    email: string;
};
export function addInfo(firstname:string, lastname:string, handle:string, email:string){
    session.user={
        firstname,
        lastname,
        handle,
        email
    }
}
export function login(name: string, handle:string, email: string, password: string){
    session.user= {
    name,
    handle,
    password,
    email,
}};
export function signUp(name: string, handle:string, email: string, password: string) {
    session.user = {
    name,
    email,
    handle,
    password,
}};
export function newUser(){
    session.user=null;
};
export function logout(){
    session.user=null;
};
export interface Message {
    text: string;
    type: 'danger' | 'warning' | 'success' | 'info';
};