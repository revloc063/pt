<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('TKE')" href="#" class="pure-menu-link">TKE</a></li>
      <li class="pure-menu-item"><a @click="select('THE')" href="#" class="pure-menu-link">THE</a></li>
      <li class="pure-menu-item"><a @click="select('Gen Wkns')" href="#" class="pure-menu-link">Gen Wkns</a></li>
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
