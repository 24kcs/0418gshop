<template>
  <div>
    <router-view></router-view>
    <FooterGuide/>
  </div>
</template>
<script>
// 引入底部的导航组件FooterGuide.vue
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  // 注册组件
  components: {
    FooterGuide
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
</style>
