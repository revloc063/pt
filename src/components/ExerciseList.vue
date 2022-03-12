<template>
<div class="wrapper">
  <div class="exercises">
    <div class="exercise" v-for="exercise in exercises" :key="exercise.id">
      <div class="info">
        <h1>{{exercise.name}} ({{exercise.abb}})</h1>
      </div>
      <div class="duration">
        <h3>{{exercise.duration}}</h3>
        <button class="auto" v-on:click="addExercise(exercise.id)">Add to Chart</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ExerciseList',
  props: {
    exercises: Array
  },
  methods: {
    addExercise(idNum) {
      var currExercise = this.$root.$data.exercises[idNum-1];
      this.$root.$data.chart.push(currExercise);
      console.log(this.$root.$data.chart);
    }
  }
}
</script>

<style scoped>
.exercises {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.exercise {
  width: 25%;
}
.duration {
  display: flex;
  justify-content: space-around;
}
button {
  margin: 20px;
  padding: 10px;
  border: 2px solid #809fff;
  background-color: #99b3ff;
  color: #ffffff;
}
</style>
