<script setup>
import { RouterLink, useRoute } from "vue-router";
import {ref, computed} from 'vue';
import Telegram from "../assets/icons/Telegram.vue";
import Facebook from "../assets/icons/Facebook.vue";
import Instagram from "../assets/icons/Instagram.vue";
import Phone from "../assets/icons/Phone.vue";
import Envelop from "../assets/icons/Envelop.vue";
import logo from "../assets/images/logo.png";
import BaseButton from "../components/BaseButton.vue";
import Arrow from "../assets/icons/Arrow.vue";



</script>
<template>
  <nav class="fixed top-0 left-0 right-0 w-full z-[999]">
    <div class="bg-blue-800">
      <div class="container">
        <div class="flex items-center justify-between py-[13px]">
          <ul class="flex items-center gap-4">
            <li>
              <a href="#"><Telegram /></a>
            </li>
            <li>
              <a href="#"><Facebook /></a>
            </li>
            <li>
              <a href="#"><Instagram /></a>
            </li>
          </ul>
          <!--  end of social media -->
          <ul class="flex items-center gap-8">
            <li>
              <a href="+998 90 124 74-74" class="flex items-center gap-2"
                ><Phone />
                <span
                  class="font-medium text-white-900 text-[18px] leading-[23.4px]"
                  >+998 90 124 74-74</span
                ></a
              >
            </li>
            <li>
              <a
                href="mailto:archiholding@info.uz"
                class="flex items-center gap-2"
                ><Envelop />
                <span
                  class="text-white-900 font-gilroy-meduim font-medium text-[18px] leading-[23.4px]"
                  >archiholding@info.uz
                </span></a
              >
            </li>
          </ul>
          <!-- end contact -->
          <ul class="flex items-center gap-4">
            <li>
              <span
                class="opacity-80 text-white-900 text-[18px] font-gilroy-medium font-medium leading-normal"
                >Ru</span
              >
            </li>
            <li>
              <span class="block h-5 w-[1px] bg-white-900 opacity-30"></span>
            </li>
            <li>
              <span
                class="opacity-80 text-white-900 text-[18px] font-gilroy-medium font-medium leading-normal"
                >O'z</span
              >
            </li>
            <li>
              <span class="block h-5 w-[1px] bg-white-900 opacity-30"></span>
            </li>
            <li>
              <span
                class="opacity-80 text-white-900 text-[18px] font-gilroy-medium font-medium leading-normal"
                >Eng</span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- navbar header -->
    <div class="bg-blue-700 py-7">
      <div class="container">
        <div class="flex items-center justify-between">
          <RouterLink to="/"
            ><img :src="logo" alt="logo img" class="max-w-[156.6px] max-h-12"
          /></RouterLink>
          <!-- begin router links  -->
          <ul class="flex items-center gap-10">
            <li>
              <RouterLink
                to="/buisness"
                class="text-white-900 text-[18px] leading-[23.4px] font-medium font-gilroy-medium"
                >{{$t('router-link.buisnesss')}}</RouterLink
              >
            </li>
            <li><RouterLink to="/individual" class="text-white-900 text-[18px] leading-[23.4px] font-medium font-gilroy-medium">{{$t('router-link.individual')}}</RouterLink></li>
            <li><RouterLink to="/products" class="text-white-900 text-[18px] leading-[23.4px] font-medium font-gilroy-medium">{{ $t('router-link.product') }}</RouterLink></li>
            <li><RouterLink to="/projects" class="text-white-900 text-[18px] leading-[23.4px] font-medium font-gilroy-medium">{{ $t('router-link.project') }}</RouterLink></li>
            <li><RouterLink to="/blog" class="text-white-900 text-[18px] leading-[23.4px] font-medium font-gilroy-medium">{{ $t('router-link.blog') }}</RouterLink></li>
            <li><RouterLink to="/company" class="text-white-900 text-[18px] leading-[23.4px] font-medium font-gilroy-medium">{{ $t('router-link.about') }}</RouterLink></li>
            <li><RouterLink to="/contact" class="text-white-900 text-[18px] leading-[23.4px] font-medium font-gilroy-medium">{{ $t('router-link.contact') }}</RouterLink></li>
          </ul>
          <!--  end of router link -->
          <BaseButton :content="$t('btn-content.submit')" class="nav__btn px-[38px] text-white-900">
            <Arrow />
          </BaseButton>
        </div>
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
