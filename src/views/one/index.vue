<template>
  <div class="header">
    <router-link to="/two">to two</router-link>
    asdsadhsakhfkj
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'one',
  setup() {
    const state = reactive({
      routes : [
        {
          name:'one',
          originPath:'/one'
        },
        {
          name:'two',
          originPath:'/two'
        }
      ]
    })
    return {
      state
    }
  },
};
</script>

<style scoped>
.header{
  width:100%;
  height: 50px;
  position: relative;
}
.routers{
  text-align: right;
  padding-right: 20%;
}
.router{
  /* line-height: 50px; */
  display: inline-block;
  width:50px;
  height: 25px;
  text-align: center;
  margin-right: 20px;
  font-weight: 500;
  font-size: 16px;
  margin-top:17px;
  color: aliceblue;
}
</style>
