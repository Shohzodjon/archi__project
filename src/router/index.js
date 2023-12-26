import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import AOS from "aos";
import "aos/dist/aos.css";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
  routes: [
    {
      path: "/:lang",
      children: [
        {
          path: "/",
          name: "home",
          component: HomePage,
        },
        {
          path: "business",
          name: "business",
          component: () => import("@/pages/BuisnessPage.vue"),
        },
        {
          path: "individuals",
          name: "individual",
          component: () => import("@/pages/IndividualPage.vue"),
        },
        {
          path: "product",
          name: "product",
          component: () => import("@/pages/ProductPage.vue"),
        },
        {
          path: "product/:id",
          name: "productslug",
          component: () => import("@/pages/ProductSlug.vue"),
        },

        {
          path: "project",
          name: "projects",
          component: () => import("@/pages/ProjectsPage.vue"),
        },
        {
          path: "project/:id",
          name: "projectslug",
          component: () => import("@/pages/ProjectSlug.vue"),
        },
        {
          path: "blog",
          name: "blog",
          component: () => import("@/pages/BlogPage.vue"),
        },
        {
          path: "blog/:id",
          name: "blog slug",
          component: () => import("@/pages/BlogSlug.vue"),
        },
        {
          path: "company",
          name: "company",
          component: () => import("@/pages/CompanyPage.vue"),
        },
        {
          path: "contact",
          name: "contact",
          component: () => import("@/pages/ContactPage.vue"),
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  AOS.init();
  next();
});

export default router;
