// 引入ajax
import ajax from './ajax.js'
const BASE = '/api'
// 1.根据经纬度获取位置详情
export const reqAddress = (longitude, latitude) => ajax(BASE + `/position/${latitude},${longitude}`)
// 2.获取食品分类列表
export const reqCategorys = () => ajax(BASE + `/index_category`)
// 3.根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax(BASE + `/shops`, { longitude, latitude })
// 4.发送短信验证码
export const reqSendCode = (phone) => ajax(BASE + `/sendcode`, { phone })
// 5.根据手机号码和验证码进行登录---POST
export const reqSmsLogin = (phone, code) => ajax(BASE + `/login_sms`, { phone, code }, 'POST')
// 6.根据用户名/密码/图形验证码登录---POST
export const reqPwdLogin = ({ name, pwd, captcha }) => ajax(BASE + `/login_pwd`, { name, pwd, captcha }, 'POST')
// 7.自动登录的功能
export const reqUserInfo = () => ajax(BASE + `/userinfo`)
// 8.退出操作
export const reqLoginOut = () => ajax(BASE + `/logout`)