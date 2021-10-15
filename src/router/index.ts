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
  {
    path: "/vface",
    name: "Vface",
    component: () => import("@/views/Vface.vue"),
  },
  {
    path: "/editor",
    name: "Editor",
    component: () => import("@/views/Editor.vue"),
  },
  {
    path: "/diff",
    name: "Diff",
    component: () => import("@/views/MyDiff.vue"),
  },
  {
    path: "/vf-alert",
    name: "VFAlert",
    component: () => import("@/views/VFUI/alert.vue"),
  },
  {
    path: "/vf-task-tree",
    name: "VFTaskTree",
    component: () => import("@/views/VFUI/task-tree.vue"),
  },
  {
    path: "/ace-alli",
    name: "AceAlli",
    component: () => import("@/views/AceAlli.vue"),
  },
  {
    path: "/split-demo",
    name: "SplitDemo",
    component: () => import("@/views/SplitDemo.vue"),
  },
  {
    path: "/vf-tag",
    name: "VFTag",
    component: () => import("@/views/VFUI/tag.vue"),
  },
  {
    path: "/vf-popover",
    name: "VFPop",
    component: () => import("@/views/VFUI/popover.vue"),
  },
  {
    path: "/vf-select",
    name: "VFSelect",
    component: () => import("@/views/VFUI/select.vue"),
  },
  {
    path: "/vf-tooltip",
    name: "VFTooltip",
    component: () => import("@/views/VFUI/tooltip.vue"),
  },
  {
    path: "/vf-render",
    name: "VFRender",
    component: () => import("@/views/Vrender.vue"),
  },
  {
    path: "/vf-tabs",
    name: "VFTabs",
    component: () => import("@/views/VFUI/tabs.vue"),
  },
  {
    path: "/obj-change",
    name: "ObjChange",
    component: () => import("@/views/ObjChange.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
