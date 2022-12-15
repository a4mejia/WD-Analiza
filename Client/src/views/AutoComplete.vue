<script setup lang="ts"> 
import { reactive,ref } from 'vue';
import {type User} from '../stores/users';
import vSelect from 'vue-select'

import 'vue-select/dist/vue-select.css';
import { api } from '@/stores/session';

const options=  ref([] as any[])
async function fetchOptions (Search: string){
    const results =await api.listdescription(users){users/search/$search}
}

</script>
<template>
    <select name="" id=""></select>

   <div>
    <div class="control container">
            <input class="input" type="text" placeholder="Search" v-model="search"  />
        </div>
    <v-select
      :options="User"
      append-to-body
    />
  </div>
  <div id="app">
  <h1> Search for friends</h1>
  <v-select :options="User" label="username"></v-select>
</div>
</template>

<style scoped>
</style>