<script setup lang="ts">

</script>
<template>
    <br>
    <h1 class="title">My Activity</h1>
    <div class="top hero-body ">

    <form id="form" action="on-click">
        <label> Workout type:
            <input type = "text" name  = "workout" maxlength = "100" />
        </label>
        <br>
        <label> Date Workout:
					<input type = "date" name  = "date_of_workout" />
		</label>
        <br>
        <label> Duration of Workout (in min):
            <input type = "text" name  = "workout" maxlength = "100" />
        </label>
        <br><br>
    	<button class="button is-success"> Add Workout</button>
    </form>
    </div>
</template>

<style>
.title{
font-size: medium;
}
.top{
    color: rgb(141, 192, 237);
    background-color: rgb(4, 21, 79);
  }
</style>