<script setup>
import { RouterLink } from 'vue-router'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentRoute = router.currentRoute
const breadcrumbs = computed(() => {
  const matched = currentRoute.value.matched
  const breadcrumbs = matched.map(route => {
    console.log(route, 'eeeeeee');
    return {
      label: route.meta.breadcrumbLabel,
      path: route.path
    }
  })
  return breadcrumbs
})


</script>
<template>
  <nav aria-label="breadcrumb" class="w-[100px] h-[100px] border border-[crimson]">
    <ol>
      <li v-for="(breadcrumb, index) in breadcrumbs" :key="index">
        <RouterLink :to="breadcrumb.path">{{ breadcrumb.label }}</RouterLink>
      </li>
    </ol>
  </nav>
</template>
<style scoped>
nav ol li:not(:last-child)::after {
  content: "/";
  margin: 0 5px;
}
</style>
  
