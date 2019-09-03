<template>
  <div>
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.isShowFooter" />
  </div>
</template>
<script>
// 引入底部的导航组件FooterGuide.vue
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
// 引入api中的接口
import { reqAddress,reqUserInfo } from "./api";
import { RECEIVE_USER } from "./store/mutation-types.js";
export default {
  // 注册组件
  components: {
    FooterGuide
  },
  async mounted() {

    // 页面首次加载,直接发送请求,获取地址信息
    this.$store.dispatch('getAddress')


    // 调用接口
    const result=await reqUserInfo()
    if(result.code==0){
      const user=result.data
      this.$store.commit(RECEIVE_USER,user)
    }



    // 测试接口
    // const result = await reqAddress("116.36867", "40.10038")
    // console.log(result)

    // 测数据
    // this.$store.dispatch('getAddress')
    // this.$store.dispatch('getCategorys')
    // this.$store.dispatch('getShops')
  
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus"></style>
