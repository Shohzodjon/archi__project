
<script setup>
import { onMounted, ref } from 'vue';
import CategoryComp from '@/components/CategoryComp.vue';
import SectionHeaderComp from '@/sections/SectionHeaderComp.vue';
import ProjectCard from '@/components/ProjectCard.vue'
import { FwbPagination } from 'flowbite-vue'
//  fake datas
import { projectCategory } from '@/assets/data/json-data'
import { useProjectStore } from '@/stores/project';

const projectStore = useProjectStore();
const currentPage = ref(1);


onMounted(() => {
    projectStore.fetchProjectData('projects');
})

const data = [
    {
        label: 'Проекты',
        url: ''
    }
]
const test = () => {
    alert('Works')
}
</script>

<template>
    <section class="pb-10 md:pb-14 lg:pb-16 xl:pb-[120px]">
        <SectionHeaderComp :bread-data="data" />
        <div class="container">
            <div class="mt-8 md:mt-10 lg:mt-14 xl:mt-[60px] mb-6  lg:mb-8 xl:mb-10">
                <CategoryComp :category="projectCategory" @filter-category="test" />

            </div>

            <div class="project__grid__box">
                <div v-for="item  in projectStore.projects" :key="item.id" class="grid__item">
                    <ProjectCard :img_url="item.img" :content="item.title" :desc="item.short_content"
                        :slug="`/project/${item.id}`" />
                </div>

            </div>
            <div class="flex justify-center mt-10">
                <fwb-pagination class="product__pagination" v-model="currentPage" :total-pages="2" :show-labels="false"
                    show-icons></fwb-pagination>
            </div>

        </div>
    </section>
</template>
<style scoped>
.project__grid__box {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
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

@media screen and (min-width:350px) and (max-width:768px) {

    .grid__item:nth-child(1),
    .grid__item:nth-child(2),
    .grid__item:nth-child(3),
    .grid__item:nth-child(4),
    .grid__item:nth-child(5),
    .grid__item:nth-child(6),
    .grid__item:nth-child(7),
    .grid__item:nth-child(8) {
        grid-column-start: 1;
        grid-column-end: 13;
    }
}

@media screen and (min-width:769px) and (max-width:1024px) {

    .grid__item:nth-child(1),
    .grid__item:nth-child(3),
    .grid__item:nth-child(5),
    .grid__item:nth-child(7) {
        grid-column-start: 1;
        grid-column-end: 7;
    }

    .grid__item:nth-child(2),
    .grid__item:nth-child(4),
    .grid__item:nth-child(6),
    .grid__item:nth-child(8) {
        grid-column-start: 7;
        grid-column-end: 13;
    }

}
</style>
<style>
.product__pagination div {
    border: none !important;
    gap: 16px !important;
}

.product__pagination button {
    border-radius: 2px !important;
    padding: 12px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border: 1.5px solid #C5C9D6;
    background: #FFF;
    color: #031D41;
    font-size: 18px;
    font-weight: 600;
    line-height: 130%;
    transition: all linear .6s;
}

.product__pagination button:hover {
    border: 1.5px solid #3689FF;
    background: #3689FF;
    color: #fff;
}

.product__pagination button svg {
    width: 20px !important;
    height: 20px !important;
}</style>