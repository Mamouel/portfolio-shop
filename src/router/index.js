import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";




Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/men/",
    component: Home,
    children: [
      {
        path: "bags",
        component: Home,
      },
      {
        path: "shoes",
        component: Home,
      },
    ],
  },
  {
    path: "/women",
    component: Home,
    children: [
      {
        path: "handbags",
        component: Home,
      },
      {
        path: "shoes",
        component: Home,
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
