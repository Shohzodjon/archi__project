
<script setup>

import NewsCard from '@/components/NewsCard.vue';
import SectionHeaderComp from '@/sections/SectionHeaderComp.vue';

//   fake variables 
import { blogData } from '@/assets/data/json-data'

</script>

<template>
   <section>
      <SectionHeaderComp title="Блог" />

      <div class="container">
         <div class="blog__grid__box mt-[60px] mb-[120px]">
            <div class="blog__item " v-for="(item, index) in blogData" :key="item.id">
               <NewsCard :img_url="item.img_url" :news_date="item.news_date" :news_title="item.news_title"
                  :news_desc="item.news_desc" :slug="`/blog:${index}`" />
                  <!-- slug: `blog/${item.id}`, -->
            </div>
         </div>
      </div>
   </section>
</template>
<style scpoed>
.blog__grid__box {
   display: grid;
   grid-template-columns: repeat(12, auto);
   grid-column-gap: 24px;
   grid-row-gap: 40px;
}

.blog__item:nth-child(1) {
   grid-column-start: 1;
   grid-column-end: 5;
}

.blog__item:nth-child(2) {
   grid-column-start: 5;
   grid-column-end: 9;
}

.blog__item:nth-child(3) {
   grid-column-start: 9;
   grid-column-end: 13;
}

.blog__item:nth-child(4),
.blog__item:nth-child(8) {
   grid-column-start: 1;
   grid-column-end: 4;
}

.blog__item:nth-child(5),
.blog__item:nth-child(9) {
   grid-column-start: 4;
   grid-column-end: 7;
}

.blog__item:nth-child(6),
.blog__item:nth-child(10) {
   grid-column-start: 7;
   grid-column-end: 10;
}

.blog__item:nth-child(7),
.blog__item:nth-child(11) {
   grid-column-start: 10;
   grid-column-end: 13;
}
</style>