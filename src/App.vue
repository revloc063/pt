<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/type">Type</router-link>
      <router-link to="/chart">Chart</router-link>
      <router-link to="/add">Add</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 50px;
  background-color: #3366ff;
}

nav a {
  font-weight: bold;
  color: #ffffff;
  padding: 20px;
  text-decoration: none;
}

</style>
