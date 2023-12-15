
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
            <div class="flex justify-between ">
                <ul class="">
                    <li class="mb-8">
                        <RouterLink to="/"><img :src="logo" alt="logo img" class="max-w-[156.6px] max-h-[60px]">
                        </RouterLink>
                    </li>
                    <li>
                        <p class="text-white-900 text-[18px] font-medium font-gilroy-medium leading-[27px]">© 2023 Авторское
                            Право <br />
                            Archi Holding company</p>
                    </li>
                </ul>
                <!-- end of first list -->
                <ul class=" flex flex-col gap-4">
                    <li class="mb-2"><span
                            class=" text-[#BBD0EF] uppercase text-base leading-[20.8px] font-semibold ">разделы</span></li>
                    <li>
                        <RouterLink to="/buisness" class="text-[18px] text-white-900 font-medium leading-[23.4px]">Для бизнеса
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/individual" class="text-[18px] text-white-900 font-medium leading-[23.4px]">Частным лицам
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/products" class="text-[18px] text-white-900 font-medium leading-[23.4px]">Продукты
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/projects" class="text-[18px] text-white-900 font-medium leading-[23.4px]">Проекты
                        </RouterLink>
                    </li>
                </ul>
                <!-- end of rasdeli list -->
                <ul class=" flex flex-col gap-4 mt-[45px]">
                    <li>
                        <RouterLink to="/blog" class="text-[18px] text-white-900 font-medium leading-[23.4px]">Блог</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/company" class="text-[18px] text-white-900 font-medium leading-[23.4px]">О компании
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/contact" class="text-[18px] text-white-900 font-medium leading-[23.4px]">Контакты
                        </RouterLink>
                    </li>
                </ul>
                <!-- end of blog list -->
                <ul class="flex flex-col gap-4">
                    <li><span class=" text-[#BBD0EF] uppercase text-base leading-[20.8px] font-semibold ">Контакт</span>
                    </li>
                    <li><a href="+998 90 124 74-74" class="flex items-center gap-[12px]">
                            <Phone /> <span class="text-[18px] text-white-900 font-meduim leading-[27px]">+998 90 124
                                74-74</span>
                        </a></li>
                    <li><a href="mailto:archiholding@info.uz" class="flex items-center gap-[12px]">
                            <Envelop /> <span
                                class="text-[18px] text-white-900 font-meduim leading-[27px]">archiholding@info.uz</span>
                        </a></li>
                    <a href="#" class="flex items-center gap-[12px]">
                        <Location /> <span class="text-[18px] text-white-900 font-meduim leading-[27px]">Ташкент,
                            Мирабадский район, <br />
                            Фаргона Йули 222/5</span>
                    </a>
                </ul>
                <!-- end of contact list -->

            </div>
            <div class="h-[1px] bg-white-900 opacity-40 mt-[60px] mb-6"></div>
            <!-- footer top -->
            <div class="flex justify-between items-center">
                <p class="text-[18px] leading-[27px] font-medium text-white-900">Подпишитесь на нашу рассылку новостей
                    <br />
                    и событий прямо сейчас, чтобы быть в курсе</p>

                <div class="flex items-center gap-6 ">
                    <input type="email" required placeholder="Электронной почты"
                        class="footer__input  w-[500px] rounded py-[18px] pl-5 text-[18px] text-white-900 font-medium placeholder:text-white-900" />
                    <BaseButton class="footer__btn px-11 text-white-900 text-[18px] font-semibold"
                        content="Подписаться на рассылку">
                        <Arrow />
                    </BaseButton>
                </div>
            </div>
            <!-- powered by OSG -->
            <div class="h-[1px] bg-white-900 opacity-40 mt-[22px] mb-5"></div>
            <div class="flex items-center justify-between">
                <p class="text-white-900 text-[18px] leading-[23.4px] font-medium"> Разработчик сайта: <span
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
}</style>