@@ -0,0 +1,27 @@
<script setup lang="ts">
    import session, { login } from '../stores/session'
    import { ref } from 'vue';

    const handle=ref('');
    const password = ref ('');
    
</script>

<template>
<div class="buttons" v-if="session.user == null">
       
    <div class="dropdown is-active">
        <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                <router-link to="/login">Log in</router-link>
            </button>
 
        </div>

    </div>
  
</div>
</template>


<style scoped>

</style>