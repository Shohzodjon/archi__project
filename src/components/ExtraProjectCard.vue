
<script setup>
import { RouterLink } from 'vue-router';
import { defineProps } from 'vue';

const props = defineProps({
    img_url: String,
    title: String,
    slug: String
})
</script>


<template>
    <RouterLink :to="props.slug">
        <div class="max-w-[412px] rounded overflow-hidden">
            <div class="w-full mb-[30px]"><img :src="props.img_url" alt="extra_project_card " class="w-full object-cover max-h-[260px]"></div>
            <h5 class="text-grey-900 text-2xl leading-[31.2px] font-bold font-gilroy-bold">{{ props.title }}</h5>
        </div>
    </RouterLink>
</template>
<!-- 
    color: #031D41;

font-family: Gilroy;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 130%; /* 31.2px */
 -->