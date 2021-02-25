<template>
  <div>
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <swiper>
      <swiper-item>
        <img src="~assets/img/navbar/1.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="~assets/img/navbar/2.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="~assets/img/navbar/3.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="~assets/img/navbar/2.jpg" alt="">
      </swiper-item>
    </swiper>
    <recommand-view></recommand-view>
    
    <!-- <h2>首页</h2> -->
  </div>
</template>

<script>
  import NavBar from '../../../../mall/src/components/common/navbar/NavBar.vue'

  //import Swiper from 'components/common/swiper/Swiper'
  //import SwiperItem from 'components/common/swiper/SwiperItem'
  import Swiper from '../../../../mall/src/components/common/swiper/Swiper.vue'
  import SwiperItem from '../../../../mall/src/components/common/swiper/SwiperItem.vue'
  import RecommandView from './childcomps/recommendView.vue'
  export default {
    name: "Home",
    components: {
      Swiper,
      SwiperItem,
      NavBar,
      RecommandView
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: relative;
    z-index: 9;
  }
</style>
