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
      component: HomePage
    },
    {
      path: '/buisness',
      name: 'buisness',
      component: () => import("@/pages/BuisnessPage.vue"),
    }, {
      path: '/individual',
      name: 'individual',
      component: () => import('@/pages/IndividualPage.vue')
    },
    {
      path: '/products',
      name: 'product',
      component: () => import('@/pages/ProductPage.vue')
    },
    {
      path:'/projects',
      name:'projects',
      component:()=>import('@/pages/ProjectsPage.vue')
    },
    {
      path:'/blog',
      name:'blog',
      component:()=>import('@/pages/BlogPage.vue')
    }

  ]
})

export default router
