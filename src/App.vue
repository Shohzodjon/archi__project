<script setup>
import { RouterView } from 'vue-router';
import { Transition } from 'vue';
import Navbar from './sections/Navbar.vue';
import Footer from './sections/Footer.vue';


</script>

<template>
  <section>
    <Navbar />
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <Footer />
  </section>
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

  