<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';
import Arrow from '@/assets/icons/Arrow.vue';
import BaseButton from './BaseButton.vue';

const props = defineProps({
    main_card_img: String,
    main_card_title: String,
    main_card_desc: String,
    main_small_img: String,
    route_url: String
});
</script>
<template>
    <div class=" main__card relative max-w-[848px] max-h-[650px] w-full rounded overflow-hidden">
        <img :src="props.main_card_img" alt="main-card-img" class="w-full h-[650px]" />
        <div class="absolute z-50 left-8 right-8 bottom-8 bg-white-900 rounded-sm ">
            <div class="relative w-full h-full pl-8 pr-8 pb-8 rounded-sm pt-[1px]">
                <!-- small image wrapper  -->
                <div class="small__img__wrapper absolute w-16 md:w-20 md:h-20 lg:w-[100px] lg:h-[100px] flex items-center justify-center -top-10">
                    <img :src="props.main_small_img" alt="small image wrapper" class="max-w-20 max-h-20 w-full" />
                </div>
                <h3 class="mt-20 text-2xl md:text-[26px] lg:text-[32px] lg:leading-[41.6px] font-bold font-gilroy-medium text-grey-900 mb-2 line-clamp-2">{{
                    props.main_card_title }}</h3>
                <p class="text-grey-500 text-base md:text-[18px] md:leading-[27px] font-medium mb-6 line-clamp-3">{{ props.main_card_desc }}</p>
                <RouterLink :to="route_url">
                    <BaseButton :content="props.main_card_title"
                        class="border-[2px] border-blue-500 text-blue-500 px-6 md:px-8 lg:px-[53px] main__card__button">
                        <Arrow />
                    </BaseButton>
                </RouterLink>

            </div>
        </div>
    </div>
</template>
<style scoped>
.main__card::before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    background: #0D4088;
}

.small__img__wrapper {
    border-radius: 2px;
    background: linear-gradient(180deg, #3588FE 0%, #1F76F1 100%);
}
</style>
<style>
.main__card__button svg path {
    fill: #3689FF;
}
</style>