<script setup>
import { RouterLink, useRoute } from "vue-router";
import Telegram from "../assets/icons/Telegram.vue";
import Facebook from "../assets/icons/Facebook.vue";
import Instagram from "../assets/icons/Instagram.vue";
import Phone from "../assets/icons/Phone.vue";
import Envelop from "../assets/icons/Envelop.vue";
import logo from "../assets/images/logo.png";
import BaseButton from "../components/BaseButton.vue";
import Arrow from "../assets/icons/Arrow.vue";
let currentLang = localStorage.getItem("locale") || "uz";
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


</script>
<template>
  <nav class="fixed top-0 left-0 right-0 w-full z-[999]">
    <div class="bg-blue-800">
      <div class="container">
        <div class="flex items-center justify-between py-[13px]">
          <ul class="flex items-center gap-4">
            <li>
              <a href="#">
                <Telegram />
              </a>
            </li>
            <li>
              <a href="#">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="#">
                <Instagram />
              </a>
            </li>
          </ul>
          <!--  end of social media -->
          <ul class="flex items-center gap-8">
            <li>
              <a href="+998 90 124 74-74" class="flex items-center gap-2">
                <Phone />
                <span class="font-medium text-white-900 text-[18px] leading-[23.4px]">+998 90 124 74-74</span>
              </a>
            </li>
            <li>
              <a href="mailto:archiholding@info.uz" class="flex items-center gap-2">
                <Envelop />
                <span
                  class="text-white-900 font-gilroy-meduim font-medium text-[18px] leading-[23.4px]">archiholding@info.uz
                </span>
              </a>
            </li>
          </ul>
          <!-- end contact -->
          <ul class="flex items-center gap-2">
            <li @click="changeLang" lang="ru"
              class="opacity-80 text-white-900 text-[18px] font-gilroy-medium font-medium leading-normal cursor-pointer px-2 py-[2px] border border-white-900 rounded-sm lang__link ">
              Ru
            </li>
            <li>
              <span class="block h-5 w-[1px] bg-white-900 opacity-30"></span>
            </li>
            <li @click="changeLang" lang="uz"
              class="opacity-80 text-white-900 text-[18px] font-gilroy-medium font-medium leading-normal cursor-pointer px-2 py-[2px] rounded-sm lang__link ">
              O'z
            </li>
            <li>
              <span class="block h-5 w-[1px] bg-white-900 opacity-30"></span>
            </li>
            <li @click="changeLang" lang="en"
              class="opacity-80 text-white-900 text-[18px] font-gilroy-medium font-medium leading-normal cursor-pointer px-2 py-[2px] rounded-sm lang__link">
              Eng
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- navbar header -->
    <div class="py-7 navbar__bottom" :class="[route.path == '/' ? '' : '!bg-[#154FA1]']">
      <div class="container">
        <div class="flex items-center justify-between">
          <RouterLink to="/"><img :src="logo" alt="logo img" class="max-w-[156.6px] max-h-12" /></RouterLink>
          <!-- begin router links  -->
          <ul class="flex items-center gap-10">
            <li>
              <RouterLink to="/buisness"
                class="text-white-900 text-[18px] leading-[23.4px] font-medium font-gilroy-medium">
                {{ $t('router-link.buisnesss') }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/individual"
                class="text-white-900 text-[18px] leading-[23.4px] font-medium font-gilroy-medium">
                {{ $t('router-link.individual') }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/products"
                class="text-white-900 text-[18px] leading-[23.4px] font-medium font-gilroy-medium">{{
                  $t('router-link.product') }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/projects"
                class="text-white-900 text-[18px] leading-[23.4px] font-medium font-gilroy-medium">{{
                  $t('router-link.project') }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/blog" class="text-white-900 text-[18px] leading-[23.4px] font-medium font-gilroy-medium">{{
                $t('router-link.blog') }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/company"
                class="text-white-900 text-[18px] leading-[23.4px] font-medium font-gilroy-medium">{{
                  $t('router-link.about') }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/contact"
                class="text-white-900 text-[18px] leading-[23.4px] font-medium font-gilroy-medium">{{
                  $t('router-link.contact') }}</RouterLink>
            </li>
          </ul>
          <!--  end of router link -->
          <BaseButton :content="$t('btn-content.submit')" class="nav__btn px-[38px] text-white-900">
            <Arrow />
          </BaseButton>
        </div>
        <div class="navbar__bottom__line w-full h-[1.5px] bg-[rgba(255,255,255,.3)] mt-7 relative z-[999]"
          :class="[route.path == '/' ? '' : 'hidden']"></div>
      </div>
    </div>
    <!-- end of navbar bottom -->
  </nav>
</template>
<style scoped>
.nav__btn {
  background: linear-gradient(180deg, #3689ff 0%, #2077f2 100%);
}
</style>
