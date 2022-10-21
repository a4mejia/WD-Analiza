<script setup lang="ts"></script>

<template>

    <div class="top hero-body">
      <br>
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
            <td> Sam</td>
            <td>Smith</td>
            <td>ssmith</td>
            <td>"s@smith.com"</td>
            <td>false</td>
        </tr>
      </table>
      <button class="on-button">+ Add User</button>
    </div>
  </template>
  <style lang="scss">
.title, .td, .tr{
    display: -moz-grid-line;
    width: 150px;
    color: rgb(141, 192, 237);
  }
  .top, .is-bordered{
    color: rgb(141, 192, 237);
    background-color: rgb(4, 21, 79);
  }
  
</style>