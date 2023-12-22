
<script setup>
</script>
<template>
  <div
    class="relative bg-blue-700 rounded-lg py-8 md:py-12 lg:py-14 xl:py-[60px] px-7 md:px-9 lg:px-4 xl:px-10 2xl:px-20 overflow-hidden"
  >
    <slot></slot>
    <img
      src="../assets/images/shape1.png"
      alt="shape-one"
      class="absolute left-1/2 -translate-x-1/2 -top-[70px] -rotate-90"
    />
    <img
      src="../assets/images/shape2.png"
      alt="shape-two"
      class="absolute left-1/2 -translate-x-1/2 -top-[95px] w-[270px] -rotate-90"
    />
    <img
      src="../assets/images/shape5.png"
      alt="shape-three"
      class="absolute left-1/2 -translate-x-1/2 -top-10 w-[600px]"
    />
  </div>
</template>