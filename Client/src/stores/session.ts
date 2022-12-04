import {computed, reactive } from "vue";


const session = reactive ({
    user: null as User | null,
});
 
export function login(firstName: string, lastName: string) {
  session.user = {
    firstName,
    lastName,
};

}
export function logout(){
    session.user=null;
}
export interface User{
     firstName?: string;
     lastName?: string;
}
export default session;