<template>
  <div class="two">
    <h1>{{state.msg}}</h1>
  </div>
</template>

<script>
import {  } from '../components/testDemo.js'
import { reactive } from 'vue'
export default {
  name: 'two',
  setup() {
    const state = reactive({
      msg : 'twoasd'
    })
    return {
      state
    }
  },
};
</script>

<style scoped>
.two{
  text-align: center;
}
</style>
