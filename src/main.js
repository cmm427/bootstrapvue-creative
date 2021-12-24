import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "bootstrap/dist/js/bootstrap.bundle.js"
import "bootstrap-icons/font/bootstrap-icons.scss"

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : "default title"
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
