
<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    img_url: String,
    card_header: String,
    card_desc: String
})


</script>
<template>
    <div class="offer__card p-6 max-w-[412px] max-h-[329px] relative rounded-[6px]">
        <div class="absolute bg-blue-700 -top-[54px] left-6 p-[10px] rounded-sm"><img :src="props.img_url" alt="card img" class="max-w-20 max-h-20"></div>
        <!-- end of card img -->
        <h3 class="mt-9 text-[26px] leading-[33.8px] font-bold font-gilroy-medium text-white-900">{{ props.card_header }}</h3>
        <p class="leading-[27px] font-medium text-[18px]">{{ props.card_desc }}</p>
    </div>
</template>
<style scoped>
.offer__card{
    border: 2px solid rgba(255,255,255,.5);
}
p{
    color: rgba(255,255,255,.8);
}
</style>