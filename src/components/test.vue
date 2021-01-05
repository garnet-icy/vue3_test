<template>
  <code>{{state.title}}</code>
  <button @click="setMsg">set msg</button>
</template>
<script>
import {reactive} from 'vue'
export default {
  name: 'test',
  props:{
    msg:{
      type:String,
      required:true
    }
  },
  setup() {
    const state = reactive({
      title:'sfsdf'
    })
    function setMsg(){
      state.title+= 'title changed'
    }
    return {
      state,
      setMsg,
    }
  },
};
</script>

<style scoped>

</style>
