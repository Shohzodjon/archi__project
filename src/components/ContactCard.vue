
<script setup>
import { defineProps , ref} from 'vue';
import Envelop from '@/assets/icons/Envelop.vue';
import Phone from '@/assets/icons/Phone.vue';
const props = defineProps({
    card_title: String,
    card_phone: String,
    card_email: String
})

</script>

<template>
    <div class="bg-white-900 rounded border-[1.5px] border-grey-200 p-5 w-full">
        <h4 class="text-grey-900  leading-[31.2px] font-gilroy-bold font-semibold text-2xl">{{ props.card_title }}</h4>
        <div class="my-5 h-[1px] bg-grey-200 w-full "></div>
        <ul>
            <li class="flex items-center gap-[6px] ">
                <Phone /> <span class="text-grey-500 text-[18px] font-medium font-gilroy-medium leading-[27px]">Телефон : </span>
            </li>
            <li class="mt-2 mb-5 text-grey-900 text-xl leading-[26px] font-bold font-gilroy-bold">
               <a :href="props.card_phone"> {{ props.card_phone }}</a> 
            </li>
            <li class="flex items-center gap-[6px] mb-2">
                <Envelop /> <span class="text-grey-500 text-[18px] font-medium font-gilroy-medium leading-[27px]">Эл. почта:</span>
            </li>
            <li class="text-grey-900 text-xl leading-[26px] font-bold font-gilroy-bold">
               <a :href="'mailto:'+props.card_email">{{ props.card_email }}</a> 
            </li>
        </ul>
    </div>
</template>