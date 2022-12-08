<script setup lang="ts">
import { login } from '@/stores/session';
import { ref } from 'vue';

const email = ref('');
const password = ref ('');
const name= ref('');
const handle=ref('');

</script>
<template>
    <div>
    <form class="box" @submit.prevent="login(name, handle, email, password)">
        
        <div class="field">
            <label class="label">Username</label>
            <div class="control">
                <input class="input" type="handle" placeholder="username" v-model="handle">
            </div>
        </div>

        <div class="field">
            <label class="label">Password</label>
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