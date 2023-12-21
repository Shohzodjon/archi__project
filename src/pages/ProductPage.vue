
<script setup>
import { ref } from 'vue'
import CategoryComp from '@/components/CategoryComp.vue';
import SectionHeaderComp from '@/sections/SectionHeaderComp.vue';
import ProductCard from '@/components/ProductCard.vue';
import { FwbPagination } from 'flowbite-vue'
import SmallArrow from '@/assets/icons/SmallArrow.vue';
//  fake datas
import { categoryData, productData } from '@/assets/data/json-data';
// const currentPage=ref(1);
const showIcon = ref(true);
const currentPage = ref(1)
const data = [
    {
        label: 'Продукты',
        url: ''
    }
]
const warming = () => {
    alert('Wjjdsfsdfsd')
}

</script>
<template>
    <section class="pb-[120px]">
        <SectionHeaderComp :bread-data="data" />
        <div class="container">
            <div class="pt-[60px] pb-10">
                <CategoryComp @filter-category="warming" :category="categoryData" />
            </div>
            <div class="grid grid-cols-4 gap-x-6 gap-y-10 mb-10">
                <div v-for="(item, index)  in productData" :key="item.id" class="h-[545px]">
                    <ProductCard :img_url="item.img_url"
                        addition__class=" !text-[22px] !text-blue-500 font-bold font-gilroy-bold leading-[150%]"
                        :product_title="item.product_title" :product_desc="item.product_desc"
                        :initial_price="item.initial_price" :slug="`/products/:${index}`" />
                </div>
            </div>
            <div class="flex justify-center">
                <!-- <fwb-pagination  v-model="currentPage" :total-pages="12" large></fwb-pagination> -->
                <fwb-pagination class="product__pagination" v-model="currentPage" :total-pages="12" :show-labels="false"
                    show-icons></fwb-pagination>
            </div>
        </div>
    </section>
</template>
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
    font-size:18px;
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
}
</style>