<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide>
    	<div class="swiper-img-con">
    		<img class="swiper-img" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/278a88f18f1523eec8c52f650522be68.jpg_750x200_bc365244.jpg"/>
    	</div>
    </swiper-slide>
    <swiper-slide>
    	<div class="swiper-img-con">
    		<img class="swiper-img" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg">
    	</div>
    </swiper-slide>
    <swiper-slide>
    	<div class="swiper-img-con">
    		<img class="swiper-img" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/9f73976e40c4ef845cabe0efc0269ebb.jpg_750x200_aab92b7a.jpg">
    	</div>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>

  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    data() {
      return {
        swiperOption: {
          // 自动播放时间
          aotoplay: 3000,
          // 横向
          direction: 'horizontal',
          // 自动适应swiper的高度
          autoHeight: true,
          // 小圆点自己滚动
          pagination: '.swiper-pagination',
          observeParents: true
        }
      }
    },
    components: {
      swiper,
      swiperSlide
	}
  }
</script>

/*scoped证明该样式只在我的组件生效，在别的组件就不生效了*/
<style scoped>
	.swiper-img-con {
		/*让高度自动变为宽度的31.25%，只能用padding实现，图片的宽为200，高为640,200/640=0.3125 */
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 31.25%;
	}
	.swiper-img {
		width: 100%;
	}
</style>