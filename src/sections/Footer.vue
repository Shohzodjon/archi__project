
<script setup>
import { RouterLink } from 'vue-router'
import logo from "../assets/images/logo.png";
import Phone from "../assets/icons/Phone.vue";
import Envelop from "../assets/icons/Envelop.vue";
import Location from "../assets/icons/Location.vue";
import BaseButton from '@/components/BaseButton.vue';
import Arrow from "../assets/icons/Arrow.vue";
import Telegram from "../assets/icons/Telegram.vue";
import Facebook from "../assets/icons/Facebook.vue";
import Instagram from "../assets/icons/Instagram.vue";
</script>
<template>
    <footer class="bg-blue-900 pt-[60px] pb-5">
        <div class="container">
            <div class="flex flex-col md:flex-row md:flex-wrap md:justify-between gap-2 md:gap-4">
                <ul class="">
                    <li class="mb-4 lg:mb-8">
                        <RouterLink to="/"><img :src="logo" alt="logo img" class="w-20 md:w-24 lg:w-24 max-w-[156.6px] max-h-[60px]">
                        </RouterLink>
                    </li>
                    <li>
                        <p class="text-white-900 text-base lg:text-[18px] font-medium font-gilroy-medium leading-[27px]">© 2023 Авторское
                            Право <br />
                            Archi Holding company</p>
                    </li>
                </ul>
                <!-- end of first list -->
                <ul class=" flex flex-col gap-1 md:gap-2 lg:gap-4">
                    <li class="md:mb-2"><span
                            class=" text-[#BBD0EF] uppercase text-sm md:text-base leading-[20.8px] font-semibold ">{{$t('router-link.sections')}}</span></li>
                    <li>
                        <RouterLink to="/buisness" class="text-base md:text-[18px] text-white-900 font-medium leading-[23.4px]">
                            {{ $t('router-link.buisnesss') }}
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/individual" class="text-base md:text-[18px] text-white-900 font-medium leading-[23.4px]">
                            {{ $t('router-link.individual') }}
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/products" class="text-base md:text-[18px] text-white-900 font-medium leading-[23.4px]">{{
                            $t('router-link.product') }}
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/projects" class="text-base md:text-[18px] text-white-900 font-medium leading-[23.4px]">{{
                            $t('router-link.project') }}
                        </RouterLink>
                    </li>
                </ul>
                <!-- end of rasdeli list -->
                <ul class=" flex flex-col md:flex-col gap-1 md:gap-4 md:mt-[45px]">
                    <li>
                        <RouterLink to="/blog" class="text-base md:text-[18px] text-white-900 font-medium leading-[23.4px]">{{
                            $t('router-link.blog') }}</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/company" class="text-base md:text-[18px] text-white-900 font-medium leading-[23.4px]">{{
                            $t('router-link.about') }}
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/contact" class="text-base md:text-[18px] text-white-900 font-medium leading-[23.4px]">{{
                            $t('router-link.contact') }}
                        </RouterLink>
                    </li>
                </ul>
                <!-- end of blog list -->
                <ul class="flex flex-col gap-1 md:gap-4">
                    <li><span class=" text-[#BBD0EF] uppercase text-sm md:text-base leading-[20.8px] font-semibold ">{{
                        $t('router-link.contact') }}</span>
                    </li>
                    <li><a href="+998 90 124 74-74" class="flex items-center gap-[12px]">
                            <Phone /> <span class="text-base md:text-[18px] text-white-900 font-meduim leading-[27px]">+998 90 124
                                74-74</span>
                        </a></li>
                    <li><a href="mailto:archiholding@info.uz" class="flex items-center gap-[12px]">
                            <Envelop /> <span
                                class="text-base md:text-[18px] text-white-900 font-meduim leading-[27px]">archiholding@info.uz</span>
                        </a></li>
                    <a href="#" class="flex items-center gap-[12px]">
                        <Location /> <span class="text-base md:text-[18px] text-white-900 font-meduim leading-[27px]">Ташкент,
                            Мирабадский район <br/>
                            Фаргона Йули 222/5</span>
                    </a>
                </ul>
                <!-- end of contact list -->

            </div>
            <div class="h-[1px] bg-white-900 opacity-40 mt-[60px] mb-6"></div>
            <!-- footer top -->
            <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-3 md:gap-4 lg:gap-5">
                <p class="text-base md:text-[18px] leading-[27px] font-medium text-white-900">Подпишитесь на нашу рассылку новостей
                    <br class="hidden md:block"/>
                    и событий прямо сейчас, чтобы быть в курсе
                </p>

                <div class="flex flex-col lg:flex-row md:items-center gap-2 xl:gap-6">
                    <input type="email" required placeholder="Электронной почты"
                        class="footer__input w-full md:w-[350px] lg:w-[400px] xl:w-[500px] rounded py-2 md:py-2 lg:py-3 2xl:py-4 pl-3 md:pl-5  text-base md:text-[18px] text-white-900 font-medium placeholder:text-white-900" />
                    <BaseButton class="footer__btn md:px-11 text-white-900 text-[18px] font-semibold justify-center md:w-full lg:w-[max-content]"
                        :content="$t('btn-content.subscribe-news')">
                        <Arrow />
                    </BaseButton>
                </div>
            </div>
            <!-- powered by OSG -->
            <div class="h-[1px] bg-white-900 opacity-40 mt-[22px] mb-5"></div>
            <div class="flex items-center justify-between">
                <p class="text-white-900 text-base md:text-[18px] leading-[23.4px] font-medium"> Разработчик сайта: <span
                        class="font-semibold font-gilroy-bold">Online Service Group</span></p>
                <ul class="flex items-center gap-4">
                    <li><a href="#"></a>
                        <Telegram />
                    </li>
                    <li><a href="#"></a>
                        <Facebook />
                    </li>
                    <li><a href="#"></a>
                        <Instagram />
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>
<style scoped>
.footer__btn {
    background: linear-gradient(180deg, #3689FF 0%, #2077F2 100%);
}

.footer__input {
    border: 1px solid rgba(255, 255, 255, 0.40);
    outline: none;
    background: none;
}
</style>