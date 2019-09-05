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
// 引入商家Shop组件
import Shop from '../pages/Shop/Shop.vue'
// 引入Goods组件---点餐
import Goods from '../pages/Shop/Goods/Goods.vue'
// 引入Ratings组件--评价
import Ratings from '../pages/Shop/Ratings/Ratings.vue'
// 引入Info组件---商家信息
import Info from '../pages/Shop/Info/Info.vue'
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
    path:'/shop',
    component:Shop,
    children:[
      {
        path:'/shop/goods',
        component:Goods
      },
      {
        path:'/shop/ratings',
        component:Ratings
      },
      {
        path:'/shop/info',
        component:Info
      },
      {
        path:'/shop',
        redirect:'/shop/goods'
      }
    ]
  },
  {
    path: '/',
    redirect: '/msite'
  }
]
