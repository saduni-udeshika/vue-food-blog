import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/recipes",
    name: "Recipes",
    component: () => import("../views/Recipes.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/feedback",
    name: "Feedback",
    component: () => import("../views/Feedback.vue"),
  },
  {
    path: "/compose",
    name: "Compose",
    component: () => import("../views/Compose.vue"),
  },
  {
    path: "/login",
    name: "Compose",
    component: () => import("../views/Login.vue"),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
