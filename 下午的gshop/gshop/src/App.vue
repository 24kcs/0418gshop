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
import { reqAddress } from "./api";
export default {
  // 注册组件
  components: {
    FooterGuide
  },
  async mounted() {
    // 测试接口
    const result = await reqAddress("116.36867", "40.10038")
    console.log(result)
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus"></style>
