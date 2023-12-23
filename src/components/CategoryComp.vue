
<script setup>
   import {ref, defineProps} from 'vue';

const props=defineProps({
    category:Array
})
</script>

<template>

    <ul class="flex items-center flex-wrap gap-2 md:gap-4">
        <li class=" border-[1.5px] border-grey-200 p-2.5 md:p-4  rounded-sm flex items-center justify-center cursor-pointer" @click="$emit('filterCategory')" v-for="(item,index) in category" :key="item.id"  data-aos="fade-down" data-aos-easing="linear"
        data-aos-duration="900" :data-aos-delay="400 * (index + 1)">
            <span class="text-grey-900 text-xl !leading-[26px] font-bold font-gilroy-bold">{{ item.title }}</span>
        </li>
    </ul>

</template>

