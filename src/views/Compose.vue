<template>
  <div class="compose">
    <h1>Compose</h1>
    <form @submit.prevent="submitPost">
      <p>Upload Image Here</p>
      <input type="file" @change="onFileChange" /><br />
      <div id="image-box" v-if="imagePreview">
        <img :src="imagePreview" alt="Image Preview" />
      </div>
      <input
        type="text"
        v-model="recipeHeading"
        placeholder="Heading"
        required
      /><br />
      <textarea v-model="recipe" placeholder="Recipe" required></textarea><br />
      <button type="submit">PUBLISH</button>
    </form>
  </div>
</template>

<script>
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { getFirestore, collection, addDoc } from "firebase/firestore"

export default {
  name: "Compose",
  data() {
    return {
      recipeHeading: "",
      recipe: "",
      imageFile: null,
      imagePreview: null,
    }
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0]
      if (file) {
        this.imageFile = file
        const reader = new FileReader()
        reader.onload = (e) => {
          this.imagePreview = e.target.result
        }
        reader.readAsDataURL(file)
      }
    },
    async submitPost() {
      if (!this.recipeHeading || !this.recipe || !this.imageFile) {
        alert("Please fill in all fields and upload an image.")
        return
      }

      try {
        const storage = getStorage()
        const storageRef = ref(storage, "images/" + this.imageFile.name)
        const snapshot = await uploadBytes(storageRef, this.imageFile)
        const imageUrl = await getDownloadURL(snapshot.ref)

        const db = getFirestore()
        await addDoc(collection(db, "recipies"), {
          heading: this.recipeHeading,
          text: this.recipe,
          imageUrl,
          createdAt: new Date(),
        })

        alert("Recipe published successfully!")
        this.recipeHeading = ""
        this.recipe = ""
        this.imageFile = null
        this.imagePreview = null
      } catch (error) {
        console.error("Error publishing post:", error)
        alert("Error publishing post. Please try again.")
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.compose
  max-width: 600px
  margin: 0 auto
  padding: 2% 10%
  text-align: left
  background-color: #f9f9f9
  border: 1px solid #ddd
  border-radius: 5px
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)

form
  display: flex
  flex-direction: column

input[type="text"], textarea
  width: 100%
  padding: 10px
  margin-bottom: 10px
  border: 1px solid #ddd
  border-radius: 5px

button
  padding: 10px 15px
  background-color: #42b983
  color: white
  border: none
  border-radius: 5px
  cursor: pointer

button:hover
  background-color: #38a169

#image-box
  margin-bottom: 10px
  img
    max-width: 100%
    border: 1px solid #ddd
    border-radius: 5px
</style>
