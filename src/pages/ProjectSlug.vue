
<script setup>
import {reactive, onMounted} from 'vue'
import { useRoute } from 'vue-router';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';
import SectionHeaderComp from '@/sections/SectionHeaderComp.vue';
import DashedLine from '@/assets/icons/DashedLine.vue'
import SectionHeader from '@/components/SectionHeader.vue';
import ExtraProjectCard from '@/components/ExtraProjectCard.vue';
import { homeNewsData } from '@/assets/data/json-data'
import SmallArrow from '@/assets/icons/SmallArrow.vue'
import SliderThumbs from '@/components/SliderThumbs.vue';
import {useProjectStore} from '@/stores/project'

const modules = [Navigation, Autoplay];
const route = useRoute();
const id = route.params.id;
const projectStore=useProjectStore();

onMounted(()=>{
    projectStore.fetchProjectDetail(id);
})

const data =reactive([
    {
        label: 'Проекты',
        url: '/projects'
    }
]);
homeNewsData.forEach(item => {
    if (item.id == id) {
        data.push({
            label: item.news_title,
            url: ''
        })
    }

})

</script>
<template>
    <section>

        <SectionHeaderComp :bread-data="data" />
        <div class="mt-[60px] pb-[120px]">
            <div class="container">
                <div class="max-w-[1138px] mx-auto mb-[120px]">
                    <h2 class="text-grey-900 text-[32px] leading-[41.6px] font-bold font-gilroy-bold mb-4">{{ projectStore.projectDetail.title }}</h2>

                    <p class="text-grey-500 text-xl font-medium font-gilroy-medium leading-[30px] mb-8">
                      {{ projectStore.projectDetail.content }}
                    </p>
                    <div class="w-full border-[1.5px] border-grey-200 rounded p-6">
                        <h4 class="text-grey-900 text-2xl leading-[31.2px] font-bold font-gilroy-bold ">Тех. описание</h4>

                        <div class="line my-6 h-[1.5px] bg-grey-200 "></div>
                        <ul class="flex flex-col gap-5">
                            <li class="flex items-center gap-[10px]">
                                <span
                                    class="text-grey-500 text-xl leading-[30px] font-medium font-gilroy-medium">Мощность:</span>
                                <DashedLine class="flex-1" /> <span
                                    class="text-grey-900 text-xl leading-[30px] font-bold font-gilroy-bold">124.5 кВт</span>
                            </li>
                            <li class="flex items-center gap-[10px]">
                                <span class="text-grey-500 text-xl leading-[30px] font-medium font-gilroy-medium">Годовая
                                    производительность:</span>
                                <DashedLine class="flex-1" /> <span
                                    class="text-grey-900 text-xl leading-[30px] font-bold font-gilroy-bold">196,710
                                    кВт*ч</span>
                            </li>
                            <li class="flex items-center gap-[10px]">
                                <span class="text-grey-500 text-xl leading-[30px] font-medium font-gilroy-medium">Сумма
                                    сбережений:</span>
                                <DashedLine class="flex-1" /> <span
                                    class="text-grey-900 text-xl leading-[30px] font-bold font-gilroy-bold">8,403,750
                                    СУМ</span>
                            </li>
                        </ul>
                    </div>
                    <div class="mt-[60px]">
                        <SliderThumbs :images="projectStore.projectDetail.gallery" header_slider="project__silder__top"
                            bottom_slider="project__slider__bottom" :is_navigation="true"/>
                    </div>
                </div>

                <SectionHeader header__content="Другие проекты" />

                <div class="mt-10">
                    <swiper :slides-per-view="4" :space-between="24" :modules="modules" 
                        :navigation="{
                            nextEl: '.swiper-next2',
                            prevEl: '.swiper-prev2',
                        }">
                        <swiper-slide v-for="item in projectStore.otherProject.others" :key="item.id">
                            <ExtraProjectCard :img_url="item.url" :title="item.title"
                                :slug="`/project/${item.id}`" />

                        </swiper-slide>
                    </swiper>
                    <div class="flex w-full items-center justify-center gap-6 mt-10">
                        <button
                            class="project__slider__btn swiper-prev2 cursor-pointer w-[60px] h-[60px] rounded-sm flex items-center justify-center border-[1.5px] border-grey-200"
                            aria-label="button">
                            <SmallArrow />
                        </button>
                        <button
                            class="project__slider__btn swiper-next2 cursor-pointer  w-[60px] h-[60px] rounded-sm flex items-center justify-center border-[1.5px] border-grey-200 "
                            aria-label="button">
                            <SmallArrow class="rotate-180" />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>
<style>
.project__silder__top {
    width: 100%;
    height: 540px;
    max-width: 1138px;
    margin-bottom: 24px;
}

.project__silder__top .swiper-slide img {
    width: 100%;
    height: 100%;
    max-height: 540px;
}

.project__slider__bottom .swiper-slide {
    width: 100%;
    height: 160px;
    max-width: 260px;
    border: 3px solid #fff;
    transition: all linear .5s;
}

.project__slider__bottom .swiper-slide-thumb-active {
    border-color: #3689FF;
}

.project__slider__bottom .swiper-slide img {
    width: 100%;
    height: 100%;
}</style>