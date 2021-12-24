import Vue from 'vue'
import VueRouter from 'vue-router'
import Creative from '@/views/Creative.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    meta: { title: "公司名称" },
    component: Creative
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Creative.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
