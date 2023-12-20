
<script setup>
import { RouterLink } from 'vue-router';
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
import SliderThumbs from '@/components/SliderThumbs.vue';
//  fake datas
import { rateData, mainCardData, homeProductData, homeOfferedCardData, homeProjectData, homeNewsData, partnerData, thumbsImages } from '@/assets/data/json-data'
//  styles 
import 'swiper/css';
import 'swiper/css/navigation';


//  variables
const modules = [Navigation, Autoplay, A11y];

//  functions

const onSubmit = () => {
    alert('Submitted !!!!!')
}


</script>
<template>
    <section>
        <header class="pt-32 md:pt-[170px] lg:pt-[220px] xl:pt-[300px]">
            <div class="container">
                <div class=" relative flex flex-col lg:flex-row gap-4 md:gap-4 justify-between">
                    <div class="mt-[30px]">
                        <h2
                            class="text-white-900 text-3xl md:text-4xl lg:text-[50px] lg:leading-[65px] text-center md:text-left  font-bold font-gilroy-bold max-w-[760px] mb-2 md:mb-3">
                            Солнечные электростанции
                            под ключ</h2>
                        <p
                            class="md:max-w-[500px] text-white-900 text-base md:text-[18px] text-center md:text-left font-medium font-gilroy-medium md:leading-[27px] mb-4 md:mb-8">
                            Group pants for corporate interim ourselves invite.
                            Crystallize right beef join Activities slipstream shower
                            one socialize back-end cost time eow comes.</p>
                        <BaseButton :content="$t('btn-content.more_detail')"
                            class="home__submit__btn text-white-900 px-5 w-full justify-center  md:w-[max-content] md:px-[38px]">
                            <Arrow />
                        </BaseButton>
                    </div>
                    <form class="bg-white-900 p-6 rounded-lg max-w-[703px]" @submit.prevent="onSubmit">
                        <h3
                            class="text-grey-900 text-xl md:text-2xl lg:text-[32px] lg:leading-[41.6px] font-bold font-gilroy-bold mb-2">
                            Получите
                            консультацию</h3>
                        <p class="text-grey-500 text-base md:text-[18px] font-medium font-gilroy-medium md:leading-[27px]">
                            Заполните Простую
                            Форму И Наши Специалисты Свяжутся С Вами В Рабочее Время</p>
                        <ul class="flex flex-col gap-4 mt-6 mb-[31px]">
                            <li><input type="text" placeholder="Полное имя"
                                    class="rounded w-full border border-grey-200 py-2 md:py-3 2xl:py-[18px] pl-5 outline-blue-500 text-base md:text-[18px] font-semibold font-gilroy-bold leading-normal text-grey-500 placeholder:text-grey-500" />
                            </li>
                            <li><input type="text" placeholder="Номер телефона"
                                    class="rounded w-full border border-grey-200 py-2 md:py-3 2xl:py-[18px] pl-5 outline-blue-500 text-base md:text-[18px] font-semibold font-gilroy-bold leading-normal text-grey-500 placeholder:text-grey-500" />
                            </li>
                            <li><input type="text" placeholder="Сообщение"
                                    class="rounded w-full border border-grey-200 py-2 md:py-3 2xl:py-[18px] pl-5 outline-blue-500 text-base md:text-[18px] font-semibold font-gilroy-bold leading-normal text-grey-500 placeholder:text-grey-500" />
                            </li>
                        </ul>
                        <BaseButton :content="$t('btn-content.consultation')"
                            class="!w-full home__submit__btn justify-center text-white-900 ">
                            <Arrow />
                        </BaseButton>
                    </form>
                </div>

            </div>
        </header>
        <div class="bg-grey-100 pb-16 md:pb-20 lg:pb-[120px]  ">
            <div class="container ">
                <div class="pt-[313px] relative">
                    <div
                        class="grid grid-cols-2 md:flex w-full  bg-white-900 p-6 gap-6 rounded absolute left-0 -top-[50px] md:top-[-20px] lg:-top-[60px] ">
                        <ResultCard v-for="(item, index) in rateData" :key="item.id" :result_content="item.num"
                            :result_category="item.service" data-aos="fade-right" data-aos-easing="linear"
                            data-aos-duration="900" :data-aos-delay="200 * (index + 1)" />
                    </div>
                    <SectionHeader header__content="Что мы предлагаем"
                        header__desc="Мы предлагаем высококачественную продукцию, качественный сервис и 25 летнюю гарантию на солнечные электростанции"
                        class="mt-5 md:mt-0" />

                    <div class="flex flex-col mt-7 md:mt-10 md:flex-row gap-6">
                        <MainCard v-for="(item, index) in mainCardData" :key="item.id" :main_card_img="item.main_card_img"
                            :main_small_img="item.main_small_img" :main_card_title="item.main_card_title"
                            :route_url="item.route_url" :main_card_desc="item.main_card_desc"
                            :data-aos="[index == 1 ? 'fade-left' : 'fade-right']" data-aos-easing="linear"
                            data-aos-duration="900" :data-aos-delay="200 * (index + 1)" />
                    </div>
                </div>

            </div>
        </div>
        <!-- end of section предлагаем  -->

        <div class="pb-20 bg-whte-900 pt-16 md:pt-[100px] lg:pt-[120px]">
            <div class="container">
                <SectionHeader header__content="Гарантия"
                    header__desc="Солнечные решения от компании Archi Holding - это гарантия качества и эффективности на долгий срок. Мы предоставляем гарантию 25 лет на солнечные панели, 10 лет на солнечные инверторы, 10 лет на аккумуляторы, 5 лет на солнечные водонагреватели" />

                <div class="relative my-7 md:my-10 pl-2 pr-2" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="900"
                    :data-aos-delay="600">
                    <swiper :slides-per-view="4" :space-between="10" :modules="modules" :loop="true"
                        :autoplay="{ delay: 3500 }" :navigation="{
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
                        <swiper-slide v-for="(item, index)  in homeProductData" :key="item.id">
                            <div class="h-[540px] md:h-[545px] lg:h-[560px] ">
                                <ProductCard class="w-full" :img_url="item.img_url" :product_title="item.product_title"
                                    :product_desc="item.product_desc" :slug="`/products/:${index}`" />
                            </div>

                        </swiper-slide>
                    </swiper>
                    <button
                        class="home__slider__btn swiper-prev cursor-pointer  absolute top-[50%] -translate-y-1/2 z-[99] left-0   w-[60px] h-[60px] rounded-sm flex items-center justify-center"
                        aria-label="button">
                        <SmallArrow />
                    </button>
                    <button
                        class="home__slider__btn swiper-next cursor-pointer absolute top-[50%] -translate-y-1/2 z-[99] right-0   w-[60px] h-[60px] rounded-sm flex items-center justify-center "
                        aria-label="button">
                        <SmallArrow class="rotate-180" />
                    </button>
                </div>
                <!--  end of slider wrapper  -->
                <div class="flex justify-center ">
                    <RouterLink to="/products">
                        <BaseButton :content="$t('btn-content.more_detail')"
                            class="home__btn border-2 border-blue-500 text-blue-500 px-[58px] ">
                            <Arrow />
                        </BaseButton>
                    </RouterLink>

                </div>
            </div>
        </div>
        <!-- end of Гарантия section -->
        <div class="bg-blue-900 py-16 md:py-20 lg:py-[100px]">
            <div class="container">
                <SectionHeader header__content="Наши Преимущества" class="home__header__section !text-white-900"
                    header__desc="Солнечные решения от компании Archi Holding - это гарантия качества и эффективности." />
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:max-w-[90%] lg:max-w-full mx-auto lg:flex  gap-10 lg:gap-3 mt-[90px]">
                    <OfferCard v-for="(item, index) in homeOfferedCardData" :key="item.id" :card_header="item.card_header"
                        :card_desc="item.card_desc" :img_url="item.img_url" class="!bg-blue-900"
                        :data-aos="[index == 1 ? 'fade-left' : 'fade-right']" data-aos-easing="linear"
                        data-aos-duration="900" :data-aos-delay="200 * (index + 1)" />
                </div>
            </div>
        </div>
        <!--  end of Преимущества section  -->
        <div class="py-16 md:py-[100px] lg:py-[120px]  bg-grey-100">
            <div class="container" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000"
                :data-aos-delay="600">
                <SectionHeader header__content="Наша продукция"
                    header__desc="Солнечные решения от компании Archi Holding - это гарантия качества и эффективности на долгий срок. Мы предоставляем гарантию 25 лет на солнечные панели." />

                <div class="relative mt-10">
                    <swiper :slides-per-view="4" :space-between="10" :modules="modules" :loop="true" class=""
                        :autoplay="{ delay: 3500 }" :navigation="{
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
                        <swiper-slide v-for="(item, index)  in homeProductData" :key="item.id">
                            <div class="h-[545px] xl:h-[480px]">
                                <ProductCard class="w-full" :img_url="item.img_url" :product_title="item.product_title"
                                    :slug="`/products/:${index}`" />
                            </div>

                        </swiper-slide>
                    </swiper>
                    <button
                        class="home__slider__btn  swiper-prev cursor-pointer  absolute top-[50%] -translate-y-1/2 z-[99] left-0 2xl:-left-2 w-[60px] h-[60px] rounded-sm flex items-center justify-center"
                        aria-label="button">
                        <SmallArrow />
                    </button>
                    <button
                        class="home__slider__btn swiper-next cursor-pointer absolute top-[50%] -translate-y-1/2 z-[99] right-0 2xl:-right-1 w-[60px] h-[60px] rounded-sm flex items-center justify-center "
                        aria-label="button">
                        <SmallArrow class="rotate-180" />
                    </button>
                </div>
            </div>
        </div>
        <!--  end of продукция section  -->
        <div class="bg-white-900 py-16 md:py-[100px] lg:py-[120px]">
            <div class="container">
                <SectionHeader header__content="Наши Проекты"
                    header__desc="Компания Archi Holding реализовала свыше 700 проектов общей мощностью 1 ГВт по всем регионам Узбекистана. Мы используем самые современные солнечные батареи, которые обладают исключительной эффективностью и позволяют экономить деньги." />

                <div class="relative mt-10 home__project__slider px-1">
                    <swiper :slides-per-view="4" :space-between="24" :modules="modules" :autoplay="{ delay: 2500 }"
                        :navigation="{
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
                        <h3 class="text-grey-900 text-center text-2xl md:text-3xl lg:text-[40px] font-bold font-gilroy-bold mb-8">Государственное
                            налоговое управление</h3>
                        <SliderThumbs :images="thumbsImages" header_slider="home__thumbs__slider__top" bottom_slider="home__thumbs__slider__bottom"  :is_navigation="false"/>
                    </div>

                </div>

            </div>
        </div>
        <!-- end of project sections -->

        <div class="py-16 md:py-[100px] lg:py-[120px] bg-grey-100">
            <div class="container">
                <SectionHeader header__content="Новости и события"
                    header__desc="Следите за нашими новостями и будьте в курсе наших специальных предложений и последних тенденций использования солнечных энергии в Ташкент и в других регионах страны." />

                <div class="mt-10">
                    <swiper :slides-per-view="4" :space-between="24" :modules="modules" :autoplay="{ delay: 2500 }"
                        :navigation="{
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
                        <swiper-slide v-for="(item, index) in homeNewsData" :key="item.id">
                            <NewsCard :img_url="item.img_url" :news_date="item.news_date" :news_title="item.news_title"
                                :news_desc="item.news_desc" :slug="`/blog/:${index}`" />

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
                        }"
                        :breakpoints="{
                            350: {
                              slidesPerView: 1,
                            },
                            576: {
                              slidesPerView: 2,
                            },
                            768: {
                              slidesPerView: 3,
                              spaceBetween: 20,
                            },
                            991: {
                                slidesPerView: 4,
                                spaceBetween: 15,
                              },
                              1200: {
                                slidesPerView: 5,
                                spaceBetween: 20,
                              },
                              1320: {
                                slidesPerView: 6,
                                spaceBetween: 24,
                              }
                          }"
                        >
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

.partner__section {
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

.home__thumbs__slider__top {
    margin-bottom: 24px;
    width: 100%;
    max-width: 1138px;
    height: 540px;
}

.home__thumbs__slider__top img {
    width: 100%;
    height: 100%;
}

.home__thumbs__slider__bottom {
    width: 100%;
    max-width: 1138px;
}

.home__thumbs__slider__bottom .swiper-slide {
    width: 100%;
    height: 160px;
    max-width: 266px;
    border: 3px solid #fff;
    transition: all linear .5s;
}

.home__thumbs__slider__bottom .swiper-slide img {
    width: 100%;
    height: 100%;
}

.home__thumbs__slider__bottom .swiper-slide-thumb-active {
    border-color: #3689FF;
}

@media screen and (min-width:350px) and (max-width:776px){
    .home__thumbs__slider__top {
        max-width: 1138px;
        height: 450px;
    }
}


</style>