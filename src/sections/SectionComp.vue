
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    title: String,
    desc: String,
    desc2: String,
    img_url: String
})
</script>

<template>
    <div class="bg-blue-700 relative overflow-hidden rounded-lg">
        <div class="flex justify-between items-center relative z-40">
            <div class="py-20 pl-20 max-w-[764px]">
                <h2 v-html="props.title" class="text-white-900 text-5xl leading-[62.4px] font-bold font-gilroy-bold mb-5">
                </h2>
                <p class="text-white-800  text-xl leading-[30px] font-medium mb-7">{{ props.desc }}</p>
                <p class="text-white-800  text-xl leading-[30px] font-medium">{{ props.desc2 }}</p>
            </div>
            <div class=" pr-[80.2px]">
                <img :src="props.img_url" alt="image" class="max-w-[544.8px]" />
            </div>
        </div>
        <img src="../assets/images/shape1.png" alt="shape-one" class="absolute top-1/2 -translate-y-1/2 right-0" />
        <img src="../assets/images/shape2.png" alt="shape-two" class="absolute top-1/2 -translate-y-1/2 right-0 h-[99%]" />
        <img src="../assets/images/shape3.png" alt="shape-three" class="absolute top-1/2 -translate-y-1/2 right-0 h-full" />
        <img src="../assets/images/shape4.png" alt="shape-four" class="absolute top-1/2 -translate-y-1/2 right-0 h-full" />
    </div>
</template>
<style scoped></style>