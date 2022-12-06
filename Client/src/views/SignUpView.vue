<script setup lang="ts">

import session, { api, signUp,isLoading, setError , newUser} from '@/stores/session';
import { ref } from 'vue';
import {useRoute, useRouter} from "vue-router";

import {addUser, getUser, updateUser, type User} from "@/stores/users";

const email = ref('');
const password = ref ('');
const name= ref('');
const handle= ref('');

const route = useRoute();
const router= useRouter();

const user = ref({} as User);
const isNew = ref(route.params.name=='new')

/*
if(!isNew.value){
        getUser(route.params.name as string).then( x => 
        {
            if(x){
                user.value = x            
            }
            else {
                isNew.value = true;
            }
        });        
    }
*/

async function save(){
        try {
            if(isNew.value){
                const data = await addUser(user.value);
                session.messages.push({ type: "success", text: `Successfully inserted ${data.name}`})
            }else{
                const data = await updateUser(user.value.handle, user.value.name);
                session.messages.push({ type: "success", text: `Successfully updated ${data.name}`})
            }
            await router.push({ name: 'admin_users' } );
        } catch (error) {
            //setError(error as string); being set in the api function
        }
    }

   async function cancel() {
     router.push({ name: 'admin_users' });    
   } 
   
</script>
<template>
    <div>
    <form class="box" @submit.prevent="signUp(name, handle, email, password,)">
        
        <div class="field">
            <label class="label"> Name </label>
            <div class="control">
                <input class="input" type="text" placeholder=" Firts & Last name" v-model="name">
            </div>
        </div>

        <div class="field">
            <label class="label">User handle</label>
            <div class="control">
                <input class="input" type="text" placeholder="username" v-model="handle">
            </div>
        </div>

        <div class="field">
            <label class="label"> Email</label>
            <div class="control">
                <input class="input" type="email" placeholder="e.g name@example.com" v-model="email">
            </div>
        </div>

        <div class="field">
            <label class="label">Password</label>
            <div class="control">
                <input class="input" type="password" placeholder="Password" v-model="password">
            </div>
        </div>
        <button @click="signUp(name, handle, email, password)">Sign up</button>
        </form>
    </div>
</template>

<style scoped>
</style>