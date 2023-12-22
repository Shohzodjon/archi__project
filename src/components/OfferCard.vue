
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  img_url: String,
  card_header: String,
  card_desc: String,
});
</script>
<template>
  <div
    class="offer__card p-6 lg:p-2 md:max-w-[412px] max-h-[329px] relative rounded-[6px] lg:min-w-[230px]"
  >
    <div
      class="absolute bg-blue-700 hidden lg:block -top-[54px] left-6 p-[10px] rounded-sm"
      :class="$attrs.class"
    >
      <span class="max-w-20 max-h-20" v-html="props.img_url"></span>
    </div>
    <!-- end of card img -->
    <h3
      class="lg:mt-9 text-xl md:text-[26px] md:leading-[33.8px] lg:text-2xl font-bold font-gilroy-medium text-white-900 !line-clamp-2"
    >
      {{ props.card_header }}
    </h3>
    <p
      class="md:leading-[27px] font-medium text-base md:text-[18px] lg:text-base line-clamp-4"
    >
      {{ props.card_desc }}
    </p>
  </div>
</template>
<style scoped>
.offer__card {
  border: 2px solid rgba(255, 255, 255, 0.5);
}
p {
  color: rgba(255, 255, 255, 0.8);
}
</style>