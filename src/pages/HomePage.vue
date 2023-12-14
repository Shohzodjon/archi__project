
<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay, A11y } from 'swiper/modules';
//  components 
import BaseButton from '@/components/BaseButton.vue';
import Arrow from '@/assets/icons/Arrow.vue';
import SectionHeader from '@/components/SectionHeader.vue';
import ResultCard from '@/components/ResultCard.vue';
import MainCard from '@/components/MainCard.vue';
import ProductCard from '@/components/ProductCard.vue';
import SmallArrow from '@/assets/icons/SmallArrow.vue'
import OfferCard from '@/components/OfferCard.vue';
import NewsCard from '@/components/NewsCard.vue';
import PartnerCard from '@/components/PartnerCard.vue';
//  fake datas
import { rateData, mainCardData, homeProductData, homeOfferedCardData, homeProjectData, homeNewsData, partnerData } from '@/assets/data/json-data'
//  styles 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

//  variables
const modules = [Navigation, Autoplay, A11y];

//  functions

const onSubmit=()=>{
    alert('Submitted !!!!!')
}


</script>
<template>
    <section>
        <header class="pt-[300px]">
            <div class="container">
                <div class=" relative flex justify-between">
                    <div class="mt-[30px]">
                        <h2 class="text-white-900 text-[50px] leading-[65px] font-bold font-gilroy-bold max-w-[760px] mb-3">
                            Солнечные электростанции
                            под ключ</h2>
                        <p
                            class="max-w-[500px] text-white-900 text-[18px] font-medium font-gilroy-medium leading-[27px] mb-8">
                            Group pants for corporate interim ourselves invite.
                            Crystallize right beef join Activities slipstream shower
                            one socialize back-end cost time eow comes.</p>
                        <BaseButton content="Подробнее" class="home__submit__btn text-white-900 px-[38px]">
                            <Arrow />
                        </BaseButton>
                    </div>
                    <form class="bg-white-900 p-6 rounded-lg max-w-[703px]" @submit.prevent="onSubmit">
                        <h3 class="text-grey-900 text-[32px] leading-[41.6px] font-bold font-gilroy-bold mb-2">Получите
                            консультацию</h3>
                        <p class="text-grey-500 text-[18px] font-medium font-gilroy-medium leading-[27px]">Заполните Простую
                            Форму И Наши Специалисты Свяжутся С Вами В Рабочее Время</p>
                        <ul class="flex flex-col gap-4 mt-6 mb-[31px]">
                            <li><input type="text" placeholder="Полное имя"
                                    class="rounded w-full border border-grey-200 py-[18px] pl-5 outline-blue-500 text-[18px] font-semibold font-gilroy-bold leading-normal text-grey-500 placeholder:text-grey-500" />
                            </li>
                            <li><input type="text" placeholder="Номер телефона"
                                    class="rounded w-full border border-grey-200 py-[18px] pl-5 outline-blue-500 font-semibold font-gilroy-bold leading-normal text-grey-500 placeholder:text-grey-500" />
                            </li>
                            <li><input type="text" placeholder="Сообщение"
                                    class="rounded w-full border border-grey-200 py-[18px] pl-5 outline-blue-500 font-semibold font-gilroy-bold leading-normal text-grey-500 placeholder:text-grey-500" />
                            </li>
                        </ul>
                        <BaseButton content="Получить бесплатную консультацию"
                            class="!w-full home__submit__btn justify-center text-white-900">
                            <Arrow />
                        </BaseButton>
                    </form>
                </div>

            </div>
        </header>
        <div class="bg-grey-100 pb-[120px]  ">
            <div class="container ">
                <div class="pt-[313px] relative">
                    <div class="flex  bg-white-900 p-6 gap-6 rounded absolute left-0 -top-[60px] ">
                        <ResultCard v-for="item in rateData" :key="item.id" :result_content="item.num"
                            :result_category="item.service" />
                    </div>
                    <SectionHeader header__content="Что мы предлагаем"
                        header__desc="Мы предлагаем высококачественную продукцию, качественный сервис и 25 летнюю гарантию на солнечные электростанции" />

                    <div class="flex mt-10 gap-6">
                        <MainCard v-for="item in mainCardData" :key="item.id" :main_card_img="item.main_card_img"
                            :main_small_img="item.main_small_img" :main_card_title="item.main_card_title"
                            :main_card_desc="item.main_card_desc" />
                    </div>
                </div>

            </div>
        </div>
        <!-- end of section предлагаем  -->

        <div class="pb-20 bg-whte-900 pt-[120px]">
            <div class="container">
                <SectionHeader header__content="Гарантия"
                    header__desc="Солнечные решения от компании Archi Holding - это гарантия качества и эффективности на долгий срок. Мы предоставляем гарантию 25 лет на солнечные панели, 10 лет на солнечные инверторы, 10 лет на аккумуляторы, 5 лет на солнечные водонагреватели" />

                <div class="relative my-10">
                    <swiper :slides-per-view="4" :space-between="10" :modules="modules" :loop="true"
                        :autoplay="{ delay: 3500 }" :navigation="{
                            nextEl: '.swiper-next',
                            prevEl: '.swiper-prev',
                        }">
                        <swiper-slide v-for="item in homeProductData" :key="item.id">
                            <div class="h-[545px]">
                                <ProductCard class="w-full" :img_url="item.img_url" :product_title="item.product_title"
                                    :product_desc="item.product_desc" />
                            </div>

                        </swiper-slide>
                    </swiper>
                    <button
                        class="home__slider__btn swiper-prev cursor-pointer  absolute top-[50%] -translate-y-1/2 z-[99] -left-6 w-[60px] h-[60px] rounded-sm flex items-center justify-center"
                        aria-label="button">
                        <SmallArrow />
                    </button>
                    <button
                        class="home__slider__btn swiper-next cursor-pointer absolute top-[50%] -translate-y-1/2 z-[99] -right-6 w-[60px] h-[60px] rounded-sm flex items-center justify-center "
                        aria-label="button">
                        <SmallArrow class="rotate-180" />
                    </button>
                </div>
                <!--  end of slider wrapper  -->
                <div class="flex justify-center ">
                    <BaseButton content="Подробнее" class="home__btn border-2 border-blue-500 text-blue-500 px-[58px] ">
                        <Arrow />
                    </BaseButton>
                </div>
            </div>
        </div>
        <!-- end of Гарантия section -->
        <div class="bg-blue-900 py-[100px]">
            <div class="container">
                <SectionHeader header__content="Наши Преимущества" class="home__header__section !text-white-900"
                    header__desc="Солнечные решения от компании Archi Holding - это гарантия качества и эффективности." />
                <div class="flex items-center gap-6 mt-[90px]">
                    <OfferCard v-for="item in homeOfferedCardData" :key="item.id" :card_header="item.card_header"
                        :card_desc="item.card_desc" :img_url="item.img_url" />
                </div>
            </div>
        </div>
        <!--  end of Преимущества section  -->
        <div class="py-[120px] bg-grey-100">
            <div class="container">
                <SectionHeader header__content="Наша продукция"
                    header__desc="Солнечные решения от компании Archi Holding - это гарантия качества и эффективности на долгий срок. Мы предоставляем гарантию 25 лет на солнечные панели." />

                <div class="relative mt-10">
                    <swiper :slides-per-view="4" :space-between="10" :modules="modules" :loop="true"
                        :autoplay="{ delay: 3500 }" :navigation="{
                            nextEl: '.swiper-next',
                            prevEl: '.swiper-prev',
                        }">
                        <swiper-slide v-for="item in homeProductData" :key="item.id">
                            <div class="h-[545px]">
                                <ProductCard class="w-full" :img_url="item.img_url" :product_title="item.product_title" />
                            </div>

                        </swiper-slide>
                    </swiper>
                    <button
                        class="home__slider__btn  swiper-prev cursor-pointer  absolute top-[50%] -translate-y-1/2 z-[99] -left-6 w-[60px] h-[60px] rounded-sm flex items-center justify-center"
                        aria-label="button">
                        <SmallArrow />
                    </button>
                    <button
                        class="home__slider__btn swiper-next cursor-pointer absolute top-[50%] -translate-y-1/2 z-[99] -right-6 w-[60px] h-[60px] rounded-sm flex items-center justify-center "
                        aria-label="button">
                        <SmallArrow class="rotate-180" />
                    </button>
                </div>
            </div>
        </div>
        <!--  end of продукция section  -->
        <div class="bg-white-900 py-[120px]">
            <div class="container">
                <SectionHeader header__content="Наши Проекты"
                    header__desc="Компания Archi Holding реализовала свыше 700 проектов общей мощностью 1 ГВт по всем регионам Узбекистана. Мы используем самые современные солнечные батареи, которые обладают исключительной эффективностью и позволяют экономить деньги." />

                <div class="relative mt-10 home__project__slider px-1">
                    <swiper :slides-per-view="4" :space-between="24" :modules="modules" :autoplay="{ delay: 2500 }"
                        :navigation="{
                            nextEl: '.swiper-next',
                            prevEl: '.swiper-prev',
                        }">
                        <swiper-slide v-for="item in homeProjectData" :key="item.id">
                            <div
                                class="w-full border-[1.5px] border-grey-200 bg-white-900 rounded-sm p-5 min-h-[142px] max-h-[143px]">
                                <h3 class="text-grey-900 text-[26px] leading-[33.8px] font-bold font-gilroy-bold mb-2 ">{{
                                    item.title }}</h3>
                                <p class="text-grey-500 text-[18px] font-medium font-gilroy-medium leading-[27px]">{{
                                    item.desc }}</p>
                            </div>

                        </swiper-slide>
                    </swiper>
                    <div class="flex w-full items-center justify-center gap-6 mt-8">
                        <button
                            class="project__slider__btn swiper-prev cursor-pointer w-[60px] h-[60px] rounded-sm flex items-center justify-center border-[1.5px] border-grey-200"
                            aria-label="button">
                            <SmallArrow />
                        </button>
                        <button
                            class="project__slider__btn swiper-next cursor-pointer  w-[60px] h-[60px] rounded-sm flex items-center justify-center border-[1.5px] border-grey-200 "
                            aria-label="button">
                            <SmallArrow class="rotate-180" />
                        </button>
                    </div>
                    <div class="pt-[60px]">
                        <h3 class="text-grey-900 text-center text-[40px] font-bold font-gilroy-bold mb-8">Государственное
                            налоговое управление</h3>
                        <div class="grid grid-cols-12 gap-6 max-w-[1138px] mx-auto">
                            <div class="col-span-12 max-w-[1138px] w-full max-h-[540px]">
                                <img src="../assets/images/thumbs.png" alt="img" class="w-full h-full">
                            </div>
                            <div class="col-span-3  max-h-[160px]"><img src="../assets/images/thumbs2.png" alt="img"
                                    class="w-full h-full"></div>
                            <div class="col-span-3  max-h-[160px]"><img src="../assets/images/thumbs3.png" alt="img"
                                    class="w-full h-full"></div>
                            <div class="col-span-3 max-h-[160px]"><img src="../assets/images/thumbs4.png" alt="img"
                                    class="w-full h-full"></div>
                            <div class="col-span-3  max-h-[160px]"><img src="../assets/images/thumbs.png" alt="img"
                                    class="w-full h-full"></div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        <!-- end of project sections -->

        <div class="py-[120px] bg-grey-100">
            <div class="container">
                <SectionHeader header__content="Новости и события"
                    header__desc="Следите за нашими новостями и будьте в курсе наших специальных предложений и последних тенденций использования солнечных энергии в Ташкент и в других регионах страны." />

                <div class="mt-10">
                    <swiper :slides-per-view="4" :space-between="24" :modules="modules" :autoplay="{ delay: 2500 }"
                        :navigation="{
                            nextEl: '.swiper-next',
                            prevEl: '.swiper-prev',
                        }">
                        <swiper-slide v-for="item in homeNewsData" :key="item.id">
                            <NewsCard :img_url="item.img_url" :news_date="item.news_date" :news_title="item.news_title"
                                :news_desc="item.news_desc" />

                        </swiper-slide>
                    </swiper>
                    <div class="flex w-full items-center justify-center gap-6 mt-10">
                        <button
                            class="project__slider__btn swiper-prev cursor-pointer w-[60px] h-[60px] rounded-sm flex items-center justify-center border-[1.5px] border-grey-200"
                            aria-label="button">
                            <SmallArrow />
                        </button>
                        <button
                            class="project__slider__btn swiper-next cursor-pointer  w-[60px] h-[60px] rounded-sm flex items-center justify-center border-[1.5px] border-grey-200 "
                            aria-label="button">
                            <SmallArrow class="rotate-180" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- end of Новости section  -->

        <div class="py-[120px] partner__section">
            <div class="container">
                <SectionHeader header__content="Наши Партнеры" header__desc="Следите за нашими новостями и будьте в курсе наших специальных
            предложений и последних тенденций использования солнечных энергии" />

                <div class=" mt-10">
                    <swiper :slides-per-view="6" :space-between="24" :modules="modules" :autoplay="{ delay: 2500 }"
                        :navigation="{
                            nextEl: '.swiper-next',
                            prevEl: '.swiper-prev',
                        }">
                        <swiper-slide v-for="item in partnerData" :key="item.id">

                            <PartnerCard :img_url="item.img_url" />
                        </swiper-slide>
                    </swiper>
                    <div class="flex w-full items-center justify-center gap-6 mt-10">
                        <button
                            class="project__slider__btn swiper-prev cursor-pointer w-[60px] h-[60px] rounded-sm flex items-center justify-center border-[1.5px] border-grey-200"
                            aria-label="button">
                            <SmallArrow />
                        </button>
                        <button
                            class="project__slider__btn swiper-next cursor-pointer  w-[60px] h-[60px] rounded-sm flex items-center justify-center border-[1.5px] border-grey-200 "
                            aria-label="button">
                            <SmallArrow class="rotate-180" />
                        </button>
                    </div>
                </div>

            </div>
        </div>
        <!-- end of partner section -->
    </section>
</template>
<style scoped>
header {
    background-image: url('../assets/images/home_img.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 920px;
    position: relative;
}

header::before {
    content: ' ';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    background: #022D6A;
    opacity: .6;
}
.home__slider__btn {
    background: linear-gradient(180deg, #3588FE 0%, #1F76F1 100%);
}
.partner__section{
    background: linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);
}

</style>
<style>
.home__submit__btn {
    border-radius: 4px;
    background: linear-gradient(180deg, #3689FF 0%, #2077F2 100%) !important;
}
.home__btn svg path {
    fill: #3689FF;
}

.home__header__section p {
    color: #ffff;
}

.project__slider__btn svg path {
    fill: #3689FF;
}

.home__project__slider .swiper-slide-active div {
    border-color: #3689FF !important;
    background: #F1F4F9;
}
</style>