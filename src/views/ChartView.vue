<template>
<div>
  <ChartContents :chart="chart" />
</div>
</template>

<script>
import ChartContents from "../components/ChartContents.vue"
export default {
  name: 'ChartView',
  components: {
    ChartContents
  },
  data() {
    return {
    }
  },
  computed: {
    chart() {
      return this.$root.$data.chart;
    }
  },
}
</script>
