<template>
  <div class="header">
    <button @click="toOne">toOne</button>
  </div>
</template>

<script>
import { useRouter,useRoute} from "vue-router"
import test from "../../../views/composition/test.js"
export default {
  name: '',
  setup() {
    console.log(test);
    const route = useRoute
    const router = useRouter
    const toOne = function(){
      router.push({
        name:'one'
      })
    }
    return {}
  },
};


</script>

<style scoped>
</style>
