
<script setup>
import { ref } from 'vue'
import CategoryComp from '@/components/CategoryComp.vue';
import SectionHeaderComp from '@/sections/SectionHeaderComp.vue';
import ProductCard from '@/components/ProductCard.vue';
//  fake datas
import { categoryData, productData } from '@/assets/data/json-data'
const data=[
    {
        label:'Продукты',
        url:''
    }
]
const warming = () => {
    alert('Wjjdsfsdfsd')
}

</script>
<template>
    <section class="pb-[120px]">
        <SectionHeaderComp  :bread-data="data"/>
        <div class="container">
            <div class="pt-[60px] pb-10">
                <CategoryComp @filter-category="warming" :category="categoryData" />
            </div>
            <div class="grid grid-cols-4 gap-x-6 gap-y-10 mb-[138px]">
                <div v-for="(item,index)  in productData" :key="item.id" class="h-[545px]">
                    <ProductCard :img_url="item.img_url"
                        addition__class=" !text-[22px] !text-blue-500 font-bold font-gilroy-bold leading-[150%]"
                        :product_title="item.product_title" :product_desc="item.product_desc"
                        :initial_price="item.initial_price" :slug="`/products/:${index}`" />
                </div>
            </div>
        </div>
    </section>
</template>