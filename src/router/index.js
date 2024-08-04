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
    path: "/feedback-list",
    name: "FeedbackList",
    component: () => import("../views/FeedbackList.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/Signup.vue"),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (!store.state.authIsReady) {
    const unwatch = store.watch(
      (state) => state.authIsReady,
      (authIsReady) => {
        if (authIsReady) {
          unwatch()
          proceed(to, next)
        }
      }
    )
  } else {
    proceed(to, next)
  }
})

function proceed(to, next) {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.state.user) {
      next({ path: "/login" })
    } else {
      next()
    }
  } else {
    next()
  }
}

export default router
