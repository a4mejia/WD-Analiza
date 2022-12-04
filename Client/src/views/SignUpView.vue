<script setup lang="ts">
import { login } from '@/stores/session';
import { ref } from 'vue';

const email = ref('');
const password = ref ('');
const name= ref('');

</script>
<template>
    <div>
    <form class="box" @submit.prevent="login(name, email)">
        
        <div class="field">
            <label class="label"> Name </label>
            <div class="control">
                <input class="input" type="text" placeholder=" Firts & Last name" v-model="name">
            </div>
        </div>

        <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <input class="input" type="email" placeholder="e.g name@example.com" v-model="email">
            </div>
        </div>

        <div class="field">
            <label class="label">confirm email</label>
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
        <div class="field">
            <label class="label">Cornfirm Password</label>
            <div class="control">
                <input class="input" type="password" placeholder="Password" v-model="password">
            </div>
        </div>
        <button class="button is-primary">Sign in</button>
        </form>
    </div>
</template>

<style scoped>
</style>