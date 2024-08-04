<template>
  <div v-if="isLoggedIn" class="feedbackList">
    <ul>
      <li
        v-for="feedback in feedbacks"
        :key="feedback.id"
        class="feedback-card"
      >
        <strong>{{ feedback.name }}</strong
        >: {{ feedback.message }}
      </li>
    </ul>
  </div>
  <div v-else class="login-prompt">
    <p>Please log in to view feedback.</p>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getFirestore, collection, getDocs } from "firebase/firestore"

export default {
  name: "FeedbackList",
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
  margin: 2% 2%;
  padding: 30px;
  border-radius: 4px;
}

ul {
  list-style-type: none;
  padding-left: 20px; /* Add padding to separate bullets from text */
}

.feedback-card {
  margin-bottom: 10px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  text-align: left; /* Align text to the left */
}

.feedback-card:last-child {
  margin-bottom: 0;
}

.login-prompt {
  text-align: center;
  margin: 20px;
}
</style>
