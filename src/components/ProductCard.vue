
<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';
const props = defineProps({
    img_url: String,
    product_title: String,
    product_desc: String,
    addition__class: String,
    initial_price: String,
    slug: String
})

</script>
<template>
    <RouterLink :to="props.slug">
        <div class=" w-full md:max-w-[412] max-h-[450px] relative">
            <img :src="props.img_url" alt="card img" class="w-[100%]  md:h-[100%] md:max-w-[412px] max-h-[450px] " />

            <div class=" card__bottom absolute w-[90%] max-w-[372px] p-2 lg:p-5 left-[50%] -translate-x-1/2 md:translate-x-0 md:left-3 -translate-y-8 ">
                <h4 class="text-xl md:text-[24px] lg:text-[26px] font-bold font-gilroy-bold leading-[33.8px] mb-2 text-grey-900">{{
                    props.product_title }}
                </h4>
                <div class="flex items-center justify-between">
                    <p class="text-[18px] font-medium font-gilroy-medium leading-[27px] text-grey-500"
                        :class="[addition__class ? addition__class : '']">{{ props.product_desc }}</p>
                    <span class="text-[18px] font-semibold font-gilroy-bold leading-[27px]"
                        :class="[props.initial_price ? '' : 'hidden']">{{ props.initial_price }}</span>
                </div>
            </div>
        </div>
    </RouterLink>
</template>
<style scoped>
.card__bottom {
    border-radius: 2px;
    background: #FFF;
    box-shadow: 0px 4px 20px 0px rgba(3, 29, 65, 0.10);

}

span {
    color: rgba(3, 29, 65, 0.6);
    text-decoration-line: line-through;
}
</style>
