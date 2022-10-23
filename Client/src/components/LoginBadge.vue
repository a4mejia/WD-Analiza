@@ -0,0 +1,27 @@
<script setup lang="ts">
    import session, { login, logout } from '../stores/session'

</script>

<template>
    <div class="buttons" v-if="session.user == null">
        <a class="button is-primary">
            <strong>Sign up</strong>
        </a>
<div class="dropdown is-active">
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
        <span>Log in</span>
    </button>
    </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
            <a class="dropdown-item" @click="login('Analiza', 'Mejia')">
                Analiza Mejia
            </a>
            <a class="dropdown-item" @click="login('Sam', 'Smith')">
                Sam Smith
            </a> 
            <a class="dropdown-item" @click="login('Ana', 'Bonilla')">
               Mark Mendosa
            </a> 
            </div>
        </div>
    </div>
  
</div>
   
  
    <div v-else>
        Welcome {{session.user.firstName}} {{session.user.lastName}}
        (<a @click="logout()">
            Log out
        </a>)
    </div>

</template>


<style scoped>

</style>