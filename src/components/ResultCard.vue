
<script setup>
  import {defineProps} from 'vue';
  const props=defineProps({
    result_content:String,
    result_category:String
  })
</script>
<template>
      <div class="flex items-center justify-center flex-col gap-2 w-[400px] h-[213px] bg-[#F3F3F3] rounded-sm py-[60px]">
        <h3 class="text-[50px] text-blue-500 font-extrabold font-gilroy-bold text-center">{{props.result_content}}</h3>
        <span class="text-center text-xl font-medium text-grey-500 normal-case font-gilroy-medium">{{ props.result_category }}</span>
      </div>
</template>