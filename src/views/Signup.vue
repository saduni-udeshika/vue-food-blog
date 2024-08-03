<template>
  <div class="form-container">
    <h2>Signup</h2>
    <form @submit.prevent="signup">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" v-model="password" required />
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirm Password</label>
        <input type="password" v-model="confirmPassword" required />
      </div>
      <button type="submit">Signup</button>
    </form>
    <p class="login-message">
      Already have an account?
      <router-link to="/login">Login here</router-link>.
    </p>
  </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    }
  },
  methods: {
    ...mapActions(["signup"]),
    async signup() {
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match.")
        return
      }

      try {
        await this.$store.dispatch("signup", {
          email: this.email,
          password: this.password,
        })
        this.$router.push("/compose")
        console.log("Signup successful")
      } catch (error) {
        console.error("Signup error:", error.message)
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
.login-message {
  margin-top: 20px;
  text-align: center;
}
.login-message a {
  color: #42b983;
  text-decoration: none;
}
.login-message a:hover {
  text-decoration: underline;
}
</style>
