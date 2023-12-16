
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay, A11y } from 'swiper/modules';
import SectionHeaderComp from '@/sections/SectionHeaderComp.vue';
import ResultCard from '@/components/ResultCard.vue';
import SmallArrow from '@/assets/icons/SmallArrow.vue';
import { rateData, serviceData, sertificatData } from '@/assets/data/json-data'

const modules = [Navigation, Autoplay, A11y]
</script>
<template>
    <section>
        <SectionHeaderComp title="О компании" />

        <div class="bg-white-900 pt-[60px] pb-[120px]">
            <div class="container">
                <div class="flex items-center gap-6">
                    <!-- left side -->
                    <div class="max-w-[993px]">

                        <h2 class="text-[40px] font-bold font-gilroy-bold text-grey-900 mb-2 leading-[52px] ">Компании Archi
                            Holding</h2>
                        <p class="text-grey-500 font-medium font-gilroy-medium leading-[30px] text-xl indent-7"> Компания
                            Archi Holding работает на украинском энергетическом рынке уже 20 лет. С момента
                            основания в 2002 году мы производили монтажные и пусконаладочные работы в традиционной
                            энергетике. Уже с 2011 года, наблюдая рыночные тенденции и мировые тренды, мы полностью
                            переквалифицировались на проекты энергетики с использованием возобновляемых источников энергии
                        </p>
                        <p class="text-grey-500 font-medium font-gilroy-medium leading-[30px] text-xl indent-7"> Компания
                            Archi Holding предоставляет услуги по проектированию и построению систем
                            энергоснабжения частных домов и коммерческих объектов с использованием альтернативных источников
                            энергии. Мы импортируем всю линейку необходимого оборудования для построения сетевых солнечных
                            электростанций, систем бесперебойного и автономного электропитания. Наши бригады выполняют
                            монтажные и пусконаладочные работы любой сложности и в полном объеме.
                            Также компания оказывает юридическую поддержку в оформлении разрешительной документации.</p>
                    </div>
                    <!--  rgiht side -->
                    <div class="relative">
                        <img src="../assets/images/company_img.png" alt="company img">
                        <div
                            class="w-[140px] h-[140px] rounded-sm flex items-center justify-center flex-col bg-white-900 absolute bottom-5 left-5 shadow-[0_0_20px_0_rgba(0,0,0,0.1)]">
                            <h3 class="text-blue-500 text-[32px] font-extrabold font-gilroy-bold leading-[41.6px]">5 лет
                            </h3><span class="text-grey-500 font-semibold leading-[26px] text-xl ">опыт</span>
                        </div>
                    </div>
                </div>
                <div class="bg-grey-100 py-[60px] px-[182px] max-w-[1430px] mx-auto my-[120px]" data-aos="fade-left"
                    data-aos-easing="linear" data-aos-duration="900" data-aos-delay="600"
                    >
                    <h3 class="text-grey-900 text-center text-[32px] leading-[41.6px] font-bold font-gilroy-bold mb-4">Наша
                        миссия и преимущества</h3>
                    <p class="text-grey-500 text-xl text-center font-medium font-gilroy-medium leading-[30px]">Предоставляя
                        лучшие и самые инновационные решения для солнечной энергетики, мы стремимся вносить свой
                        вклад, продвигать и расти в глобальном секторе возобновляемых источников энергии.</p>
                </div>
                <!--  end of mission card -->
                <div class="flex gap-10 items-center">
                    <div class="bg-blue-900 result__grid__box relative p-8" data-aos="fade-right" data-aos-easing="linear"
                        data-aos-duration="900" data-aos-delay="600" >
                        <div class="company__result__card " v-for="item in rateData" :key="item.id">
                            <ResultCard :result_content="item.num" :result_category="item.service" />
                        </div>
                        <span
                            class="bg-blue-900 h-11 w-11 block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45"></span>
                    </div>
                    <!-- end of left side -->
                    <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="900" data-aos-delay="600"
                        >
                        <h2 class="text-grey-900 text-[32px] font-bold leading-[41.6px] font-gilroy-bold mb-4">Мы
                            предоставляем следующие услуги:</h2>
                        <ul class="list-disc pl-7">
                            <li v-for="item in serviceData" :key="item.id"
                                class="text-[22px] font-medium font-gilroy-medium leading-[33px] text-grey-500">{{
                                    item.title }}</li>
                        </ul>
                    </div>
                    <!-- end of right side -->
                </div>
                <!-- end of services -->
            </div>
        </div>
        <!-- Certification section  -->
        <div class="bg-grey-100 pt-[100px] pb-[120px]">
            <div class="container">
                <h2 class="text-center font-bold text-5xl leading-normal font-gilroy-bold mb-4">Сертификация</h2>
                <p class="text-center text-[18px] font-medium font-gilroy-medium leading-[27px] text-grey-500 mb-12">
                    Солнечные решения от компании Archi Holding - это гарантия качества и эффективности.</p>

                <div class=" mt-10 relative">
                    <swiper :slides-per-view="4" :space-between="24" :modules="modules" :autoplay="{ delay: 2500 }"
                        :loop="true" :navigation="{
                            nextEl: '.swiper-next',
                            prevEl: '.swiper-prev',
                        }">
                        <swiper-slide v-for="item in sertificatData" :key="item.id">
                            <div class="max-w-[412px]">
                                <img :src="item.img_url" alt="sertificat image" class="w-full">
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
</style>