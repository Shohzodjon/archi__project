
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
        <div class="max-w-[412px] rounded overflow-hidden group ">
            <div class="w-full mb-[30px]"><img :src="props.img_url" alt="extra_project_card " class="w-full object-cover h-[260px] transition-all duration-500 group-hover:scale-110"></div>
            <h5 class="text-grey-900 text-2xl leading-[31.2px] font-bold font-gilroy-bold">{{ props.title }}</h5>
        </div>
    </RouterLink>
</template>