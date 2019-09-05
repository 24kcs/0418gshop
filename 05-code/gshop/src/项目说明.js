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
 * 
 * 
 * 
 * 登录的问题
 * 登录的方式,是通过loginWay属性判断,是什么登录!
 * 手机/验证码
 * 用户名/密码/图形验证码
 * vee-validate----表单验证的插件  @2.2.13版本---
 * 安装,引入,可以配置中文提示
 * 可以设置扩展方法,extend('方法的名字',配置内容)
 * 发送验证码的接口------并没有使用vuex
 * 手机和验证码登录的接口---并没有vuex-----post
 * 用户名和密码和验证码的接口---并没有使用vuex---post
 * 只要登录成功----获取到的是用户信息对象:{_id,phone}----手机登录/{_id,name}--用户名和密码的方式登录
 * 更新用户信息(登录成功,1跳转到profile组件中,并显示当前的用户名或者手机号码,2,在首页中也要显示用户名/手机号码)
 * 更新用户信息的操作:在vuex中的state中有user对象---用来保存用户信息的
 * 如果user对象有数据,证明,登录了,如果没有信息,没有登录
 * 
 * 实现自动登录效果:
 * 浏览器向服务器发送请求,并携带自己的cookie,但是,第一次携带的cookie中没有sId,如果登录成功了,携带用户的id,在服务器端,会创建session对象,并产生sid,创建一个cookie,并设置为持久化的cookie给当前的浏览器,此时的这个浏览器中的cookie是一个持久化的cooki,而且内部还存储了sid
 * 如果此时浏览器关闭了,下一次再打开浏览器,那么就会再次携带自己的cookie,这个cookie有sid,然后去服务器中进行匹配,发现服务器中有sid和当前的cookie中的sid是一样,那么此时可以直接把用户信息返回给浏览器
 * 此时浏览器中就有了当前的这个用户信息----对象
 * 就把当前获取到的这个对象更新到state中的用户对象user上,此时就可以实现自动登录了(首页中的用户信息就是从state中获取的,个人中心中的用户信息也是从state中获取的)
 * 
 * cookie:浏览器
 * 1.会话cookie,特点:浏览器关闭就没了,存储在内存中
 * 2.持久化的cookie,特点:超过有效期就没了,存储在文件中---硬盘
 * session:服务器,sid,可以创建cookie,但是一开始创建是一个会话cookie,如果希望是一个持久化的cookie,设置maxage
 * 
 * 错误信息:
 * 
 * JSON:是指定格式数据的字符串
 * JSON数据的组成:{}---JSON对象/[]---JSON数组
 * 数据:
 * JSON对象{}:{key1:value,key2:value}
 * JSON数组[]  :----->  [value1,value2,value3]
 * key:字符串
 * value:String,Number,Boolean,对象,数组
 * 
 * JSON的结构---后台
 * {name:'小明'}
 * {
 *    "goods":[1,2,3,4,5],
 *    "ratings":[],
 *    "namea":'小明2'
 * }
 * 前端开发人员: obj.goods
 * 
 * 
 * 
 * 
 * //转换数据
 * JSON.parse()
 * JSON.stringfy()
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * Mock:生成随机的数据,拦截ajax请求
 * Mock.mock('/goods',{code:0,data:data.goods})
 * 
 * 
 * 
 * 放假的一个作业
 * 上机:提供了{code:0,data:{name:'小明',age:10}} 登录功能,通过vue脚手架,和mock，通过路由实现
 * vue教授杰
 * mock
 * vue-router
 * axios
 * koa,koa-router---快速搭建服务器
 * data.json文件----json格数数据的设计
 * 路由组件中要有登录的窗口
 * 用户名:
 * 密码:
 * 表单的验证------vee-validate
 * 登录按钮,取消按钮
 * 登录成功需要自动登录-------提示欢迎来到某公司
 * 取消登录--显示的是登录界面
 * 
 * api目录中的index.js文件中
 * export const regGoods=()=>ajax('/goods')
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
