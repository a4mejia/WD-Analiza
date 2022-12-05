<script setup lang="ts">

import session, { api,login } from '@/stores/session';
import { ref, watch } from 'vue';
import {useRoute, useRouter} from "vue-router";

import {addUser, getUser, updateUser, type User} from "@/stores/users";

const email = ref('');
const password = ref ('');
const name= ref('');

const route = useRoute();
const router= useRouter();

const user = ref({} as User);
const isNew = ref(route.params.name=='new')


if(!isNew.value){
        getUser(route.params.id as string).then( x => {
            if(x){
                user.value = x            
            }else{
                isNew.value = true;
            }
        });        
    }
async function save(){
        try {
            if(isNew.value){
                const data =  addUser(user.value);
                session.messages.push({ type: "success", text: `Successfully inserted ${data.name}`})
            }else{
                const data =  updateUser(user.value.handle, user.value.name);
                session.messages.push({ type: "success", text: `Successfully updated ${data.name}`})
            }
             router.push({ name: 'admin_products' });
        } catch (error) {
            //setError(error as string); being set in the api function
        }
    }

   async function cancel() {
     router.push({ name: 'admin_products' });    
   } 
   
   const isTenorSearchOpen = ref(false);
   const tenorSearch = ref('');
   const tenorResults = ref([] as any[]);

  /* 
   watch(tenorSearch, async () => {
       if(tenorSearch.value.length > 2){
        const data = await fetch(`https://tenor.googleapis.com/v2/search?q=${tenorSearch.value}&key=${import.meta.env.VITE_TENOR_API_KEY}&limit=8`)
                            .then(x=> x.json())
        console.log({ data });
        tenorResults.value = data.results;
       }
    });
*/
</script>
<template>
    <div>
    <form class="box" @submit.prevent="login(name,user, email, password)">
        
        <div class="field">
            <label class="label"> Name </label>
            <div class="control">
                <input class="input" type="text" placeholder=" Firts & Last name" v-model="name">
            </div>
        </div>

        <div class="field">
            <label class="label">User handle</label>
            <div class="control">
                <input class="input" type="text" placeholder="e.g name@example.com" v-model="user">
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
       
        <button class="button is-primary">Sign up</button>
        </form>
    </div>
</template>

<style scoped>
</style>