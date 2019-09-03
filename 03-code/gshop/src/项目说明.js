// 1. vue init webpack gshop 通过脚手架2下载对应的webpack 项目(eslint)

// 2. 干掉src中所有内容(main.js,App.vue)保留

// 3. 创建对应的目录(整个项目都会用到的目录)

// 4.下载对应的插件,vue-router,stylus,stylus-loader,---------------swiper,axios

// 5. 拆分组件,搭建界面,搭建路由,实现界面展示

// api目录:里面就是ajax相关的代码,index.js--根据接口发送请求的js代码,ajax.js--封装后的ajax代码
// common目录:公共的静态资源,如:mixins.styl文件
// components目录:普通组件
// filter目录:格式化(过滤器相关)的代码
// mock目录:mock.js相关的js代码
// pages目录:路由组件
// router目录:配置路由的
// store目录:vuex状态管理数据的相关代码

/**
 * common目录中stylus目录---mixins.styl----混合
 * static目录css目录----reset.css重置样式的文件,iconfont.css图标字体的样式文件(直接引入,也可以通过在线的方式引入)----static目录中的reset.css文件在index.html中引入,图标字体在线引入也在该文件中
 * index.html文件中,移动端的代码,两个样式,解决延迟的问题的代码
 * 总结:
 * index.html中4个操作:
 * 1.meta标签
 * 2.重置样式
 * 3.图标字体
 * 4.解决移动端延迟.3s的js代码
 * 需要安装的插件:
 * vue-router stylus stylus-loader 目前这些已经安装过了
 *  axios swiper vuex 后面继续安装
 * common目录中---stylus目录---mixins.styl混合
 * 在components目录----FooterGuide目录---FooterGuide.vue组件----底部导航的
 * 在App.vue中引入FooterGuide.vue组件,注册,并使用
 * 在pages目录中创建四个目录---是路由组件
 * MSite目录---MSite.vue
 * Search目录---Search.vue
 * Order目录---Order.vue
 * Profile目录---Profile.vue
 * 以上总结:点击FooterGuide.vue组件中相关的链接就会跳转到指定的路由组件界面(上面的)
 * 2.在FooterGUide.vue中,为每个a标签添加了动态的类样式
 * :class="{'on':$route.path==='/msite'}" @click="goto('/msite')" 四个
 * 在methods:{
 *  goto(path){
 *    使用的是replace方法跳转------编程式路由
 *  }
 * }
 * 在router目录中的index.js中配置路由对象,在routes.js中配置所有的路由,并且设定重定向,去main.js中注册路由器
 * 
 * 
 * 
 * 
 * 脚手架3的东西:
 * vue create 项目名 -----下载项目
 * npm run build 打包
 * serve dist 运行打包
 * 如何把脚手架2的东西放在脚手架3中
 * 脚手架2中的index.html---放在脚手架3中的public目录中
 * 脚手架2中的static目录中的cs目录放在脚手架3中的public目录(别忘记修改index.html中引入文件的路径)
 * 脚手架2中的src目录中所有的内容扔进脚手架3中的src目录中
 * 在脚手架3中安装相关的包
 * npm install stylus stylus-loader vue-router swiper axios vuex
 * 
 * 脚手架2中启动项目: npm start
 * 脚手架3中启动项目: npm run serve /  yarn serve
 * 
 * 脚手架2或者脚手架3中的依赖的包中都是使用的是vue.runtime.esm.js文件
 * 但是在脚手架2中的build目录中的webpack.base.conf.js文件中重新的配置了访问vue文件的路径的文件(vue.esm.js)这个文件
 * 脚手架3中没有配置过vue.esm.js文件,那么此时如果使用了vue了(import Vue from 'vue')默认就去找vue.runtime.esm.js
 */
