
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: String,
    desc: String,
    img_url: String,
})

</script>

<template>
    <div class="biusness__card h-[600px] max-w-[840px] relative p-10 rounded-lg overflow-hidden" >
        <div>
            <h3 class="text-grey-900 text-[32px] leading-[41.6px] font-bold font-gilroy-bold mb-2">{{ props.title }}</h3>
            <p class="text-grey-500 text-xl leading-[30px] font-medium font-gilroy-medium">{{ props.desc }}</p>
        </div>
            <img :src="props.img_url" alt="buisness card image" class="absolute bottom-0 left-0 right-0 w-full h-auto"/>
    </div>
</template>
<style scoped>
   .biusness__card{
    background:  lightgray 35px 345.4px / 91.667% 61.6% ;
   }
</style>