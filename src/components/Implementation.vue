
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  proccess_step: Number,
  proccess_title: String,
  proccess_desc: String,
  last_position: Boolean,
});
</script>
<template>
  <div
    class="bg-white-900 rounded-md max-w-[386px] relative p-4 md:p-6 lg:p-3 xl:p-5"
  >
    <h3
      class="text-grey-900 text-3xl md:text-5xl lg:text-4xl xl:text-5xl leading-normal font-semibold font-gilroy-bold mb-[17px]"
    >
      {{ props.proccess_step }} .
    </h3>
    <h5
      class="text-grey-900 text-xl md:text-2xl md:leading-[31.2px] lg:text-xl mb-2 font-bold font-gilroy-bold"
    >
      {{ props.proccess_title }}
    </h5>
    <p class="text-grey-500 text-base md:text-[18px] font-medium">
      {{ props.proccess_desc }}
    </p>
    <span
      class="w-[40px] h-[34px] lg:w-[40px] lg:h-[40px] block bg-white-900 absolute -bottom-4 right-1/2 translate-x-1/2 lg:top-1/2 lg:-right-0 xl:right-[2px] lg:-translate-y-1/2 rotate-45 rounded"
      :class="[props.last_position ? 'hidden' : '']"
    ></span>
  </div>
</template>
