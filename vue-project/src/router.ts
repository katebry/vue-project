import Vue from "vue";
import VueRouter from 'vue-router'
import home from "./pages/home.vue";
import favourites from "./pages/favourites.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/favourites",
    name: "favourites",
    component: favourites,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router