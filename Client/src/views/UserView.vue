<script setup lang="ts">
function admin(){

}
</script>

<template>

<nav class="breadcrumb is-centered" aria-label="breadcrumbs">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Users</a></li>
  </ul>
</nav>

    <div class=" hero-body">
    
      <h1 class="title ">Users:</h1>
      <table class="table is-bordered ">
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Handle</th>
            <th>Email</th>
            <th>Is Admin</th>
        </tr>
        <tr>
            <td> Analiza </td>
            <td>Mejia</td>
            <td>amejia</td>
            <td>"mejiaa12@newpaltz.edu"</td>
            <td>true</td>
        </tr>
        <tr>
            <td> Mark </td>
            <td>Mendosa</td>
            <td>mendosa.m</td>
            <td>"m@mendosa.com"</td>
            <td>false</td>
        </tr>
        <tr>
            <td> Sam</td>
            <td>Smith</td>
            <td>ssmith</td>
            <td>"s@smith.com"</td>
            <td>false</td>
        </tr>
     
      </table>
      <div class="buttons">
        <RouterLink class="button is-primary" to="/admin" >
          + Add User
        </RouterLink>
      </div>
     
    </div>
  </template>
  <style lang="scss">
.title, .td, .tr{
    display: -moz-grid-line;
    width: 150px;
    color: rgb(108, 177, 238);
  }
  .top, .is-bordered{
    color: rgb(68, 162, 243);
  }
  
</style>