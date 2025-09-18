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
    <div class="swiper-counter">{{ currentSlideIndex + 1 }} / {{ images.length }}</div>
    <div class="beauty-swiper">
      <Swiper
        :modules="[Navigation, Pagination, Autoplay]"
        :slides-per-view="1"
        :space-between="0"
        :navigation="true"
        :pagination="{ clickable: true }"
        :initial-slide="currentImageIndex"
        :loop="true"
        :keyboard="{ enabled: true }"
        @swiper="onSwiperInit"
        @slideChange="onSlideChange"
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
import { ref, onMounted, onUnmounted } from 'vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

const showSwiper = ref(false)
const currentImageIndex = ref(0)
const currentSlideIndex = ref(0)
let swiperInstance = null

const images = [
  { src: '/beauty/images/2.jpeg', alt: '2.jpeg' },
  { src: '/beauty/images/Girl-play-swing-silhouette-tree-sea-sun_1920x1200.jpeg', alt: 'Girl-play-swing' },
  { src: '/beauty/images/newcity.jpeg', alt: 'newcity' },
  { src: '/beauty/images/Red-tulips-flowers-macro-photography_1920x1200.jpeg', alt: 'Red-tulips' },
  { src: '/beauty/images/Russia-temple-river-trees-sunset_1920x1200.jpeg', alt: 'Russia-temple' },
  { src: '/beauty/images/San-Marino-tower-monument-statue-sunshine_1920x1200.jpeg', alt: 'San-Marino-tower' },
  { src: '/beauty/images/Spain-Asturias-mountains-lake-clouds-morning_1920x1200.jpeg', alt: 'Spain-Asturias' },
  { src: '/beauty/images/Spain-Barcelona-interior-people_1920x1200.jpeg', alt: 'Spain-Barcelona' },
  { src: '/beauty/images/Starfish-sea-beach-foam-sun_3840x2160.jpeg', alt: 'Starfish-sea' },
  { src: '/beauty/images/Three-white-puppies-Labrador-Retriever_1920x1200.jpeg', alt: 'Three-white-puppies' },
  { src: '/beauty/images/Toronto-Canada-morning-city_1920x1200.jpeg', alt: 'Toronto-Canada' },
  { src: '/beauty/images/Transformers-Optimus-Prime-truck_3840x2160.jpeg', alt: 'Transformers-Optimus-Prime' },
  { src: '/beauty/images/Trees-rock-mountain-top-sunshine_1920x1200.jpeg', alt: 'Trees-rock-mountain' }
]

const openSwiper = (index) => {
  currentImageIndex.value = index
  currentSlideIndex.value = index
  showSwiper.value = true
  // 防止背景滚动
  document.body.style.overflow = 'hidden'
}

const closeSwiper = () => {
  showSwiper.value = false
  swiperInstance = null
  // 恢复背景滚动
  document.body.style.overflow = 'auto'
}

// 键盘事件处理
const handleKeydown = (event) => {
  if (!showSwiper.value) return
  
  switch (event.key) {
    case 'Escape':
      closeSwiper()
      break
    case 'ArrowLeft':
      if (swiperInstance) {
        swiperInstance.slidePrev()
      }
      break
    case 'ArrowRight':
      if (swiperInstance) {
        swiperInstance.slideNext()
      }
      break
    case 'ArrowUp':
      event.preventDefault()
      if (swiperInstance) {
        swiperInstance.slidePrev()
      }
      break
    case 'ArrowDown':
      event.preventDefault()
      if (swiperInstance) {
        swiperInstance.slideNext()
      }
      break
  }
}

// Swiper实例初始化
const onSwiperInit = (swiper) => {
  swiperInstance = swiper
}

// 幻灯片变化事件
const onSlideChange = (swiper) => {
  currentSlideIndex.value = swiper.realIndex
}

// 组件生命周期
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>