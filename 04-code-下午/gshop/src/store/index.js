// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 引入相关的配置对象
// import state from './state.js'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

// 引入模块的名字
import msite from './modules/msite.js'
import user from './modules/user.js'
import shop from './modules/shop.js'
Vue.use(Vuex)
// 向外暴露store对象
export default new Vuex.Store({
  mutations, // 总的mutations
  actions, // 总的actions
  getters, // 总的getters
  modules:{ // 存放多个模块
    msite, // 模块的名字
    user,
    shop
  }
})
// 总的state.模块的名字.对应的属性名--->该属性的值
// state.msite.xxx
// state.user.user