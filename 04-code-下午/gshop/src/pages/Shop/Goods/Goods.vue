<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper">
        <ul ref="leftUl">
          <!--:class="{current:true}" 此时的li的current样式暂时没有设置---坑-->
          <li
            class="menu-item"
            :class="{current:currentIndex===index}"
            v-for="(good,index) in goods"
            :key="index"
          >
            <img class="icon" :src="good.icon" v-show="good.icon" />
            <span class="text bottom-border-1px">{{good.name}}</span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper">
        <ul ref="rightUl">
          <li class="food-list-hook" v-for="(good,index) in goods" :key="index">
            <h1 class="title">{{good.name}}</h1>
            <ul>
              <li
                class="food-item bottom-border-1px"
                v-for="(food,index) in good.foods"
                :key="index"
              >
                <div class="icon">
                  <img width="57" height="57" :src="food.icon" />
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">CartControl组件</div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
// 引入BScroll插件
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scrollY: 0, // 纵向滑动的值
      tops: [] // 存储的是右侧分类的li的总高度间隔值
    };
  },
  async mounted() {
    await this.$store.dispatch("getGoods");
    // 初始化滑动对象
    this._initBscroll();
    // 初始化tops数据---进行装载数据
    this._initTops();
  },
  computed: {
    // 从vuex中获取goods数据---数组---多个对象
    ...mapState({
      goods: state => state.shop.goods
    }),
    // 选中的索引
    currentIndex() {
      const { scrollY, tops } = this;
      // 从数组中获取索引
      const index = tops.findIndex(
        (top, index) => scrollY >= top && scrollY < tops[index + 1]
      );
      // 把索引返回
      
      // 判断当前的索引和选中的索引是否一致,如果不一致,
      if (this.index !== index && this.scrollLeft) {
        this.index = index;
        const li = this.$refs.leftUl.children[index];
        // 左侧的列表向上滑动
        this.scrollLeft.scrollToElement(li, 300);
      }
      // console.log(index);
      return index;
    }
  },
  methods: {
    _initBscroll() {
      // 左侧的列表
      this.scrollLeft = new BScroll(".menu-wrapper");
      // 右侧的列表
      this.scrollRight = new BScroll(".foods-wrapper", {
        click: true,
        probeType: 1
        // probeType:3 费电
        /**
         * 1：非实时,触摸滑动
         * 2: 实时的,触摸滑动,编码滑动,
         * 3: 实时的,触摸滑动,编码滑动,惯性,
         * 实时:时间间隔非常短
         * 非实时:时间间隔非常的长
         *
         *  */
      });
      // 滑动,计算scrollY的值
      this.scrollRight.on("scroll", ({ x, y }) => {
        // console.log(y)
        this.scrollY = Math.abs(y);
      });
      // 滚动结束,坐标就不在计算
      this.scrollRight.on("scrollEnd", ({ x, y }) => {
        // console.log(y)
        this.scrollY = Math.abs(y);
      });
    },
    // 装载tops数组数据的-----右侧ul中li(这个li指的是分类的li)
    _initTops() {
      const tops = [];
      let top = 0;
      // 数组中初始的数据是0
      tops.push(top);
      const list = this.$refs.rightUl.children; // 当前右侧ul中所有的分类的li---伪数组
      Array.prototype.slice.call(list).forEach(li => {
        top += li.clientHeight;
        // 立刻加到数组中
        tops.push(top);
      });
      console.log(tops);
      // 更新数据
      this.tops = tops;
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../../common/stylus/mixins.styl'
.goods
  display flex
  position absolute
  top 225px
  bottom 46px
  width 100%
  background #fff
  overflow hidden
  .menu-wrapper
    flex 0 0 80px
    width 80px
    background #f3f5f7
    .menu-item
      display table
      height 54px
      width 56px
      padding 0 12px
      line-height 14px
      &.current
        position relative
        z-index 10
        margin-top -1px
        background #fff
        color $green
        font-weight 700
        .text
          border-none()
      .icon
        display inline-block
        vertical-align top
        width 12px
        height 12px
        margin-right 2px
        background-size 12px 12px
        background-repeat no-repeat
      .text
        display table-cell
        width 56px
        vertical-align middle
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        font-size 12px
  .foods-wrapper
    flex 1
    .title
      padding-left 14px
      height 26px
      line-height 26px
      border-left 2px solid #d9dde1
      font-size 12px
      color rgb(147, 153, 159)
      background #f3f5f7
    .food-item
      display flex
      margin 18px
      padding-bottom 18px
      bottom-border-1px(rgba(7, 17, 27, 0.1))
      &:last-child
        border-none()
        margin-bottom 0
      .icon
        flex 0 0 57px
        margin-right 10px
      .content
        flex 1
        .name
          margin 2px 0 8px 0
          height 14px
          line-height 14px
          font-size 14px
          color rgb(7, 17, 27)
        .desc, .extra
          line-height 10px
          font-size 10px
          color rgb(147, 153, 159)
        .desc
          line-height 12px
          margin-bottom 8px
        .extra
          .count
            margin-right 12px
        .price
          font-weight 700
          line-height 24px
          .now
            margin-right 8px
            font-size 14px
            color rgb(240, 20, 20)
          .old
            text-decoration line-through
            font-size 10px
            color rgb(147, 153, 159)
        .cartcontrol-wrapper
          position absolute
          right 0
          bottom 12px
</style>

