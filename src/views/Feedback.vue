<template>
  <div class="feedback">
    <form class="form" @submit.prevent="submitFeedback">
      <label class="label">Name: </label>
      <input
        class="input"
        type="text"
        v-model="name"
        placeholder="Enter your name"
        required
      /><br />
      <label class="label">Email: </label>
      <input
        class="input"
        type="email"
        v-model="email"
        placeholder="Enter your email address"
        required
      /><br />
      <label class="label">Message: </label>
      <textarea
        class="input"
        v-model="message"
        placeholder="Give feedback or ask questions"
        required
      ></textarea
      ><br />
      <button class="button" type="submit">SUBMIT</button>
    </form>
  </div>
</template>

<script>
import { getFirestore, collection, addDoc } from "firebase/firestore"

export default {
  name: "Feedback",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    }
  },
  methods: {
    async submitFeedback() {
      if (this.name && this.email && this.message) {
        try {
          const db = getFirestore()
          await addDoc(collection(db, "feedbacks"), {
            name: this.name,
            email: this.email,
            message: this.message,
            createdAt: new Date(),
          })

          alert("Feedback submitted successfully!")
          this.name = ""
          this.email = ""
          this.message = ""
        } catch (error) {
          console.error("Error submitting feedback:", error)
          alert("Error submitting feedback. Please try again.")
        }
      } else {
        alert("Please fill in all fields.")
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

.input
  width: 100%
  padding: 8px
  margin: 10px 0
  border-radius: 4px
  border: 1px solid #ddd

.label
  display: block
  color: black
  font-size: 1rem
  text-align: left

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
