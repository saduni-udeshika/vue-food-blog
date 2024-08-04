<template>
  <div v-if="isLoggedIn" class="feedbackList">
    <h1>Feedback</h1>
    <ul>
      <li v-for="feedback in feedbacks" :key="feedback.id">
        <strong>{{ feedback.name }}</strong
        >: {{ feedback.message }}
      </li>
    </ul>
  </div>
  <div v-else>
    <p>Please log in to view feedback.</p>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getFirestore, collection, getDocs } from "firebase/firestore"

export default {
  name: "feedbackList",
  data() {
    return {
      feedbacks: [],
      isLoggedIn: false,
    }
  },
  async created() {
    const auth = getAuth()
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        this.isLoggedIn = true
        await this.fetchFeedback()
      } else {
        this.isLoggedIn = false
      }
    })
  },
  methods: {
    async fetchFeedback() {
      const db = getFirestore()
      const feedbackCollection = collection(db, "feedbacks")
      const feedbackSnapshot = await getDocs(feedbackCollection)
      this.feedbacks = feedbackSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    },
  },
}
</script>

<style scoped>
.feedbackList {
  margin: 4% 20%;
  padding: 30px;
  border: 2px solid #c9a3ef;
  border-radius: 4px;
}
</style>
