<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
html,body{
  background: linear-gradient(217deg, #1ABC9C, rgba(255,0,0,0) 70.71%),
      linear-gradient(127deg, #F39C12, rgba(0,255,0,0) 70.71%),
      linear-gradient(336deg, #74a4d4, rgba(0,0,255,0));
  height: 100%;
  width: 100%;
  margin:0;
}
</style>
