// 引入常量名-----mutation的types
import {  RECEIVE_USER, RESET_USER } from '../mutation-types.js'
import {  reqLoginOut } from '../../api'
const state={
   
  // 用户信息
  user:{},
}
const mutations={
  
  // 更新用户信息
  [RECEIVE_USER](state, user) {
    state.user = user
  },
  // 重置用户信息
  [RESET_USER](state) {
    state.user = {}
  },

}
const actions={
   // 发送请求干掉用户相关的信息----退出

   async resetUserInfo({ commit }) {
    const result = await reqLoginOut()
    if (result.code === 0) {
      // 成功退出了
      commit(RESET_USER)
    }
  },

}
const getters={}


export default {
  state,
  mutations,
  actions,
  getters
}