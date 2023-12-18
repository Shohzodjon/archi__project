
<script setup>
import { Transition } from 'vue';
import { ref } from 'vue';
const currentTab = ref(true)
const handleClick = () => {
    currentTab.value = !currentTab.value
}

</script>
<template>
    <div>
        <div class="flex gap-4 items-center mb-8">
            <button @click="handleClick"
                class="border-[1.5px] border-grey-200 rounded-sm bg-white-900 p-4 text-xl leading-[26px] font-bold font-gilroy-bold text-grey-900"
                :class="[currentTab ? '!border-blue-500 !bg-[#F1F4F9]' : '']">Описание</button>
            <button @click="handleClick"
                class="border-[1.5px] border-grey-200 rounded-sm bg-white-900 p-4 text-xl leading-[26px] font-bold font-gilroy-bold text-grey-900"
                :class="[currentTab ? '' : '!border-blue-500 !bg-[#F1F4F9]']">Технические xарактеристики</button>
        </div>
        <Transition name="fade" mode="out-in">
            <div>
                <div v-if="currentTab">
                    <slot name="product-desc"></slot>
                </div>
                <div v-else>
                    <slot name="product-tech"></slot>
                </div>
            </div>

        </Transition>
    </div>
</template>
<style>
.fade-enter-from,
.fade-leave-to {
    opacity: 0.2;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease-out;
}
</style>