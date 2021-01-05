<template>
  <Header/>
  <Content/>
  <app-main/>
</template>

<script>
import Header from './components/header/index'
import sidebar from './components/sidebar/index'
import appMain from './components/app-main'
export default {
  name: '',
  components:{
    Header,
    Content,
    appMain
  },
  setup() {
  },
};
</script>

<style scoped>

</style>
