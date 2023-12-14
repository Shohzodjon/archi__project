
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
            <div class="blog__grid__box">
                <div class="blog__item" v-for="item in blogData" :key="item.id">
                    <NewsCard :img_url="item.img_url" :news_date="item.news_date" :news_title="item.news_title"
                        :news_desc="item.news_desc" />
                </div>
            </div>
        </div>
    </section>
</template>
<style scpoed>
   
  .blog__grid__box{
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
.blog__item:nth-child(1){
    grid-column-start: 1;
    grid-column-end: 4;
}
.blog__item:nth-child(2){
    grid-column-start: 5;
    grid-column-end: 8;
}
.blog__item:nth-child(3){
    grid-column-start: 9;
    grid-column-end: 12;
}

</style>