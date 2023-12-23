
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
                <div class="flex items-center flex-col xl:flex-row gap-6">
                    <!-- left side -->
                    <div class="max-w-[993px] xl:flex-1">
                        <!-- <p>{{ companyStore.about }}</p> -->
                        <h2 class="text-2xl md:text-3xl lg:text-[40px] font-bold font-gilroy-bold text-grey-900 mb-2 lg:leading-[52px] "
                            v-for="item in companyStore.about.section_1" :key="item.id">{{ item.title }}</h2>

                        <div class="company__desc__header" v-for="item in companyStore.about.section_1" :key="item.id"
                            v-html="item.content"></div>
                    </div>
                    <!--  rgiht side -->
                    <div class="relative xl:flex-1">
                        <img alt="company img" v-for="item in companyStore.about.section_1" :key="item.id" :src="item.img">
                        <div
                            class="w-20 h-20 sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] rounded-sm flex items-center justify-center flex-col bg-white-900 absolute bottom-5 left-5 shadow-[0_0_20px_0_rgba(0,0,0,0.1)]">
                            <h3 class="text-blue-500 text-xl sm:text-[32px] font-extrabold font-gilroy-bold sm:leading-[41.6px]">5 лет
                            </h3><span class="text-grey-500 font-semibold text-base sm:leading-[26px] sm:text-xl ">опыт</span>
                        </div>
                    </div>
                </div>
                <div class="bg-grey-100 py-5 md:py-8 lg:py-10 xl:py-[60px] px-4 md:px-10 2xl:px-[182px] max-w-[1430px] mx-auto my-7 md:my-10 lg:my-16 xl:my-[120px]" data-aos="fade-left"
                    data-aos-easing="linear" data-aos-duration="900" data-aos-delay="600">
                    <h3 class="text-grey-900 text-center text-2xl lg:text-[32px] lg:leading-[41.6px] font-bold font-gilroy-bold mb-2 md:mb-4"
                        v-for="item in companyStore.about.section_2" :key="item.id">{{ item.title }}</h3>
                    <p class="text-grey-500 text-base md:text-xl text-center font-medium font-gilroy-medium md:leading-[30px]"
                        v-for="item in companyStore.about.section_2" :key="item.id">{{ item.content }}</p>
                </div>
                <!--  end of mission card -->
                <div class="flex flex-col xl:flex-row gap-10 ">
                    <div class="bg-blue-900 result__grid__box  relative p-8" data-aos="fade-right" data-aos-easing="linear"
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
                    <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="900" data-aos-delay="600" class="pl-5 xl:w-1/2">
                        <h2 class="text-grey-900 text-2xl md:text-[32px] font-bold md:leading-[41.6px] font-gilroy-bold mb-4"
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
        <div class="bg-grey-100  pt-8 md:pt-10 lg:pt-16 xl:pt-[100px] pb-10 md:pb-14 lg:pb-20 xl:pb-[120px]">
            <div class="container">
                <h2 class="text-center font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-normal font-gilroy-bold mb-2 md:mb-3 lg:mb-4" v-for="(item,index) in companyStore.certificate" :key="index">{{ item.title }}</h2>
                <p class="text-center text-base md:text-[18px] font-medium font-gilroy-medium md:leading-[27px] text-grey-500 mb-12" v-for="(item,index) in companyStore.certificate" :key="index"> {{ item.content }}</p>

                <div class=" mt-10 relative" v-for="(item,index) in companyStore.certificate" :key="index">
                    <swiper :slides-per-view="4" :space-between="24" :modules="modules" :autoplay="{ delay: 2500 }"
                        :loop="true" :navigation="{
                            nextEl: '.swiper-next',
                            prevEl: '.swiper-prev',
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
                              spaceBetween: 15,
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
                            },
                          }"
                        
                        >
                        
                        <swiper-slide v-for="(img,index) in item.gallery" :key="index">
                            <div class="max-w-[60%] mx-auto md:max-w-[412px]">
                                <img :src="img.img" alt="sertificat image" class="w-full max-h-[550px]">
                            </div>
                        </swiper-slide>
                        <swiper-slide v-for="(img,index) in item.gallery" :key="index">
                            <div class="max-w-[60%] mx-auto md:max-w-[412px]">
                                <img :src="img.img" alt="sertificat image" class="w-full max-h-[550px]">
                            </div>
                        </swiper-slide>
                        
                    </swiper>
                    <button
                        class="sertificate__slider__btn swiper-prev cursor-pointer w-12 h-12 md:w-[60px] md:h-[60px] rounded-sm flex items-center  justify-center absolute top-1/2 -translate-y-1/2 left-0 3xl:-left-[30px] z-50"
                        aria-label="button">
                        <SmallArrow />
                    </button>
                    <button
                        class="sertificate__slider__btn swiper-next cursor-pointer w-12 h-12  md:w-[60px] md:h-[60px]  rounded-sm flex items-center justify-center  absolute top-1/2 -translate-y-1/2 right-0 3xl:-right-[30px] z-50"
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
    grid-template-columns: repeat(2, 1fr);
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

@media screen and (min-width:350px) and (max-width:576px) {
    .company__desc__header p {
        font-size: 16px;
        line-height: 120%
    }
    .company__desc__list ul {
    padding-left: 15px;    
    }
    .company__desc__list ul li {
        font-size: 16px;
        line-height: 120%;
    }
}
@media screen and (min-width:577px) and (max-width:1024px) {
 
    .company__desc__list ul {
    padding-left: 15px;    
    }
    .company__desc__list ul li {
        font-size: 18px;
        line-height: 120%;
    }
}
</style>