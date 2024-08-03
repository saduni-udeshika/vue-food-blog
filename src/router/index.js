import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import store from "../store"

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
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "Compose",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/signup",
    name: "Compose",
    component: () => import("../views/Signup.vue"),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // This route requires auth
    if (!store.state.user) {
      // redirect to login page
      next({ path: "/login" })
    } else {
      // Proceed to route
      next()
    }
  } else {
    // Proceed to route
    next()
  }
})

export default router
