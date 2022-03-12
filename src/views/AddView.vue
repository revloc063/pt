<template>
<div>
  <form @submit.prevent="addToList">
    <input v-model="add.name" placeHolder="Name"/> <br/>
    <input v-model="add.abb" placeHolder="Abbreviation"/> <br/>
    <input v-model="add.type" placeHolder="Type (TKA, THA, Gen wkns)"/> <br/>
    <input v-model="add.duration" placeHolder="Duration"/> <br/>
    <input v-model="add.tips" placeHolder="Tips"/> <br/>
    <button type="submit">Submit</button> <br/>
  </form>
</div>
</template>

<script>
export default {
  name: 'AddView',
  data() {
    return {
      add: {},
    }
  },
  methods: {
    addToList() {
      console.log(this.$root.$data.exercises.length);
      this.add.id = this.$root.$data.exercises.length + 1;
      var currNew = this.add;
      console.log(currNew);
      this.$root.$data.exercises.push(currNew);

    },
  },
}
</script>
