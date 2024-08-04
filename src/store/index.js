import Vue from "vue"
import Vuex from "vuex"
import { auth } from "../firebase/config"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    authIsReady: false,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      console.log("user state changed", state.user)
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload
    },
  },
  actions: {
    async signup(context, { email, password }) {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      if (res) {
        context.commit("setUser", res.user)
      } else {
        throw new Error("signup failed.")
      }
    },
    async login(context, { email, password }) {
      const res = await signInWithEmailAndPassword(auth, email, password)
      if (res) {
        context.commit("setUser", res.user)
      } else {
        throw new Error("login failed.")
      }
    },
    async logout(context) {
      await signOut(auth)
      context.commit("setUser", null)
    },
    checkAuthState(context) {
      onAuthStateChanged(auth, (user) => {
        context.commit("setUser", user || null)
        context.commit("setAuthIsReady", true)
      })
    },
  },
  modules: {},
})
