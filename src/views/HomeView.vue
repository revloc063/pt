<template>
<div>
  <ExerciseList :exercises="exercises" />
</div>
</template>

<script>
import ExerciseList from "../components/ExerciseList.vue"

export default {
  name: 'HomeView',
  components: {
    ExerciseList
  },
  data() {
    return {
    }
  },
  computed: {
    exercises() {
      return this.$root.$data.exercises;
    }
  },
}
</script>
