
<script setup>
  import {defineProps} from 'vue';

  const props= defineProps({
    img_url:String,
    url:String
  })

</script>

<template>

    <a :href="props.url" target="_blank" class=" flex items-center p-2 max-w-[90%] mx-auto md:max-w-[267px] max-h-[200px] min-h-[199px] rounded-sm border-[1.5px] border-grey-200 cursor-pointer overflow-hidden">
        <img :src="props.img_url" alt="partner image" class="w-full  "/>
    </a>

</template>
