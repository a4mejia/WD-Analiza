
<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from 'vue-router';
import LoginBadge from '../LoginBadge.vue';
import SignUpBadge from '../SignUpBadge.vue';

let isActive = ref(false);
</script>

<template>
  
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="container">
    <div class="navbar-brand">
     
      <a :class="{'isActive':isActive}" @click= "isActive = !isActive"  role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{'isActive': isActive}">

      <div class="navbar-start">
        <router-link to="/" class="navbar-item" >
          Home
        </router-link>
        <router-link class="navbar-item" to="/workouts">
            My Workouts
        </router-link> 

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Intake
          </a>
          <div class="navbar-dropdown">
          <router-link class="navbar-item" to="/fluid">
            Fluids
          </router-link>
          <router-link class="navbar-item" to="/food">
            Food
          </router-link>
            
          </div>
        </div>

            <router-link class="navbar-item" to="/friend">
            Friend Activity
          </router-link>
          <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Admin
          </a>
          <div class="navbar-dropdown">
          <router-link class="navbar-item" to="/user">
            users
          </router-link>
          </div>
        </div>
      </div>


      <div class="navbar-end">
        <div class="navbar-item">
          <sign-up-badge></sign-up-badge>
          <login-badge></login-badge>
        </div>
      </div>
    </div>
    </div>
  </nav>

        
</template>
<style>
  .router-link-active{
    border-bottom: #aeffae 5px solid;
    
  }
</style>