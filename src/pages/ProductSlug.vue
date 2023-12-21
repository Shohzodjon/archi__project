
<script setup>
import{reactive} from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay, A11y } from 'swiper/modules';
import { useRoute } from 'vue-router';
import SectionHeaderComp from '@/sections/SectionHeaderComp.vue';
import SectionHeader from '@/components/SectionHeader.vue';
import DashedLine from '@/assets/icons/DashedLine.vue';
import BaseButton from '@/components/BaseButton.vue';
import TabWrapper from '@/components/TabWrapper.vue';
import ProductCard from '@/components/ProductCard.vue';
import SmallArrow from '@/assets/icons/SmallArrow.vue';

import 'swiper/css';
import 'swiper/css/navigation';

import { homeProductData, productTech } from '@/assets/data/json-data';

const modules = [Navigation, Autoplay, A11y];

const route = useRoute();
const id = route.params.id;
const data =reactive([
    {
        label: 'Продукты',
        url: '/products'
    }
]);
    homeProductData.forEach(item => {
    if (item.id == id.substring(1,2)) {
        data.push({
            label: item.product_title,
            url: ''
        })
    }

})

</script>

<template>
    <section>

        <SectionHeaderComp :bread-data="data" />
        <div class="pb-[120px] pt-[60px]">
            <div class="container">
                <div class="flex gap-6 justify-between items-start">
                    <div class=" flex gap-5">
                        <ul class="flex flex-col gap-5">
                            <li class="w-20 h-20 border border-grey-200 rounded"><img
                                    src="../assets//images/solar_panel2.png" alt="solar panel" class="w-full h-full"></li>
                            <li class="w-20 h-20 border border-grey-200 rounded"><img
                                    src="../assets//images/solar_panel3.png" alt="solar panel" class="w-full h-full"></li>
                            <li class="w-20 h-20 border border-grey-200 rounded"><img
                                    src="../assets//images/solar_panel2.png" alt="solar panel" class="w-full h-full"></li>
                            <li class="w-20 h-20 border border-grey-200 rounded"><img
                                    src="../assets//images/solar_panel3.png" alt="solar panel" class="w-full h-full"></li>
                        </ul>
                        <div class="w-[457px] h-[457px] border border-grey-200 rounded">
                            <img src="../assets/images/solar_panel.png" alt="solar panel" class="w-full">
                        </div>
                    </div>
                    <!--  end of right sidebar -->
                    <div class="">
                        <ul class="flex-1 flex flex-col gap-5 max-w-[630px]">
                            <li class="flex items-center gap-[10px]" v-for="item in productTech" :key="item.id">
                                <span class="text-grey-500 text-xl leading-[30px] font-medium font-gilroy-medium"
                                    v-html="item.dteail"></span>
                                <DashedLine class="flex-1" /> <span
                                    class="text-grey-900 text-xl leading-[30px] font-bold font-gilroy-bold">{{ item.property
                                    }}</span>
                            </li>

                        </ul>
                    </div>
                    <!--  end of main sidebar -->
                    <div class="flex-1 max-w-[485px] border border-grey-200 rounded p-6">
                        <div class="w-full flex items-center justify-between">
                            <h4 class="text-blue-500 text-[28px] font-extrabold font-gilroy-bold leading-[42px] ">110 000
                                000 СУМ
                            </h4>
                            <span
                                class="text-grey-600 text-xl leading-[30px] font-semibold font-gilroy-bold line-through">135
                                000 000 СУМ</span>
                        </div>
                        <div class="h-[1.5px] bg-grey-200 w-full my-6"></div>
                        <BaseButton :content="$t('btn-content.order')" class="product__slug__button" />
                        <BaseButton :content="$t('btn-contnent.share')" class="product__slug__button2" />
                    </div>
                    <!--  end of right sidebar -->
                </div>
                <div class="line bg-grey-200 h-[1.5px] w-full max-w-[1211px] my-[50px]"></div>
                <!--  end of header -->

                <div class="mb-[123px]">
                    <TabWrapper>
                        <template #product-desc>
                            <h3 class="text-grey-900 text-xl leading-[30px] font-bold font-gilroy-bold">Эффективность</h3>

                            <p class="text-grey-500 text-xl font-medium font-gilroy-medium leading-[150%] ">
                                Монокристаллическая солнечная панель номинальной мощностью 450 Вт.Эти модели солнечных
                                систем
                                обеспечивают высокую энергоэффективность благодаря своей уникальной конструкции. Солнечная
                                панель
                                разделена на две части: даже если одна часть панели затенена, другая продолжит работу.</p>
                            <br>
                            <h3 class="text-grey-900 text-xl leading-[30px] font-bold font-gilroy-bold">Стабильная гарантия
                            </h3>
                            <p class="text-grey-500 text-xl font-medium font-gilroy-medium leading-[150%] ">Представленные
                                солнечные панели производятся в Армении опытными профессионалами на высочайшем
                                техническом производстве. Наши солнечные системы имеют международные сертификаты CE, EAC,
                                IEC,
                                UL,
                                PID и проходят соответствующий контроль качества на каждом этапе.SOLARA обеспечивает высокое
                                качество и бесперебойную работу продукта, предоставляя гарантию на 25 лет.Мы гарантируем
                                эффективность солнечных панелей на протяжении всего жизненного цикла.</p>
                            <br>
                            <h3 class="text-grey-900 text-xl leading-[30px] font-bold font-gilroy-bold">Надежный партнер
                            </h3>
                            <p class="text-grey-500 text-xl font-medium font-gilroy-medium leading-[150%] ">
                                Квалифицированный персонал SOLARA готов выполнить проект любой сложности, в срок и в полном
                                объеме.
                            </p>
                        </template>
                        <template #product-tech>
                            <div class="flex items-center gap-[60px]">
                                <div class="max-w-[576px]">
                                    <h5 class="text-grey-900 text-2xl font-bold leading-[31.2px] font-gilroy-bold mb-4">Тех.
                                        описание</h5>
                                    <ul class="flex-1 flex flex-col gap-[10px] ">
                                        <li class="flex items-center gap-[10px]" v-for="item in productTech" :key="item.id">
                                            <span
                                                class="text-grey-500 text-xl leading-[30px] font-medium font-gilroy-medium"
                                                v-html="item.dteail"></span>
                                            <DashedLine class="flex-1" />
                                            <span class="text-grey-900 text-xl leading-[30px] font-bold font-gilroy-bold">{{
                                                item.property }}</span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="max-w-[576px]">
                                    <h5 class="text-grey-900 text-2xl font-bold leading-[31.2px] font-gilroy-bold mb-4">
                                        Способ упаковки</h5>
                                    <ul class="flex-1 flex flex-col gap-[10px] max-w-[576px]">
                                        <li class="flex items-center gap-[10px]" v-for="item in productTech" :key="item.id">
                                            <span
                                                class="text-grey-500 text-xl leading-[30px] font-medium font-gilroy-medium"
                                                v-html="item.dteail"></span>
                                            <DashedLine class="flex-1" /> <span
                                                class="text-grey-900 text-xl leading-[30px] font-bold font-gilroy-bold">{{
                                                    item.property }}</span>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                        </template>
                    </TabWrapper>
                </div>
                <SectionHeader header__content="Другие продукты" />
                <div class=" mt-10">
                    <swiper :slides-per-view="4" :space-between="10" :modules="modules" :loop="true"
                        :autoplay="{ delay: 3500 }" :navigation="{
                            nextEl: '.swiper-next',
                            prevEl: '.swiper-prev',
                        }">
                        <swiper-slide v-for="(item, index)  in homeProductData" :key="item.id">
                            <div class="h-[545px]">
                                <ProductCard class="w-full" :img_url="item.img_url" :product_title="item.product_title"
                                    :slug="`/product/:${index}`" />
                            </div>
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
            <!--  end of tab component -->
        </div>
    </section>
</template>
<style>
.product__slug__button {
    border-radius: 4px;
    background: linear-gradient(180deg, #3689FF 0%, #2077F2 100%);
    width: 100% !important;
    justify-content: center;
    margin-bottom: 18px;
}

.product__slug__button span {
    color: #fff;
}

.product__slug__button2 {
    border-radius: 4px;
    border: 1px solid #3689FF;
    background: #FFF;
    width: 100%;
    justify-content: center;

}

.product__slug__button2 span {
    color: #3689FF;
}</style>