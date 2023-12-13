
<script setup>
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
//  fake datas
import { rateData, mainCardData, homeProductData } from '@/assets/data/json-data'
//  styles 
import 'swiper/css';
import 'swiper/css/navigation';



//  variables
const modules = [Navigation, Autoplay, A11y]


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
                    <form class="bg-white-900 p-6 rounded-lg max-w-[703px]">
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
                            class="!w-full home__btn justify-center text-white-900">
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
                            <div class="h-[545px] border border-white-900">
                                <ProductCard class="w-full" :img_url="item.img_url" :product_title="item.product_title"
                                    :product_desc="item.product_desc" />
                            </div>

                        </swiper-slide>
                    </swiper>
                    <button
                        class="swiper-prev cursor-pointer  absolute top-[50%] -translate-y-1/2 z-[999] -left-6 w-[60px] h-[60px] rounded-sm flex items-center justify-center"
                        aria-label="button">
                        <SmallArrow />
                    </button>
                    <button
                        class="swiper-next cursor-pointer absolute top-[50%] -translate-y-1/2 z-[999] -right-6 w-[60px] h-[60px] rounded-sm flex items-center justify-center "
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

.home__submit__btn {
    border-radius: 4px;
    background: linear-gradient(180deg, #3689FF 0%, #2077F2 100%) !important;
}

.swiper-next,
.swiper-prev {
    background: linear-gradient(180deg, #3588FE 0%, #1F76F1 100%);
}
</style>
<style>
.home__btn  svg path{
    fill:#3689FF;
}
</style>