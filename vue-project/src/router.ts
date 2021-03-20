import Vue from "vue";
const VueRouter = require('vue-router').default;
// import VueRouter, { RouteConfig } from 'vue-router'
import home from "./pages/home.vue";
import favorites from "./pages/favorites.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/favorites",
    name: "favorites",
    component: favorites,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router