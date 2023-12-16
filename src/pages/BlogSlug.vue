
<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';
import Clock from '@/assets/icons/Clock.vue';
import EyeIcon from '@/assets/icons/EyeIcon.vue';
import ShareIcon from '@/assets/icons/ShareIcon.vue';
import SectionHeaderComp from '@/sections/SectionHeaderComp.vue';
import SectionHeader from '@/components/SectionHeader.vue';
import NewsCard from '@/components/NewsCard.vue';
import SmallArrow from '@/assets/icons/SmallArrow.vue';
import slug_img from '../assets/images/news1.png'
import {homeNewsData} from '@/assets/data/json-data'

const modules = [Navigation, Autoplay];
</script>
<template>
    <section>
        <SectionHeaderComp title="О компании" />

        <div class="pt-[60px] pb-[120px]">
            <div class="container">
                <div class="max-w-[1138px] mx-auto mb-[120px]">
                    <h2 class="text-grey-900 text-[32px] mb-5 leading-[41.6px] font-bold font-gilroy-bold ">Более 400 млрд сумов направят на установку солнечных панелей в госорганизациях Ташкента</h2>
           
                    <ul class="flex items-center gap-12 mb-5">
                        <li class="flex items-center gap-[6px] ">
                            <Clock /><span class="text-[18px] font-medium font-gilroy-medium text-grey-500 leading-[27px] ">22.02.2023</span>
                        </li>
                        <li class="flex items-center gap-[6px] ">
                            <EyeIcon /><span class="text-[18px] font-medium font-gilroy-medium text-grey-500 leading-[27px] ">414</span>
                        </li>
                        <li class="flex items-center gap-[6px] ">
                            <ShareIcon /><span class="text-[18px] font-medium font-gilroy-medium text-grey-500 leading-[27px] ">Поделиться</span>
                        </li>
                    </ul>
    
                    <div class="w-full h-[550px] mb-8">
                        <img :src="slug_img" alt="img" class="w-full max-w-[1138px] h-full">
                    </div>
           
                    <p class="text-grey-500 text-xl font-medium font-gilroy-medium leading-[30px]"> Свыше 1000 бюджетных организаций в Ташкенте планируется оборудовать солнечными панелями. На это будет
                        направлено более 400 млрд сумов.
                        В Ташкенте на установку солнечных панелей в 1063 организациях, финансируемых из бюджетов города и
                        районов (детские сады, школы, больницы, бюджетные организации), планируется направить 390 млрд сумов.
                        Это предусмотрено решением столичного кенгаша народных депутатов от 20 февраля.
                        Кроме того, за счёт ссуды, выделяемой на эти цели из республиканского бюджета в столичный, 11 районным
                        хокимиятам будет предоставлено 7,46 млрд сумов, 13 органам прокуратуры районов и города — 6,98 млрд
                        сумов, 16 отделам внутренних дел и ГУВД — 11,16 млрд сумов. Всего 40 организаций получат 25,6 млрд
                        сумов.
                        Указанные расходы планируется поэтапно покрыть за счёт дополнительных источников доходов местного
                        бюджета Ташкента в 2023—2024 годах.
                    8 февраля президент Узбекистана Шавкат Мирзиёев сообщил, что на внедрение возобновляемых источников
                    энергии в Ташкенте планируется направить 1 млрд долларов. В частности, на зданиях многоэтажных жилых
                    домов, объектов социальной сферы, государственных органов и частных предприятий, территории промышленных
                    зон, автопарковок и крупных водных сооружений будут установлены солнечные панели.
                    16 февраля президент подписал постановление об ускорении внедрения возобновляемых источников энергии и
                    энергосберегающих технологий в 2023 году. Документ вводит с 1 мая требование установки солнечных панелей
                    на не менее 50% свободной части крыши сдаваемых в эксплуатацию многоэтажных жилых домов.</p>
                </div>
       
                <SectionHeader header__content="Похожие новости"/>
                <div class="mt-10">
                    <swiper :slides-per-view="4" :space-between="24" :modules="modules" :autoplay="{ delay: 2500 }"
                        :navigation="{
                            nextEl: '.swiper-next',
                            prevEl: '.swiper-prev',
                        }">
                        <swiper-slide v-for="(item,index)  in homeNewsData" :key="item.id">
                            <NewsCard :img_url="item.img_url" :news_date="item.news_date" :news_title="item.news_title"
                                :news_desc="item.news_desc" :slug="`/blog:${index}`"/>

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
</section></template>