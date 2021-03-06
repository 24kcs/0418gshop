// 引入ajax
import ajax from './ajax.js'
const BASE='/api'
// 1.根据经纬度获取位置详情
export const reqAddress = (longitude, latitude) => ajax(BASE+`/position/${latitude},${longitude}`)
// 2.获取食品分类列表
export const reqCategorys = () => ajax(BASE+`/index_category`)
// 3.根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax(BASE+`/shops`, { longitude, latitude })