<template>
  <div>
    <h1>{{state.count}}</h1>
    <button @click="add()">add</button>
    <Son ref="son"/>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import Son from "./son"
export default {
  name: 'HelloWorld',
  setup(){
    //reactive 生成双向绑定的数据
    const state = reactive({
      count: 81,
      son:'son',
      double: computed(() => state.count * 2)
    })
    function add() {
      state.count = Math.sqrt(state.count)
    }
    return {
      state,
      add
    }
  },
  components:{
    Son,
  }
}
</script>
<style scoped>
div{
  text-align: center;
}
</style>
