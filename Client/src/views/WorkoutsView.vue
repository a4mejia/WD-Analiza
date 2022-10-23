<script setup lang="ts">

</script>
<template>
    
    <br>
    <h1 class="title">My Activity</h1>
    <div class=" hero-body ">

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
    	<button class= " button is-success "> Add Workout</button>
    </form>
    </div>

    <div class="columns is-mobile is-centered">
  <div class="column is-three-fifths is-offset-one-fifth">
    <p class="bd-notification is-primary">
      <div class="columns">
        <div class=" columns is half is-offset-one-quarter">
            <div class="card">
  <div class="card-image">
    <figure class="image is-5by5">
      <img src="https://today.duke.edu/sites/default/files/styles/story_hero/public/Woman%20walking%20HERO.jpg?itok=qQNBOoHD" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-32x32">
          <img src="../picture.jpg" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-6">Analiza Mejia</p>
        <p class="subtitle is-6">@amejia</p>
      </div>
    </div>

    <div class="content">
     First post!! out on a walk! <a></a>
    <a href="#">#responsive</a>
      <br>
    </div>
  </div>
</div>
    </div>
    </div>
    <br>
</p>
</div>
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