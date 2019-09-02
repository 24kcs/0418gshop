// 包含了多个直接修改状态数据的方法的对象

// 引入常量名-----mutation的types
import { RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS } from './mutation-types.js'
export default {
  // 更新state中的地址信息
  [RECEIVE_ADDRESS](state, address) {
    state.address = address
  },
  // 更新state中的食品分类信息
  [RECEIVE_CATEGORYS](state, categorys) {
    state.categorys = categorys
  },
  // 更新state中的商铺列表信息
  [RECEIVE_SHOPS](state, shops) {
    state.shops = shops
  }
}
