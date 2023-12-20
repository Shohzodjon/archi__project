
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    header__content: String,
    header__desc: String
})
</script>
<template>
    <div class="flex flex-col gap-4 justify-center items-center">
        <h1 class="section__header text-3xl md:text-4xl lg:text-5xl font-gilroy-bold font-bold">{{ props.header__content }}</h1>
        <p class="text-center max-w-[850px] text-base md:text-[18px] font-medium md:leading-[27px] text-grey-500 ">{{ props.header__desc }}</p>
    </div>
</template>
<style scoped>
  .section__header{
    position: relative;
  }
  .section__header::before{
    content: " ";
    display: block;
    position: absolute;
    width: 32px;
    height: 16px;
    background: #3689FF;
    top: 15px;
    left: -64px;
    border-radius: 16px 16px 0 0;
    transform: rotate(90deg);

  }
  .section__header::after{
    content: " ";
    display: block;
    position: absolute;
    width: 32px;
    height: 16px;
    background: #3689FF;
    top: 15px;
    right: -64px;
    border-radius: 16px 16px 0 0;
    transform: rotate(-90deg); 
  }
</style>    


