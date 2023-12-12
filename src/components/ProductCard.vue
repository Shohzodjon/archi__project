
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    img_url: String,
    product_title: String,
    product_desc: String,
    addition__class:String
})


</script>
<template>
    <div class="max-w-[412] max-h-[450px] relative">
        <img :src="props.img_url" alt="card img" class="w-[100%] h-[100%] max-w-[412px] max-h-[450px]" />

        <div class=" card__bottom absolute w-full max-w-[372px] p-5 left-5 -translate-y-5">
            <h4 class="text-[26px] font-bold font-gilroy-bold leading-[33.8px] mb-2 text-grey-900">{{ props.product_title }}
            </h4>
            <p class="text-[18px] font-medium font-gilroy-medium leading-[27px] text-grey-500" :class="[addition__class ? addition__class:'']">{{ props.product_desc }}</p>
        </div>
    </div>
</template>
<style scoped>
.card__bottom {
    border-radius: 2px;
    background: #FFF;
    box-shadow: 0px 4px 20px 0px rgba(3, 29, 65, 0.10);

}
</style>
