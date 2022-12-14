<script setup lang="ts">

</script>
<template>
    <div>
        <form class="box" id="admin">
        
        <div class="field">
            <label class="label"> Frist Name </label>
            <div class="control">
                <input class="input" type="text" placeholder=" Firts name" >
            </div>
        </div>

        <div class="field">
            <label class="label">Last name</label>
            <div class="control">
                <input class="input" type="text" placeholder="last name" >
            </div>
        </div>

        <div class="field">
            <label class="label"> Handle</label>
            <div class="control">
                <input class="input" type="handle" placeholder="username" >
            </div>
        </div>

        <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <input class="input" type="email" placeholder="user@email.com">
            </div>
        </div>
        <div class="field">
            <label class="label"> Is Admin</label>
            <div class="control">
                <input class="input" type="text" placeholder="true or false">
            </div>
        </div>

        <div class="buttons">
        <RouterLink class="button is-light" to="/user" >
          save
        </RouterLink>
      </div>        
      
    </form>
    </div>
</template>

<style scoped>
</style>