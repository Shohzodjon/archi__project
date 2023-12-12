<script setup>
import { defineProps } from "vue";
defineProps({
  content: String,
});
</script>
<template>
  <button class="py-[17px] rounded flex gap-[6px] items-center">
    <span class="text-[18px] leading-[21.47px] font-semibold font-gilroy-bold">{{ content }}</span>
    <slot></slot>
  </button>
</template>

