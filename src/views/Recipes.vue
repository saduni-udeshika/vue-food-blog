<template>
  <div class="recipes">
    <div v-if="recipes.length > 0">
      <RecipeCard
        v-for="(recipe, index) in recipes"
        :key="index"
        :recipeName="recipe.heading"
        :description="recipe.text"
        :img="recipe.imageUrl"
      />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { getFirestore, collection, getDocs } from "firebase/firestore"
import RecipeCard from "../components/RecipeCard"

export default {
  name: "Recipes",
  components: {
    RecipeCard,
  },
  data() {
    return {
      recipes: [],
    }
  },
  async mounted() {
    const db = getFirestore()
    const querySnapshot = await getDocs(collection(db, "recipies"))
    querySnapshot.forEach((doc) => {
      this.recipes.push(doc.data())
    })
  },
}
</script>

<style lang="sass" scoped></style>
