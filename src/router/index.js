import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
  routes: [
     {
       path: '/',
       name: 'home',
       component:HomePage
     },
     {
       path: '/buisness',
       name: 'buisness',
       component: () => import("@/pages/BuisnessPage.vue"),
    }
  ]
})

export default router
