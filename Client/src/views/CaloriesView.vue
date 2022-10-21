
<script setup lang="ts">
import { reactive } from 'vue';

  const fluids =[
    {name:'water', oz: 16},
    {name:'juice', oz: 16},
    {name:'alcohol', oz: 16},
    {name:'other', oz: 16},

]
  const total= reactive([
    {name:'water', oz: 16, qty:1},
    {name:'juice', oz: 16, qty:1}, 
    {name:'alcohol', oz: 16, qty:1},
    {name:'other', oz: 16, qty:1},  
  ])
  function addToTotal(fluid: any){
      total.push({...fluid, qty:1});
  }
</script>

<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">

  <div class="top hero-body">
    <br>
    <h1 class="title">Fluid Intake:</h1>

    <ul>
      <li v-for="fluid in fluids" :key="fluid.name" @click="addToTotal(fluid)">
        <h3>{{fluid.name}}</h3>
        <em>{{fluid.oz}} oz</em>
      </li>
    </ul>
    <br><br>
    <h2 class="sub-title">Total amount:</h2>
    <br>
    <table class="is-bordered">
      <tr>
        <th>Fluids</th>
        <th>Amount</th>
        <th>Quantity</th>
       
      </tr>
      <tr v-for="fluid in total" :key ="fluid.name">
          <td>{{fluid.name}}</td>
          <td> {{fluid.oz}} oz</td>
          <td><input v-model="fluid.qty" /></td>
      </tr>
      <tr>
          <td colspan="3">Total</td>
        <td>{{ total.reduce((fluid) => fluid * fluid.qty, 0) }} oz</td>
      </tr>
    </table>
  </div>
</template>

<style lang="scss">
  ul{
    display: flex;
    li{
      width: 100px;
      padding: 5px;
      margin: 5px;
    }
  }
  .sub-title{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: large;
    
  }
  th{
    display: -moz-grid-line;
    width: 90px;
  }
  .top{
    color: aliceblue;
    background-color: rgb(136, 136, 136);
  }
</style>
