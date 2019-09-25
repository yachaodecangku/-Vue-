// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//引入样式
import "./assets/style/reset.css"
import "./assets/style/border.css"
import "./assets/style/iconfont.css"

import App from './App'
import router from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
import store from './store'
Vue.use(VueAwesomeSwiper)




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
