// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入路由器,并注册
import router from './router'
// 引入Header.vue组件,并注册成一个全局组件
import Header from './components/Header/Header.vue'
// 注册全局组件
Vue.component('Header', Header)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
