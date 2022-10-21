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
   
    <h1 class="title"> Breakfast </h1>
    <h2 class="title"> Lunch </h2>
    <h3 class="title"> Dinner </h3>

</template>