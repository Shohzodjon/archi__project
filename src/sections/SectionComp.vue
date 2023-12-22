
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  title: String,
  desc: String,
  desc2: String,
  img_url: String,
});
</script>

<template>
  <div class="bg-blue-700 relative overflow-hidden rounded-lg">
    <div
      class="flex flex-col md:flex-row md:justify-between md:items-center relative z-40"
    >
      <div
        class="py-8 md:py-12 lg:py-14 xl:py-20 pl-8 md:pl-10 lg:pl-14 xl:pl-20 max-w-[764px] lg:max-w-[850px]"
      >
        <h2
          v-html="props.title"
          class="text-white-900 text-2xl md:text-4xl lg:text-5xl lg:leading-[62.4px] font-bold font-gilroy-bold mb-3 md:mb-5"
        ></h2>
        <p
          class="text-white-800 text-base md:text-xl md:leading-[30px] font-medium mb-4 md:mb-7"
        >
          {{ props.desc }}
        </p>
        <p
          class="text-white-800 text-base md:text-xl md:leading-[30px] font-medium"
        >
          {{ props.desc2 }}
        </p>
      </div>
      <div
        class="md:w-1/2 lg:w-1/2 md:pr-9 xl:pr-[80.2px] lg:flex lg:justify-end"
      >
        <img
          :src="props.img_url"
          alt="image"
          class="max-w-[400px] sm:max-w-[500px] md:-ml-4 lg:ml-0 lg:max-w-[544.8px] mx-auto lg:mx-0"
        />
      </div>
    </div>
    <img
      src="../assets/images/shape1.png"
      alt="shape-one"
      class="absolute top-1/2 -translate-y-1/2 right-0 hidden md:block"
    />
    <img
      src="../assets/images/shape2.png"
      alt="shape-two"
      class="absolute top-1/2 -translate-y-1/2 right-0 h-[99%] hidden md:block"
    />
    <img
      src="../assets/images/shape3.png"
      alt="shape-three"
      class="absolute top-1/2 -translate-y-1/2 right-0 h-full hidden md:block"
    />
    <img
      src="../assets/images/shape4.png"
      alt="shape-four"
      class="absolute top-1/2 -translate-y-1/2 right-0 h-full"
    />
  </div>
</template>
<style scoped></style>