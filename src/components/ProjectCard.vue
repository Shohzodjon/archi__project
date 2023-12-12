
<script setup>
   import { defineProps } from 'vue';

const props=defineProps({
    img_url:String,
    content:String,
    desc:String
})

</script>
<template>
    <div class="relative max-w-[848px]">
        <img :src="props.img_url" alt="project-card-img" class="w-full h-full max-h-[500px]"/>
        <div class="absolute left-6 right-6 bottom-6 bg-white-900 p-6 rounded-sm">
            <h5 class="text-grey-900 text-2xl leading-[31.2px] font-bold font-gilroy-bold mb-2">{{ props.content }}</h5>
            <p class="text-grey-500 text-[18px] font-medium font-gilroy-medium">{{ props.desc?props.desc:'' }}</p>
        </div>
    </div>
</template>
