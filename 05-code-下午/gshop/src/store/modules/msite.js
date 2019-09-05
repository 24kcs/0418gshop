// 引入常量名-----mutation的types
import { RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS } from '../mutation-types.js'
import { reqAddress, reqCategorys, reqShops } from '../../api'
const state = {
  // 经度
  longitude: '116.36867',
  // 纬度
  latitude: '40.10038',
  // 地址信息对象
  address: {},
  // 食品分类数组
  categorys: [],
  // 商铺信息数组
  shops: [],
}
const mutations = {
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
  },
}
const actions = {
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
  async getCategorys({ commit }, fn) {
    const result = await reqCategorys()
    if (result.code === 0) {
      // 食品分类的数组
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, categorys)
      typeof fn === 'function' && fn()
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

  // xxx() {
  //   console.log('我是msite模块中的xxx方法')
  // }
}
const getters = {}


export default {
  state,
  mutations,
  actions,
  getters
}