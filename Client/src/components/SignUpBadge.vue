<script setup lang="ts">

import {RouterLink} from 'vue-router';
import session,{ signUp , logout} from '@/stores/session';
import { ref } from 'vue';

const email = ref('');
const password = ref ('');
const name= ref('');
const handle=ref('');
</script>

<template>
    <div class="buttond" v-if="session.user==null">
        <button class="button is-primary">
            <router-link to="/signup" >Sign Up</router-link>
        </button>
    </div>
    <div v-else>
        Welcome {{session.user.handle}} 
        (<a @click="logout()">
            Log out
        </a>)
    </div>
</template>