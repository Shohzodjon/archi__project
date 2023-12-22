
<script setup>
import { reactive, ref,watch, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay, A11y, FreeMode, Thumbs } from 'swiper/modules';
import { useRoute } from 'vue-router';
import SectionHeaderComp from '@/sections/SectionHeaderComp.vue';
import SectionHeader from '@/components/SectionHeader.vue';
import DashedLine from '@/assets/icons/DashedLine.vue';
import BaseButton from '@/components/BaseButton.vue';
import TabWrapper from '@/components/TabWrapper.vue';
import ProductCard from '@/components/ProductCard.vue';
import SmallArrow from '@/assets/icons/SmallArrow.vue';
import { useProductStore } from '@/stores/product';
import { thumbsImages } from '@/assets/data/json-data'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import { productTech } from '@/assets/data/json-data';
const modules = [Navigation, Autoplay, A11y, FreeMode, Thumbs];

const thumbsSwiper = ref(null);
const route = useRoute();
const id = route.params.id;
const productDetailStore = useProductStore();

const data = reactive([
    {
        label: 'Продукты',
        url: '/product'
    }
]);

onMounted(() => {
    async function step() {
        await productDetailStore.fetchAllProducts('products');
        await productDetailStore.fetchAllProductById(id);
        await productDetailStore.products.forEach(item => {
            if (item.id == id) {
                data.push({
                    label: item.title,
                    url: ''
                })
            }
        });
    }
    step()
})

watch(data, (newData) => {
    console.log(`data is ${newData}`)
},  { deep: true })

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
}
</script>

<template>
    <section>

        <SectionHeaderComp :bread-data="data" />

        <div class="pb-[120px] pt-[60px]">
            <div class="container">
                <div class="flex gap-6 justify-between items-start">
                    <div class=" flex gap-5 w-1/3 items-start">
                        <div>
                            <Swiper @swiper="setThumbsSwiper" :direction="'vertical'" :spaceBetween="20" :slidesPerView="5"
                                :freeMode="true" :loop="true" :watchSlidesProgress="true" :modules="modules"
                                class="h-[457px]">
                                <SwiperSlide v-for="(img, index) in thumbsImages" :key="index"
                                    class="w-20 h-20 cursor-pointer">
                                    <img :src="img.img_url" alt="thumbs bottom images"
                                        class="w-20 h-20 border border-grey-200 rounded">
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div
                            class="w-full max-w-[457px] h-[457px] max-h-[457px] border border-grey-200 rounded overflow-hidden">
                            <Swiper :spaceBetween="10" :thumbs="{ swiper: thumbsSwiper }" :modules="modules"
                                class="w-full h-full">
                                <SwiperSlide v-for="(img, index) in thumbsImages" :key="index" class="w-full h-full">
                                    <img :src="img.img_url" alt="thumbs images"
                                        class=" w-full h-full max-w-[457px] max-h-[457px] object-obtain">
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>

                    <!--  end of right sidebar -->
                    <div class="product__spesification flex-1" v-html="productDetailStore.productDetail.specifications">
                    </div>
                    <!--  end of main sidebar -->
                    <div class="flex-1 max-w-[485px] border border-grey-200 rounded p-6">
                        <div class="w-full flex items-center justify-between">
                            <h4 class="text-blue-500 text-[28px] font-extrabold font-gilroy-bold leading-[42px] ">{{
                                productDetailStore.productDetail.sale_price }}Sale
                            </h4>
                            <span
                                class="text-grey-600 text-xl leading-[30px] font-semibold font-gilroy-bold line-through">{{
                                    productDetailStore.productDetail.old_price }}</span>
                        </div>
                        <div class="h-[1.5px] bg-grey-200 w-full my-6"></div>
                        <BaseButton :content="$t('btn-content.order')" class="product__slug__button" />
                        <BaseButton :content="$t('btn-contnent.share')" class="product__slug__button2" />
                    </div>
                    <!--  end of right sidebar -->
                </div>
                <div class="line bg-grey-200 h-[1.5px] w-full max-w-[1211px] my-[50px]"></div>
                <!--  end of header -->
                <div class="mb-[123px]">
                    <TabWrapper>
                        <template #product-desc>
                            <div class="product__spesification" v-html="productDetailStore.productDetail.specifications">
                            </div>
                        </template>
                        <template #product-tech>
                            <div class="product__spesification" v-html="productDetailStore.productDetail.specifications">
                            </div>
                        </template>
                    </TabWrapper>
                </div>
                <SectionHeader header__content="Другие продукты" />
                <div class=" mt-10">
                    <swiper :slides-per-view="4" :space-between="10" :modules="modules" :loop="true"
                        :autoplay="{ delay: 3500 }" :navigation="{
                            nextEl: '.swiper-next',
                            prevEl: '.swiper-prev',
                        }">
                        <swiper-slide v-for="item in productDetailStore.products" :key="item.id">
                            <div class="h-[545px]">
                                <ProductCard class="w-full" :img_url="item.img" :product_title="item.title"
                                    :slug="`/product/${item.id}`" :refresh="true" />
                            </div>
                        </swiper-slide>
                    </swiper>
                    <div class="flex w-full items-center justify-center gap-6 mt-10">
                        <button
                            class="project__slider__btn swiper-prev cursor-pointer w-[60px] h-[60px] rounded-sm flex items-center justify-center border-[1.5px] border-grey-200"
                            aria-label="button">
                            <SmallArrow />
                        </button>
                        <button
                            class="project__slider__btn swiper-next cursor-pointer  w-[60px] h-[60px] rounded-sm flex items-center justify-center border-[1.5px] border-grey-200 "
                            aria-label="button">
                            <SmallArrow class="rotate-180" />
                        </button>
                    </div>
                </div>

            </div>
            <!--  end of tab component -->
        </div>
    </section>
</template>
<style>
.product__slug__button {
    border-radius: 4px;
    background: linear-gradient(180deg, #3689FF 0%, #2077F2 100%);
    width: 100% !important;
    justify-content: center;
    margin-bottom: 18px;
}

.product__slug__button span {
    color: #fff;
}

.product__slug__button2 {
    border-radius: 4px;
    border: 1px solid #3689FF;
    background: #FFF;
    width: 100%;
    justify-content: center;

}

.product__slug__button2 span {
    color: #3689FF;

}

.product__spesification ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 4px;
}

.product__spesification ul li {
    color: #536681;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.product__spesification ul li span {
    color: #031D41;
    text-align: right;
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
    margin-left: 10px;
    display: inline-block;

}

.product__spesification .line-dots {
    display: block;
    flex: 1;
    border: 1.5px dashed #C5C9D6;
    width: 100%;

}
</style>