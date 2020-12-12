import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import Product from "@/components/ProductSumary.vue";
import Teacher from "@/components/Teacher.vue";




Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/men/",
    component: Products,
    children: [
      {
        path: "bags",
        component: Product,
      },
      {
        path: "shoes",
        component: Teacher,
      },
    ],
  },
  {
    path: "/women",
    component: Products,
    children: [
      {
        path: "handbags",
        component: Product,
      },
      {
        path: "shoes",
        component: Teacher,
      },
    ],
  },
  { path: "*", redirect: "/" },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: "smooth",
      };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
