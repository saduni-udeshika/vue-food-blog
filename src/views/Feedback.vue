<template>
  <div class="feedback">
    <form class="feedbackForm" @submit.prevent="submitFeedback">
      <label class="inputs">Name: </label><br />
      <input
        class="input"
        type="text"
        v-model="name"
        placeholder="Enter your name"
        required
      /><br />
      <label class="inputs">Email: </label><br />
      <input
        class="input"
        type="email"
        v-model="email"
        placeholder="Enter your email address"
        required
      /><br />
      <label class="inputs">Type your Feedback or Questions: </label><br />
      <textarea
        class="input"
        v-model="message"
        placeholder="Give feedback or ask questions"
        required
      ></textarea
      ><br />
      <button class="submit" type="submit">SUBMIT</button>
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
  height: 76vh
.feedbackForm
  margin: 4% 20%
  border: 2px solid #c9a3ef
  border-radius: 4px
  padding: 30px
.input
  width: 90%
  padding: 8px
  margin: 10px
  border-radius: 4px
.inputs
  float: left
  color: black
  font-size: 1rem
.submit
  width: 200px
  padding: 0.75%
  margin: 20px
  border-radius: 4px
  font-size: 1rem
  color: white
  background-color: black
  cursor: pointer
</style>
