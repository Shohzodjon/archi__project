
<script setup>
import { onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay, A11y } from 'swiper/modules';
import SectionHeaderComp from '@/sections/SectionHeaderComp.vue';
import ResultCard from '@/components/ResultCard.vue';
import SmallArrow from '@/assets/icons/SmallArrow.vue';
import {  sertificatData } from '@/assets/data/json-data'
import { useAboutStore } from '@/stores/about';

const companyStore = useAboutStore();
const modules = [Navigation, Autoplay, A11y]

onMounted(() => {
    companyStore.fetchAboutData('about');
    companyStore.fetchSertificateData('certificate');
})

const arr=[];


const data = [
    {
        label: 'О компании',
        url: ''
    }
]

</script>
<template>
    <section>
        <SectionHeaderComp :bread-data="data" />

        <div class="bg-white-900 pt-[60px] pb-[120px]">
            <div class="container">
                <div class="flex items-center gap-6">
                    <!-- left side -->
                    <div class="max-w-[993px]">
                        <!-- <p>{{ companyStore.about }}</p> -->
                        <h2 class="text-[40px] font-bold font-gilroy-bold text-grey-900 mb-2 leading-[52px] "
                            v-for="item in companyStore.about.section_1" :key="item.id">{{ item.title }}</h2>

                        <div class="company__desc__header" v-for="item in companyStore.about.section_1" :key="item.id"
                            v-html="item.content"></div>
                    </div>
                    <!--  rgiht side -->
                    <div class="relative">
                        <img alt="company img" v-for="item in companyStore.about.section_1" :key="item.id" :src="item.img">
                        <div
                            class="w-[140px] h-[140px] rounded-sm flex items-center justify-center flex-col bg-white-900 absolute bottom-5 left-5 shadow-[0_0_20px_0_rgba(0,0,0,0.1)]">
                            <h3 class="text-blue-500 text-[32px] font-extrabold font-gilroy-bold leading-[41.6px]">5 лет
                            </h3><span class="text-grey-500 font-semibold leading-[26px] text-xl ">опыт</span>
                        </div>
                    </div>
                </div>
                <div class="bg-grey-100 py-[60px] px-[182px] max-w-[1430px] mx-auto my-[120px]" data-aos="fade-left"
                    data-aos-easing="linear" data-aos-duration="900" data-aos-delay="600">
                    <h3 class="text-grey-900 text-center text-[32px] leading-[41.6px] font-bold font-gilroy-bold mb-4"
                        v-for="item in companyStore.about.section_2" :key="item.id">{{ item.title }}</h3>
                    <p class="text-grey-500 text-xl text-center font-medium font-gilroy-medium leading-[30px]"
                        v-for="item in companyStore.about.section_2" :key="item.id">{{ item.content }}</p>
                </div>
                <!--  end of mission card -->
                <div class="flex gap-10 items-center">
                    <div class="bg-blue-900 result__grid__box relative p-8" data-aos="fade-right" data-aos-easing="linear"
                        data-aos-duration="900" data-aos-delay="600">
                        <div class="company__result__card " v-for="item in companyStore.about.section_3" :key="item.id">
                            <ResultCard :result_content="item.install" result_category="УСТАНОВКИ"/>
                        </div>
                        <div class="company__result__card " v-for="item in companyStore.about.section_3" :key="item.id">
                            <ResultCard :result_content="item.generation" result_category="ВЫРАБОТКА ЭЛЕКТРОЭНЕРГИИ"/>
                        </div>
                        <div class="company__result__card " v-for="item in companyStore.about.section_3" :key="item.id">
                            <ResultCard :result_content="item.economy" result_category="ЭКОНОМИЯ"/>
                        </div>
                        <div class="company__result__card " v-for="item in companyStore.about.section_3" :key="item.id">
                            <ResultCard :result_content="item.clients" result_category="КЛИЕНТОВ"/>
                        </div>
                        <span
                            class="bg-blue-900 h-11 w-11 block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45"></span>
                    </div>
                    <!-- end of left side -->
                    <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="900" data-aos-delay="600">
                        <h2 class="text-grey-900 text-[32px] font-bold leading-[41.6px] font-gilroy-bold mb-4"
                            v-for="item in companyStore.about.section_3" :key="item.id">{{ item.title }}</h2>
                        <div v-for="item in companyStore.about.section_3" :key="item.id" v-html="item.content"
                            class="company__desc__list"></div>
                    </div>
                    <!-- end of right side -->
                </div>
                <!-- end of services -->
            </div>
        </div>
        <!-- Certification section  -->
        <div class="bg-grey-100 pt-[100px] pb-[120px]">
            <div class="container">
                <h2 class="text-center font-bold text-5xl leading-normal font-gilroy-bold mb-4" v-for="(item,index) in companyStore.certificate" :key="index">{{ item.title }}</h2>
                <p class="text-center text-[18px] font-medium font-gilroy-medium leading-[27px] text-grey-500 mb-12" v-for="(item,index) in companyStore.certificate" :key="index"> {{ item.content }}</p>

                <div class=" mt-10 relative" v-for="(item,index) in companyStore.certificate" :key="index">
                    <swiper :slides-per-view="4" :space-between="24" :modules="modules" :autoplay="{ delay: 2500 }"
                        :loop="true" :navigation="{
                            nextEl: '.swiper-next',
                            prevEl: '.swiper-prev',
                        }">
                        
                        <swiper-slide v-for="(img,index) in item.gallery" :key="index">
                            <div class="max-w-[412px]">
                                <img :src="img.img" alt="sertificat image" class="w-full">
                            </div>
                        </swiper-slide>
                        <swiper-slide v-for="(img,index) in item.gallery" :key="index">
                            <div class="max-w-[412px]">
                                <img :src="img.img" alt="sertificat image" class="w-full">
                            </div>
                        </swiper-slide>
                        
                    </swiper>
                    <button
                        class="sertificate__slider__btn swiper-prev cursor-pointer w-[60px] h-[60px] rounded-sm flex items-center  justify-center absolute top-1/2 -translate-y-1/2 -left-[30px] z-50"
                        aria-label="button">
                        <SmallArrow />
                    </button>
                    <button
                        class="sertificate__slider__btn swiper-next cursor-pointer  w-[60px] h-[60px]  rounded-sm flex items-center justify-center  absolute top-1/2 -translate-y-1/2 -right-[30px] z-50"
                        aria-label="button">
                        <SmallArrow class="rotate-180" />
                    </button>
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped>
.result__grid__box {
    display: grid;
    grid-template-columns: repeat(2, auto);
}

.company__result__card {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

<style>
.company__result__card div {
    background: transparent !important;

}

.company__result__card:nth-child(1) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
}

.company__result__card:nth-child(2) {
    border-left: 1px solid rgba(255, 255, 255, 0.4);
}

.company__result__card:nth-child(3) {
    border-right: 1px solid rgba(255, 255, 255, 0.4);
}

.company__result__card:nth-child(4) {
    border-top: 1px solid rgba(255, 255, 255, 0.4);
}

.company__result__card h3 {
    color: #fff !important;
}

.company__result__card span {
    color: #fff !important;
}

.sertificate__slider__btn {
    background: linear-gradient(180deg, #3689FF 0%, #2077F2 100%) !important;
}

.company__desc__header p {
    color: #536681;
    font-size: 20px;
    font-weight: 500;
    line-height: 150%
}

.company__desc__list ul {
    list-style-type: disc;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.company__desc__list ul li {
    color: #536681;
    font-size: 22px;
    font-weight: 500;
    line-height: 150%;
}
</style>