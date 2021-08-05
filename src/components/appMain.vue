<template>
  <div>
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
    };
  },
  methods:{
    key() {
      return this.$route.path
    }
  }
};
</script>

<style scoped>

</style>
