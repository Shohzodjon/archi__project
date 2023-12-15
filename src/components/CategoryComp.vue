
<script setup>
   import {ref, defineProps} from 'vue';

const props=defineProps({
    category:Array
})
</script>

<template>

    <ul class="flex items-center gap-4">
        <li class=" border-[1.5px] border-grey-200 p-4 rounded-sm flex items-center justify-center cursor-pointer" @click="$emit('filterCategory')" v-for="item in category" :key="item.id">
            <span class="text-grey-900 text-xl !leading-[26px] font-bold font-gilroy-bold">{{ item.title }}</span>
        </li>
    </ul>

</template>

