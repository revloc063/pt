<template>
<div class="wrapper">
  <div class="exercises">
    <div class="exercise" v-for="exercise in exercises" :key="exercise.id">
      <div class="info">
        <h1>{{exercise.name}}</h1>
        <p>{{exercise.abb}}</p>
      </div>
      <div class="duration">
        <h2>{{exercise.duration}}</h2>
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

</style>
