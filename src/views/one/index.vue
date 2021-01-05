<template>
<h1>{{state.msg}}</h1>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'one',
  setup() {
    const state = reactive({
      msg : 'one'
    })
    return {
      state
    }
  },
};
</script>

<style scoped>

</style>
