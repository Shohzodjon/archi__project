
<script setup>

import { defineProps } from 'vue';
const props = defineProps({
    img_url: String,
    news_title: String,
    news_date:String,
    news_desc: String
})
</script>
<template>
    <div class="max-w-[557px] rounded overflow-hidden group ">
        <div class="w-full relative"> <img :src="props.img_url" alt="news image" class="w-full  object-cover h-[260px] transition ease-linear duration-500 group-hover:scale-110 ">
        <span class="absolute left-4 bottom-3 bg-blue-500 py-[6px] px-[10px] text-white-900 text-[18px] leading-27px font-semibold font-gilroy-bold">{{ props.news_date }}</span>
        </div>
        <!-- end of card image -->
        <div class="mt-5 ">
            <h5 class="text-[26px] font-bold font-gilroy-bold leading-[27px] text-grey-900 mb-2">{{ props.news_title}}</h5>
            <p class="text-[18px] font-medium font-gilroy-medium leading-[27px] text-grey-500 line-clamp-2">{{ props.news_desc }}</p>
        </div>
    </div>
</template>
