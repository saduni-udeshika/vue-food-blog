<template>
  <div id="app">
    <Navbar />
    <router-view />
    <!-- <Footer/> -->
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"
// import Footer from './components/Footer.vue'
export default {
  name: "App",
  components: { Navbar },
  comments: {
    Navbar,
    // Footer
  },
}
</script>

<style lang="sass" scoped>
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin: 0
</style>
