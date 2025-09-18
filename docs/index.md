---
# https://vitepress.dev/reference/default-theme-home-page
layout: home




---

<div class="beauty-img-grid">
  <img src="/images/2.jpeg" alt="2.jpeg" @click="openSwiper(0)" />
  <img src="/images/Girl-play-swing-silhouette-tree-sea-sun_1920x1200.jpeg" alt="Girl-play-swing" @click="openSwiper(1)" />
  <img src="/images/newcity.jpeg" alt="newcity" @click="openSwiper(2)" />
  <img src="/images/Red-tulips-flowers-macro-photography_1920x1200.jpeg" alt="Red-tulips" @click="openSwiper(3)" />
  <img src="/images/Russia-temple-river-trees-sunset_1920x1200.jpeg" alt="Russia-temple" @click="openSwiper(4)" />
  <img src="/images/San-Marino-tower-monument-statue-sunshine_1920x1200.jpeg" alt="San-Marino-tower" @click="openSwiper(5)" />
  <img src="/images/Spain-Asturias-mountains-lake-clouds-morning_1920x1200.jpeg" alt="Spain-Asturias" @click="openSwiper(6)" />
  <img src="/images/Spain-Barcelona-interior-people_1920x1200.jpeg" alt="Spain-Barcelona" @click="openSwiper(7)" />
  <img src="/images/Starfish-sea-beach-foam-sun_3840x2160.jpeg" alt="Starfish-sea" @click="openSwiper(8)" />
  <img src="/images/Three-white-puppies-Labrador-Retriever_1920x1200.jpeg" alt="Three-white-puppies" @click="openSwiper(9)" />
  <img src="/images/Toronto-Canada-morning-city_1920x1200.jpeg" alt="Toronto-Canada" @click="openSwiper(10)" />
  <img src="/images/Transformers-Optimus-Prime-truck_3840x2160.jpeg" alt="Transformers-Optimus-Prime" @click="openSwiper(11)" />
  <img src="/images/Trees-rock-mountain-top-sunshine_1920x1200.jpeg" alt="Trees-rock-mountain" @click="openSwiper(12)" />
</div>

<!-- 轮播模态框 -->
<div v-if="showSwiper" class="swiper-modal" @click="closeSwiper">
  <div class="swiper-modal-content" @click.stop>
    <button class="swiper-close" @click="closeSwiper">×</button>
    <div class="beauty-swiper">
      <Swiper
        :modules="[Navigation, Pagination, Autoplay]"
        :slides-per-view="1"
        :space-between="30"
        :navigation="true"
        :pagination="{ clickable: true }"
        :initial-slide="currentImageIndex"
        :loop="true"
        class="swiper-container"
      >
        <SwiperSlide v-for="(image, index) in images" :key="index">
          <img :src="image.src" :alt="image.alt" class="swiper-image" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</div>

<script setup>
import { ref } from 'vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

const showSwiper = ref(false)
const currentImageIndex = ref(0)

const images = [
  { src: '/images/2.jpeg', alt: '2.jpeg' },
  { src: '/images/Girl-play-swing-silhouette-tree-sea-sun_1920x1200.jpeg', alt: 'Girl-play-swing' },
  { src: '/images/newcity.jpeg', alt: 'newcity' },
  { src: '/images/Red-tulips-flowers-macro-photography_1920x1200.jpeg', alt: 'Red-tulips' },
  { src: '/images/Russia-temple-river-trees-sunset_1920x1200.jpeg', alt: 'Russia-temple' },
  { src: '/images/San-Marino-tower-monument-statue-sunshine_1920x1200.jpeg', alt: 'San-Marino-tower' },
  { src: '/images/Spain-Asturias-mountains-lake-clouds-morning_1920x1200.jpeg', alt: 'Spain-Asturias' },
  { src: '/images/Spain-Barcelona-interior-people_1920x1200.jpeg', alt: 'Spain-Barcelona' },
  { src: '/images/Starfish-sea-beach-foam-sun_3840x2160.jpeg', alt: 'Starfish-sea' },
  { src: '/images/Three-white-puppies-Labrador-Retriever_1920x1200.jpeg', alt: 'Three-white-puppies' },
  { src: '/images/Toronto-Canada-morning-city_1920x1200.jpeg', alt: 'Toronto-Canada' },
  { src: '/images/Transformers-Optimus-Prime-truck_3840x2160.jpeg', alt: 'Transformers-Optimus-Prime' },
  { src: '/images/Trees-rock-mountain-top-sunshine_1920x1200.jpeg', alt: 'Trees-rock-mountain' }
]

const openSwiper = (index) => {
  currentImageIndex.value = index
  showSwiper.value = true
  // 防止背景滚动
  document.body.style.overflow = 'hidden'
}

const closeSwiper = () => {
  showSwiper.value = false
  // 恢复背景滚动
  document.body.style.overflow = 'auto'
}
</script>