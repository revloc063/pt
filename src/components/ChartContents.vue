<template>
<div class="wrapper">
  <div class="chart">
    <div class="task" v-for="task in chart" :key="task.id">
      <div class="info">
        <h1>{{task.abb}}</h1>
      </div>
      <div class="info">
        <p>{{task.tips}}</p>
        <p>{{task.duration}}</p>
      </div>
      <button class="auto" v-on:click="deleteTask(task)">Remove</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ChartContents',
  props: {
    chart: Array
  },
  methods: {
    deleteTask(task) {
    var index = this.$root.$data.chart.indexOf(task);
    if (index > -1)
      this.$root.$data.chart.splice(index,1);
    }
  }
}
</script>

<style scoped>
button {
  margin: 20px;
  padding: 10px;
  border: 2px solid #809fff;
  background-color: #99b3ff;
  color: #ffffff;
}
</style>
