<script setup lang="ts">
import { reactive } from 'vue';

const food= reactive([
    {name:'Breakfast'},
    {name:'Lunch'}, 
    {name:'Dinner'},
    {name:'other'},  
  ])
</script>
<template>
   <div class="top hero-body">
    <h1 class="title"> Breakfast </h1>
    <h2 class="title"> Lunch </h2>
    <h3 class="title"> Dinner </h3>
  </div>
    

</template>
<style>
 .top{
    background-color: rgb(4, 21, 79);
  }
  .title{
    font-size: medium;
    color: rgb(141, 192, 237);

  }
  </style>