<template>
<div class="wrapper">
  <div class="cart">
    <div class="task" v-for="task in chart" :key="task.id">
      <div class="info">
        <h1>{{task.name}}</h1>
        <p>{{}}</p>
      </div>
      <div class="price">
        <h2>{{}}</h2>
        <button class="auto" v-on:click="removeTask(task)">Remove</button>
      </div>
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
    removeTask(task) {
    var index = this.$root.$data.chart.indexOf(task);
    if (index > -1)
      this.$root.$data.chart.splice(index,1);
    }
  }
}
</script>
