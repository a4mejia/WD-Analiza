import {computed, reactive } from "vue";
import myFetch from "@/services/myFetch";

const session = reactive ({
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
}
export const isLoading = computed(() => !! session.loading);

export interface User{
    name: string;
    email: string;
    password: string;
}
export function login(name: string, email: string, password: string) {
    session.user = {
    name,
    email,
    password,
};

}
export function logout(){
    session.user=null;
}
export interface User{
     firstName?: string;
     lastName?: string;
}
export interface Message {
    text: string;
    type: 'danger' | 'warning' | 'success' | 'info';
}