<template>
  <div class="compose">
    <form @submit.prevent="submitPost">
      <div class="container">
        <p>Upload Image Here...</p>
        <input type="file" @change="onFileChange" /><br />
        <div id="image-box" v-if="imagePreview">
          <img :src="imagePreview" alt="Image Preview" />
        </div>
      </div>
      <label class="inputs">Recipe Tittle: </label><br />
      <input type="text" v-model="recipeHeading" required /><br />
      <label class="inputs">Recipe: </label><br />
      <textarea v-model="recipe" required></textarea><br />
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
  margin: 10% auto
  padding: 2% 10%
  text-align: left
  border: 1px solid #ddd
  border-radius: 5px
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)

.container
  border: 1px solid #ddd
  border-radius: 5px
  padding: 20px
  margin-bottom: 25px

form
  display: flex
  flex-direction: column

input[type="text"], textarea
  width: 100%
  padding: 10px 0px 10px 1px
  margin-bottom: 10px
  border: 1px solid #ddd
  border-radius: 5px
  align-items: center

button
  padding: 10px 8px
  background-color: black
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
