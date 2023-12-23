<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink, useRoute } from "vue-router";
import Telegram from "../assets/icons/Telegram.vue";
import Facebook from "../assets/icons/Facebook.vue";
import Instagram from "../assets/icons/Instagram.vue";
import Phone from "../assets/icons/Phone.vue";
import Envelop from "../assets/icons/Envelop.vue";
import logo from "../assets/images/logo.png";
import BaseButton from "../components/BaseButton.vue";
import Arrow from "../assets/icons/Arrow.vue";
import Menu from "@/assets/icons/Menu.vue";
import Close from "@/assets/icons/Close.vue";
let currentLang = localStorage.getItem("locale") || "uz";


const menuData = ref(null)
onMounted(() => {
  fetch('https://admin.archi.uz/api/menu')
    .then(response => response.json())
    .then(data => menuData.value = data.data)
    .catch(error => console.error('Error:', error));
})

const route = useRoute();
const changeLang = (e) => {
  if (currentLang !== e.target.lang) {
    currentLang = e.target.lang;
    localStorage.setItem("locale", e.target.lang);
    location.reload();
  }
}

window.addEventListener("scroll", function () {
  let topVal = window.pageYOffset;
  let navbarBottom = document.querySelector('.navbar__bottom');
  let navbarBottomLine = document.querySelector('.navbar__bottom__line');
  if (route.path != '/') return;
  if (topVal > 200) {
    navbarBottom.classList.add('!bg-[#154FA1]');
    navbarBottomLine.classList.add('hidden');
  } else {
    navbarBottom.classList.remove('!bg-[#154FA1]');
    navbarBottomLine.classList.remove('hidden');
  }
});
const show = ref(false);
const toggleFunc = () => {
  show.value = !show.value
}
</script>
<template>
  <nav class="fixed top-0 left-0 right-0 w-full z-[999]">
    <div class="bg-blue-800">
      <div class="container">
        <div class="flex items-center justify-between py-[13px]">
          <ul class="flex items-center gap-4">
            <li>
              <a href="https://telegram.org">
                <Telegram />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <Instagram />
              </a>
            </li>
          </ul>
          <!--  end of social media -->
          <ul class=" hidden md:flex items-center gap-8">
            <li>
              <a href="+998 90 124 74-74" class="flex items-center gap-2">
                <Phone />
                <span class="font-medium text-white-900 text-base lg:text-[18px] lg:leading-[23.4px]">+998 90 124
                  74-74</span>
              </a>
            </li>
            <li>
              <a href="mailto:archiholding@info.uz" class="flex items-center gap-2">
                <Envelop />
                <span
                  class="text-white-900 font-gilroy-meduim font-medium text-base lg:text-[18px] lg:leading-[23.4px]">archiholding@info.uz
                </span>
              </a>
            </li>
          </ul>
          <!-- end contact -->
          <ul class="flex items-center gap-2">
            <li @click="changeLang" lang="ru"
              class="opacity-80 text-white-900 text-base lg:text-[18px] font-gilroy-medium font-medium leading-normal cursor-pointer px-2 py-[2px] rounded-sm lang__link ">
              Ru
            </li>
            <li>
              <span class="block h-5 w-[1px] bg-white-900 opacity-30"></span>
            </li>
            <li @click="changeLang" lang="uz"
              class="opacity-80 text-white-900 text-base lg:text-[18px] font-gilroy-medium font-medium leading-normal cursor-pointer px-2 py-[2px] rounded-sm lang__link ">
              O'z
            </li>
            <li>
              <span class="block h-5 w-[1px] bg-white-900 opacity-30"></span>
            </li>
            <li @click="changeLang" lang="en"
              class="opacity-80 text-white-900 text-base lg:text-[18px] font-gilroy-medium font-medium leading-normal cursor-pointer px-2 py-[2px] rounded-sm lang__link">
              Eng
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- navbar header -->
    <!--  " -->
    <div class="py-4 md:py-5 lg:py-7 navbar__bottom !bg-[#154FA1]" :class="[route.path == '/' ? '' : '!bg-[#154FA1]']">
      <div class="container">
        <div class="flex items-center justify-between">
          <RouterLink to="/"><img :src="logo" alt="logo img" class="w-20 md:w-24 lg:w-24 max-w-[156.6px] max-h-12" />
          </RouterLink>
          <!-- begin router links  -->
          <ul class="hidden lg:flex items-center gap-5 xl:gap-10">
            <li v-for="menu in menuData" :key="menu.id">
              <RouterLink :to="'/' + menu.url"
                class="text-white-900 text-base xl:text-[18px] leading-[23.4px] font-medium font-gilroy-medium">
                {{ menu.title }}</RouterLink>
            </li>
          </ul>
          <!--  end of router link -->
          <div>
            <BaseButton :content="$t('btn-content.submit')"
              class="nav__btn  lg:py-2 lg:px-3  xl:px-5 2xl:px-[38px] text-white-900 hidden lg:flex">
              <Arrow />
            </BaseButton>
            <Menu class="cursor-pointer block lg:hidden" @click="toggleFunc" />
          </div>
        </div>
        <div class="navbar__bottom__line w-full h-[1.5px] bg-[rgba(255,255,255,.3)] mt-4 xl:mt-7 relative z-[999] hidden"
          :class="[route.path == '/' ? '' : 'hidden']"></div>
      </div>
    </div>
    <!-- end of navbar bottom -->
  </nav>
  <div class="fixed flex lg:hidden justify-end top-0 w-full h-full left-0 z-[9999] bg-[rgba(13,64,136,0.4)] "
    @click="toggleFunc" :class="[show ? 'active__responsive' : 'unactive__responsive']">
    <ul class="bg-white-900 pt-20 pb-6 pl-6 pr-4 flex flex-col gap-2 w-60 relative">
      <li v-for="menu in menuData" :key="menu.id">
        <RouterLink :to="'/'+menu.url"
          class="text-blue-500 text-base xl:text-[18px] leading-[23.4px] font-medium font-gilroy-medium responsive__link">
          {{ menu.title }}</RouterLink>
      </li>
      <li class="absolute top-7 right-7 cursor-pointer responsive__link" @click.stop="toggleFunc">
        <Close />
      </li>
    </ul>
  </div>
</template>
<style scoped>
.nav__btn {
  background: linear-gradient(180deg, #3689ff 0%, #2077f2 100%);
}

.active__responsive {
  transform: translateX(0%);
  opacity: 1;
  transition: all .7s linear;
}

.unactive__responsive {
  transform: translateX(100%) !important;
  opacity: 0;
  transition: all .7s linear;
}
</style>
