
<script setup>

import CategoryComp from '@/components/CategoryComp.vue';
import SectionHeaderComp from '@/sections/SectionHeaderComp.vue';
import ProjectCard from '@/components/ProjectCard.vue'

//  fake datas
import { projectCategory, projectData } from '@/assets/data/json-data'

const data=[
    {
        label:'Проекты',
        url:''
    }
]
const test = () => {
    alert('Works')
}
</script>

<template>
    <section class=" pb-[120px]">
        <SectionHeaderComp  :bread-data="data"/>
        <div class="container">
            <div class="mt-[60px] mb-10">
                <CategoryComp :category="projectCategory" @filter-category="test" />

            </div>

            <div class="project__grid__box">
                <div v-for="(item, index)  in projectData" :key="item.id" class="grid__item">
                    <ProjectCard :img_url="item.img_url" :content="item.content" :desc="item.desc"
                        :slug="`/projects/:${index}`" />
                </div>

            </div>
        </div>
    </section>
</template>
<style scoped>
.project__grid__box {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 40px;
}

.grid__item:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 7;
}

.grid__item:nth-child(2) {
    grid-column-start: 7;
    grid-column-end: 13;
}

.grid__item:nth-child(3),
.grid__item:nth-child(6) {
    grid-column-start: 1;
    grid-column-end: 5;
}

.grid__item:nth-child(4),
.grid__item:nth-child(7) {
    grid-column-start: 5;
    grid-column-end: 9;
}

.grid__item:nth-child(5),
.grid__item:nth-child(8) {
    grid-column-start: 9;
    grid-column-end: 13;
}
</style>