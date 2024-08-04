<template>
  <div class="feedback">
    <form class="form" @submit.prevent="login">
      <h2>Login</h2>
      <div class="form-group">
        <label class="label">Email</label>
        <input
          class="input"
          type="email"
          v-model="email"
          placeholder="Enter your email"
          required
        />
      </div>
      <div class="form-group">
        <label class="label">Password</label>
        <input
          class="input"
          type="password"
          v-model="password"
          placeholder="Enter your password"
          required
        />
      </div>
      <button class="button" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    ...mapActions(["login"]),
    async login() {
      try {
        await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        })
        this.$router.push("/compose")
        console.log("login successful")
      } catch (error) {
        console.error("login error:", error.message)
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.feedback
  display: flex
  justify-content: center
  align-items: center
  height: 76vh
  background-color: #f9f9f9

.form
  max-width: 600px
  width: 100%
  padding: 2% 5%
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)
  border-radius: 4px
  background-color: #fff

.form-group
  margin-bottom: 15px

.label
  display: block
  color: black
  font-size: 1rem
  text-align: left

.input
  width: 100%
  padding: 8px
  margin: 10px 0
  border-radius: 4px
  border: 1px solid #ddd

.button
  width: 100%
  padding: 10px
  border-radius: 4px
  font-size: 1rem
  color: white
  background-color: black
  border: none
  cursor: pointer
  margin-top: 10px

.button:hover
  background-color: #38a169
</style>
