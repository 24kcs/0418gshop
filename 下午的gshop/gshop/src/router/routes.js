// 引入对应的四个路由组件
// 引入外卖的路由组件
import MSite from '../pages/MSite/MSite.vue'
// 引入搜索的路由组件
import Search from '../pages/Search/Search.vue'
// 引入订单的路由组件
import Order from '../pages/Order/Order.vue'
// 引入我的的路由组件
import Profile from '../pages/Profile/Profile.vue'
// 引入登录的路由组件
import Login from '../pages/Login/Login.vue'
// 配置路由
export default [
  {
    path: '/msite',
    component: MSite,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    redirect: '/msite'
  }
]
