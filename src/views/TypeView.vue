<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('TKA')" href="#" class="pure-menu-link">Total Knee Replacement (TKA)</a></li>
      <li class="pure-menu-item"><a @click="select('THA')" href="#" class="pure-menu-link">Total Hip Replacement (THA)</a></li>
      <li class="pure-menu-item"><a @click="select('Gen wkns')" href="#" class="pure-menu-link">General Weakness</a></li>
    </ul>
  </div>
  <ExerciseList :exercises="exercises" />
</div>
</template>

<script>
import ExerciseList from "../components/ExerciseList.vue"
export default {
  name: 'TypeView',
  components: {
    ExerciseList
  },
  data() {
    return {
      type: '',
    }
  },
  computed: {
    exercises() {
      return this.$root.$data.exercises.filter(exercise => exercise.type === this.type);
    }
  },
  methods: {
    select(type) {
      this.type = type;
    }
  }
}
</script>

<style scoped>
li {
  list-style-type: none;
  display: inline-block;
  padding: 20px;
}
a {
  text-decoration: none;
}
a:visited {
  color: #3366ff;
}

</style>
