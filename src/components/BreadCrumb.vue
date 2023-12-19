
<script setup>
import { FwbBreadcrumb, FwbBreadcrumbItem } from 'flowbite-vue';
import { RouterLink } from 'vue-router';
import { defineProps } from 'vue';
import HomeIcon from '@/assets/icons/HomeIcon.vue'
const props = defineProps({
    crumbs: Array
})
</script>
<template>
    <div>
        <fwb-breadcrumb class="breadcrumbs">
            <RouterLink to="/">
                <fwb-breadcrumb-item home>
                    <template #home-icon>
                        <HomeIcon />
                        <span
                            class="text-[18px] font-medium font-gilroy-medium leading-[27px] text-white-900 block ml-2">Home</span>
                    </template>
                </fwb-breadcrumb-item>
            </RouterLink>
            <li v-for="(item, index) in crumbs" :key="index">
                <RouterLink :to="item.url" :class="[item.url ? 'active__breadcrubm' : 'unactive__breadcrumb']">
                    <fwb-breadcrumb-item>
                        <span class="text-[18px] font-medium font-gilroy-medium leading-[27px] text-white-900 block ml-2">{{
                            item.label }}</span>
                    </fwb-breadcrumb-item>
                </RouterLink>
            </li>
        </fwb-breadcrumb>
    </div>
</template>
<style>
.breadcrumbs {
    background: none;
}

.unactive__breadcrumb {
    cursor: default !important;
}
</style>
  
