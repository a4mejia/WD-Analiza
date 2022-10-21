
<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from 'vue-router';
import LoginBadge from '../LoginBadge.vue';

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
        <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
            Workouts
        </a>
        <div class="navbar-dropdown">
          <router-link class="navbar-item" to="/currentworkouts">
            My Workouts
          </router-link>
          <router-link class="navbar-item" to="/pastworkouts">
            Past Workouts
          </router-link>
        </div>
      </div>

 

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
            <hr class="navbar-divider">
            <a class="navbar-item">
              Report an issue
            </a>
          </div>
        </div>
        <a class="navbar-item">
              Statistics
            </a>
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