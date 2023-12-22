
<script setup>
  import {defineProps} from 'vue';
  const props=defineProps({
    result_content:String,
    result_category:String
  })
</script>
<template>
      <div class="flex items-center justify-center flex-col gap-2  w-full lg:w-[400px] lg:h-[213px] bg-[#F3F3F3] rounded-sm py-8 md:py-10 lg:py-[60px] px-3">
        <h3 class=" text-2xl md:text-3xl lg:text-4xl xl:text-[50px] text-blue-500 font-extrabold font-gilroy-bold text-center mb-2">{{props.result_content}}</h3>
        <span class="text-base text-center lg:text-xl font-medium text-grey-500 normal-case font-gilroy-medium">{{ props.result_category }}</span>
      </div>
</template>