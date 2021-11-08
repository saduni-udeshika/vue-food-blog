<template>
  <div class="recipes">
    <div>
      <RecipeCard :recipeName="recipeName[0]" :description="description[0]" :img ="img[0]" />
      <RecipeCard :recipeName="recipeName[1]" :description="description[1]" :img ="img[1]" />
      <RecipeCard :recipeName="recipeName[1]" :description="description[1]" :img ="img[1]" />
      <RecipeCard :recipeName="recipeName[1]" :description="description[1]" :img ="img[1]" />
      <RecipeCard :recipeName="recipeName[1]" :description="description[1]" :img ="img[1]" />
    </div>
  </div>
</template>
<script>
import RecipeCard from '../components/RecipeCard'

export default {
  name: 'Recipes',

  components: {

    RecipeCard
  },

  data () {
    return {
      recipeName: ['Recipes1', 'Recipes2'],
      description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
      '          labore et dolore magna aliqua.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
      '          labore et dolore magna aliqua.'],
      img: ['/img/cake.f01ea640.jpg', '/img/cake.f01ea640.jpg']
    }
  }
}
</script>
<style lang="sass" scoped>

</style>
