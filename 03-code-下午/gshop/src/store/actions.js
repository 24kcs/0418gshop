// 包含了多个间接修改状态数据的方法的对象
// 引入常量名-----mutation的types
import { RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS,RESET_USER } from './mutation-types.js'
// 引入api的相关接口
import { reqAddress, reqCategorys, reqShops,reqLoginOut } from '../api'
export default {
  // 发送请求获取地址的信息,commit()更新
  async getAddress({ commit, state }) {
    const { longitude, latitude } = state
    const result = await reqAddress(longitude, latitude)
    // 判断
    if (result.code === 0) {
      const address = result.data
      // 提交更新数据
      commit(RECEIVE_ADDRESS, address)
    }
  },
  // 发送请求获取食品分类的信息,commit()更新
  async getCategorys({ commit },fn) {
    const result = await reqCategorys()
    if (result.code === 0) {
      // 食品分类的数组
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, categorys)
      typeof fn==='function'&&fn()
    }
  },
  // 发送请求获取商铺的信息,commit()更新
  async getShops({ commit, state }) {
    const { longitude, latitude } = state
    const result = await reqShops(longitude, latitude)
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, shops)
    }
  },

  // 发送请求干掉用户相关的信息----退出

  async resetUserInfo({commit}){
    const result=await reqLoginOut()
    if(result.code===0){
      // 成功退出了
      commit(RESET_USER)
    }
  }

}