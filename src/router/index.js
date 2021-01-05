import {createRouter, createWebHistory} from "vue-router"
import One from "../views/one/index"
import Two from "../views/two/index"


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: One
    },
    {
      path: '/two',
      component: Two
    }
  ]
})



export default router