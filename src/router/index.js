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
    path: "/brazil",
    name: "Brazil",
    component: () =>
      import(/* webpackChunkName: "brazil" */ "../views/Brazil.vue"),
  },
  {
    path: "/hawaii",
    name: "Brazil",
    component: () =>
      import(/* webpackChunkName: "hawaii" */ "../views/Hawaii.vue"),
  },
  {
    path: "/jamaica",
    name: "Brazil",
    component: () =>
      import(/* webpackChunkName: "jamaica" */ "../views/Jamaica.vue"),
  },
  {
    path: "/panama",
    name: "Brazil",
    component: () =>
      import(/* webpackChunkName: "panama" */ "../views/Panama.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
