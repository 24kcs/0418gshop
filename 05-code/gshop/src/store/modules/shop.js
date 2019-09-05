// 引入常量名-----mutation的types
import { RECEIVE_GOODS, RECEIVE_RATINGS, RECEIVE_INFO, ADD_FOOD_COUNT, REDUCE_FOOD_COUNT } from '../mutation-types.js'
// 引入api的相关接口
import { reqGoods, reqRatings, reqInfo } from '../../api'
import Vue from 'vue'
const state = {

  // 点餐的数据 
  goods: [],
  // 评价的数据
  ratings: [],
  // 商家的数据
  info: {},
  // 数组--保存的是食物对象----购物车中的数组
  foodArr:[]
}
const mutations = {
  // 更新点餐的数据
  [RECEIVE_GOODS](state, { goods }) {
    state.goods = goods
  },
  // 更新评价的数据
  [RECEIVE_RATINGS](state, { ratings }) {
    state.ratings = ratings
  },
  // 更新商家的数据
  [RECEIVE_INFO](state, { info }) {
    state.info = info
  },

  // 增加food的count
  [ADD_FOOD_COUNT](state, { food }) {
    // 判断当前的count是否有值
    if (!food.count) {
      // 没有值
      //food.count = 1
      //向响应式对象中添加一个属性，并确保这个新属性同样是响应式的，且触发视图更新
      Vue.set(food,'count',1)
      // 把当前的food对象添加到数组中
      state.foodArr.push(food)
    } else {
      // 有值
      food.count++
    }
  },

  // 减少food的count
  [REDUCE_FOOD_COUNT](state, { food }) {
    // 如果count的值大于0可以减
    if (food.count > 0) {
      food.count--
      // 判读当前的食物的数量是不是0,才移除这个食物
      if(food.count===0){
        // 删除
        state.foodArr.splice(state.foodArr.indexOf(food),1)
      }
    }
  }
}
const actions = {

  // 发送请求,获取点餐的数据(食物的分类及食物信息)
  async getGoods({ commit }) {
    const result = await reqGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, { goods })
    }
  },
  // 发送请求,获取评价的数据()
  async getRatings({ commit }) {
    const result = await reqRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, { ratings })
    }
  },
  // 发送请求,获取商家的数据
  async getInfo({ commit }) {
    const result = await reqInfo()
    if (result.code === 0) {
      const info = result.data
      commit(RECEIVE_INFO, { info })
    }
  },



  // 更新food的count属性
  updateFoodCount({ commit }, { isAdd, food }) {
    // 判断isAdd是true还是false,true--增加,false--减少
    if (isAdd) {
      // 增加
      commit(ADD_FOOD_COUNT, { food }) // --->mutation-SVGUnitTypes.js文件中
    } else {
      // 减少
      commit(REDUCE_FOOD_COUNT, { food })
    }
  }
}
const getters = {}


export default {
  state,
  mutations,
  actions,
  getters
}