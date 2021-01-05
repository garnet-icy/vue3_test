<template>
  <code>{{msg}}</code>
  <h1>{{state.count}}{{num}}</h1>
  <button @click="add" ref="nodes">add</button>
</template>

<script>
import { reactive, computed, getCurrentInstance, onMounted, ref } from 'vue'
export default {
  name: 'HelloWorld',
  props:{
    msg:{
      type:String,
      require:true,
    }
  },
  setup(){
    //reactive 生成双向绑定的数据
    const state = reactive({
      count: 81,
      double: computed(() => state.count + 1)
    })
    // let num = 34
    let num = ref(34)
    const {ctx} = getCurrentInstance();
    function add() {
      ctx.state.count++
      num.value++
    }
    onMounted(()=>{

    })
    return {
      state,
      num,
      add
    }
  },
}
</script>
<style scoped>
div{
  text-align: center;
}
</style>
