
<script setup>
  import {defineProps} from 'vue';

  const props= defineProps({
    img_url:String,
  })

</script>

<template>

    <div class="max-w-[90%] mx-auto md:max-w-[267px] max-h-[200px] rounded-sm border-[1.5px] border-grey-200">
        <img :src="props.img_url" alt="partner image" class="w-full h-full max-h-[200px]"/>
    </div>

</template>
