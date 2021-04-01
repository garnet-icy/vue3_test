import {
  defineComponent, onBeforeMount, onMounted, onBeforeUpdate, onUpdated,
  onBeforeUnmount, onUnmounted, onErrorCaptured, onRenderTracked,
  onRenderTriggered
} from "vue";
export default defineComponent({
  beforeCreate() {
    console.log("----beforeCreate----");
  },
  created() {
    console.log("----created----");
  },
  setup() {
    console.log("----setup----");
  },
});