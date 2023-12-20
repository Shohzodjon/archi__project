<script setup>
import { ref, defineProps } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Thumbs, Navigation, Autoplay } from 'swiper/modules';
import SmallArrow from '@/assets/icons/SmallArrow.vue';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';


const modules = [FreeMode, Autoplay, Navigation, Thumbs];

const thumbsSwiper = ref(null);

const props = defineProps({
    images: Array,
    header_slider: String,
    bottom_slider: String,
    is_navigation: Boolean
})

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
}

</script>
<template>
    <Swiper :spaceBetween="10" :thumbs="{ swiper: thumbsSwiper }" :modules="modules" :class="props.header_slider"
        :navigation="{
            nextEl: '.swiper-next_test',
            prevEl: '.swiper-prev_test',
        }" 
        
        >
        <SwiperSlide v-for="item in images" :key="item.id">
            <img :src="item.img_url" alt="thumbs images">
        </SwiperSlide>
    </Swiper>

    <Swiper @swiper="setThumbsSwiper" :spaceBetween="24" :slidesPerView="4" :freeMode="true" :loop="true" :watchSlidesProgress="true"
        :modules="modules" :class="props.bottom_slider" :navigation="{
            nextEl: '.swiper-next_test',
            prevEl: '.swiper-prev_test',
        }"
        :breakpoints="{
            350: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1320: {
                slidesPerView: 4,
                spaceBetween: 10,
              }
          }"
        >
        <SwiperSlide v-for="item in images" :key="item.id">
            <img :src="item.img_url" alt="thumbs bottom images">
        </SwiperSlide>
    </Swiper>
    <div class="flex w-full items-center justify-center gap-6 mt-10" :class="[props.is_navigation ? 'flex' : 'hidden']">
        <button
            class="project__slider__btn swiper-prev_test cursor-pointer w-[60px] h-[60px] rounded-sm flex items-center justify-center border-[1.5px] border-grey-200"
            aria-label="button" @swiper="setThumbsSwiper">
            <SmallArrow />
        </button>
        <button @click="setThumbsSwiper"
            class="project__slider__btn swiper-next_test cursor-pointer  w-[60px] h-[60px] rounded-sm flex items-center justify-center border-[1.5px] border-grey-200 "
            aria-label="button">
            <SmallArrow class="rotate-180" />
        </button>
    </div>
</template>