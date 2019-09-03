<template>
  <section class="msite">
    <!--首页头部-->
    <Header :title="address.name||'正在定位中...'">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">{{user._id?(user.name?(user.name):(user.phone?(user.phone):('登录|注册'))):('登录|注册')}}</span>
      </span>
    </Header>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys,index) in categoryArr" :key="index">
            <a
              href="javascript:"
              class="link_to_food"
              v-for="(category,index) in categorys"
              :key="index"
            >
              <div class="food_container">
                <img :src="`https://fuss10.elemecdn.com`+category.image_url" />
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <ShopList />
  </section>
</template>
<script>
// 引入商家列表组件
import ShopList from "../../components/ShopList/ShopList.vue";
// 引入swiper包
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
// 引入vuex
import { mapState } from "vuex";
export default {
  name: "MSite",
  // 注册组件
  components: {
    ShopList
  },
  async mounted() {
    // 获取商铺信息--shops
    this.$store.dispatch("getShops");

    // 获取食品分类的信息----vuex中
    await this.$store.dispatch("getCategorys");
    this.$nextTick(() => {
      new Swiper(".swiper-container", {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        }
      });
    });

    // this.$store.dispatch("getCategorys", () => {
    //   this.$nextTick(() => {
    //     new Swiper(".swiper-container", {
    //       loop: true, // 循环模式选项
    //       // 如果需要分页器
    //       pagination: {
    //         el: ".swiper-pagination"
    //       }
    //     });
    //   });
    // });

    // 数据有了,界面渲染完毕了,才能new实例对象----轮播图才有效果
    /* eslint-disable no-new */
    // new Swiper(".swiper-container", {
    //   loop: true, // 循环模式选项
    //   // 如果需要分页器
    //   pagination: {
    //     el: ".swiper-pagination"
    //   }
    // });
  },
  computed: {
    ...mapState(["address", "categorys",'user']),
    // categorys----16条数据---一个大数组里面有两个小数组---二维数组
    // 对categorys计算,产生一个二维数组---上面html中遍历就是二维数组
    categoryArr() {
      const { categorys } = this;
      let bigArr = []; // 大数组
      let smallArr = []; // 小数组
      // 遍历当前的数组--16条数据
      categorys.forEach(category => {
        // 先判断小数组是否有数据
        if (smallArr.length === 0) {
          // 小数组中没有数据,就把小数组添加到大的数组中
          bigArr.push(smallArr);
        }
        // 此时大数组中有一个小数组,并且该小数组没有数据

        smallArr.push(category);
        if (smallArr.length === 8) {
          smallArr = [];
        }
      });

      return bigArr;
    }
  }
  // 监视---第二种方式:
  // 如果vue中的状态数据发生变化,会立刻执行watch中的回调函数,然后异步更新界面
  // watch: {
  //   categorys() {
  //     this.$nextTick(() => {
  //       new Swiper(".swiper-container", {
  //         loop: true, // 循环模式选项
  //         // 如果需要分页器
  //         pagination: {
  //           el: ".swiper-pagination"
  //         }
  //       });
  //     });
  //   }
  // }

  // watch: {
  //   categorys() {
  //     setTimeout(() => {
  //       new Swiper(".swiper-container", {
  //         loop: true, // 循环模式选项
  //         // 如果需要分页器
  //         pagination: {
  //           el: ".swiper-pagination"
  //         }
  //       });
  //     }, 2000);
  //   }
  // }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.msite // 首页
  width 100%
  .msite_nav
    bottom-border-1px(#e4e4e4)
    margin-top 45px
    height 200px
    background #fff
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          .link_to_food
            width 25%
            .food_container
              display block
              width 100%
              text-align center
              padding-bottom 10px
              font-size 0
              img
                display inline-block
                width 50px
                height 50px
            span
              display block
              width 100%
              text-align center
              font-size 13px
              color #666
      .swiper-pagination
        >span.swiper-pagination-bullet-active
          background #02a774
</style>
