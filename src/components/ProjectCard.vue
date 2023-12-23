
<script setup>
   import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';
const props=defineProps({
    img_url:String,
    content:String,
    desc:String,
    slug:String,
})

</script>
<template>
    <RouterLink :to="props.slug"  >
        <div class="relative max-w-[848px] h-[500px] project__card rounded overflow-hidden">
            <img :src="props.img_url" alt="project-card-img" class="w-full h-full max-h-[500px]"/>
            <div class="absolute left-6 right-6 bottom-6 bg-white-900 p-2.5 sm:p-3 md:p-4  2xl:p-6 rounded-sm">
                <h5 class="text-grey-900 text-xl xl:text-2xl xl:leading-[31.2px] font-bold font-gilroy-bold mb-2">{{ props.content }}</h5>
                <p class="text-grey-500 text-[18px] font-medium font-gilroy-medium">{{ props.desc?props.desc:'' }}</p>
            </div>
        </div>
       
    </RouterLink>
</template>
<style scoped>
  .project__card img{
    transition:  .5s linear all;
  }
  .project__card:hover img{
    transform: scale(1.1);
  }
</style>
