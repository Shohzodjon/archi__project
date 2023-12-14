
<script setup>

import { defineProps } from 'vue';
const props = defineProps({
    proccess_step: Number,
    proccess_title: String,
    proccess_desc: String,
    last_position:Boolean,
})
</script>
<template>
    <div class="bg-white-900 rounded-md max-w-[386px] relative p-6">
        <h3 class="text-grey-900 text-6xl leading-normal font-semibold font-gilroy-bold mb-[17px]">{{ props.proccess_step }} .</h3>
        <h5 class="text-grey-900 text-2xl leading-[31.2px] mb-2 font-bold font-gilroy-bold">{{ props.proccess_title }}</h5>
        <p class=" text-grey-500 text-[18px] font-medium ">{{ props.proccess_desc }}</p>
        <span class="w-[60px] h-[30px] block bg-white-900 absolute top-1/2 -right-4 -translate-y-1/2 rotate-45 rounded" :class="[props.last_position?'hidden':'']"></span>
    </div>
</template>
