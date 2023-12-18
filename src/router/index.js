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
      path: "/",
      name: "home",
      component: HomePage,
      meta: {
        breadcrumbLabel: "Home",
      },
    },
    {
      path: "/buisness",
      name: "buisness",
      component: () => import("@/pages/BuisnessPage.vue"),
      meta: {
        breadcrumbLabel: "Buisness",
      },
    },
    {
      path: "/individual",
      name: "individual",
      component: () => import("@/pages/IndividualPage.vue"),
      meta: {
        breadcrumbLabel: "Individual",
      },
    },
    {
      path: "/products",
      name: "product",
      component: () => import("@/pages/ProductPage.vue"),
      meta: {
        breadcrumbLabel: "Products",
      },
    },
    {
      path: "/products/:id",
      name: "productslug",
      component: () => import("@/pages/ProductSlug.vue"),
      meta: {
        breadcrumbLabel: "ProductSlug",
      },
    },
    {
      path: "/products:slug",
      name: "productslug",
      component: () => import("@/pages/ProductSlug.vue"),
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("@/pages/ProjectsPage.vue"),
    },
    {
      path: "/projects:slug",
      name: "projectslug",
      component: () => import("@/pages/ProjectSlug.vue"),
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("@/pages/BlogPage.vue"),
    },
    {
      path: "/blog:slug",
      name: "blog slug",
      component: () => import("@/pages/BlogSlug.vue"),
    },
    {
      path: "/company",
      name: "company",
      component: () => import("@/pages/CompanyPage.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/pages/ContactPage.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  AOS.init();
  next();
});

export default router;
