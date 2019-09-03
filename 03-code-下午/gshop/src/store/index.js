// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 引入相关的配置对象
import state from './state.js'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
Vue.use(Vuex)
// 向外暴露store对象
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})