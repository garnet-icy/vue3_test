<template>
<h1>{{state.msg}}</h1>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'two',
  setup() {
    const state = reactive({
      msg : 'two'
    })
    return {
      state
    }
  },
};
</script>

<style scoped>

</style>
