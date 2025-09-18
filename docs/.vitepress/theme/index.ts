// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import './custom.css';

import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';

export default {
  extends: DefaultTheme,

  setup() {
    const route = useRoute();
    const initSwiper = () => {
      // 销毁已存在的 Swiper 实例，避免重复初始化
      if (window.__beautySwiper) {
        window.__beautySwiper.destroy(true, true);
      }
      // 初始化 Swiper
      const grid = document.querySelector('.beauty-img-grid');
      if (grid) {
        window.__beautySwiper = new Swiper(grid, {
          direction: 'vertical',
          slidesPerView: 1,
          spaceBetween: 12,
          mousewheel: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
      }
    };
    onMounted(() => {
      initSwiper();
    });
    watch(
      () => route.path,
      () => nextTick(() => initSwiper())
    );
  },

}