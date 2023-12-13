
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    breadData: Array,
    title: String
})

</script>
<template>
    <header class="pt-[206px]">
        <div class="container relative z-30">
            <h3>Breadcrumb component</h3>
            <h2 class="text-white-900 font-bold font-gilroy-bold leading-[52px] text-[40px]">{{ props.title }}</h2>
        </div>
    </header>
</template>
<!-- 
    color: #FFF;

font-family: Gilroy;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: 130%; /
 -->
<style scoped>
header {
    background: url('../assets/images/buisness.png');
    background-repeat: no-repeat;
    width: 100%;
    height: 400px;
    background-size: cover;
    position: relative;
}

header::before {
    content: " ";
    width: 100%;
    height: 100%;
    background: rgba(3, 29, 65, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
}
</style>
