<template>
  <div class="form-container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <div class="signup-link">
      <p>
        Don't have an account? <router-link to="/signup">Sign up</router-link>
      </p>
    </div>
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

<style scoped>
.form-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.form-group {
  margin-bottom: 15px;
}
.form-group label {
  display: block;
  margin-bottom: 5px;
}
.form-group input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
button {
  width: 100%;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #38a169;
}
.signup-link {
  margin-top: 15px;
  text-align: center;
}
.signup-link p {
  margin: 0;
}
.signup-link a {
  color: #42b983;
  text-decoration: none;
}
.signup-link a:hover {
  text-decoration: underline;
}
</style>
