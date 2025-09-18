// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import './custom.css';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
  extends: DefaultTheme,
  
  enhanceApp({ app }) {
    // 注册 Swiper 组件
    app.component('Swiper', Swiper);
    app.component('SwiperSlide', SwiperSlide);
  },

}