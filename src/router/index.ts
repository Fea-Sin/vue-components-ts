import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue"),
  },
  {
    path: "/json-parse",
    name: "JsonParse",
    component: () => import("@/views/JParse.vue"),
  },
  {
    path: "/account",
    name: "Account",
    component: () => import("@/views/account/Account.vue"),
  },
  {
    path: "/input-table",
    name: "InputTable",
    component: () => import("@/views/InputTable.vue"),
  },
  {
    path: "/auto-loading",
    name: "AutoLoading",
    component: () => import("@/views/AutoLoading.vue"),
  },
  {
    path: "/debounce",
    name: "Debounce",
    component: () => import("@/views/Debounce.vue"),
  },
  {
    path: "/debouncets",
    name: "Debouncets",
    component: () => import("@/views/Debouncets.vue"),
  },
  {
    path: "/transition",
    name: "Transition",
    component: () => import("@/views/transition/Trana.vue"),
  },
  {
    path: "/scroll",
    name: "Scroll",
    component: () => import("@/views/Scroll.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
