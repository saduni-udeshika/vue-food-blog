<template>
  <div class="card">
    <img src="../assets/cake.jpg">
    <div class="heading">
      {{ recipeName }}
    </div>
    <div>
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeCard',
  props: ['recipeName', 'description', 'img']

}
</script>

<style lang="sass" scoped>
.card
  background-color: #eeeded
  margin: 15px
  padding: 2%
  width: 25%
  display: inline-block

.heading
  color: #100f0f
  font-size: 2rem

img
  width: 200px
  height: 200px
</style>
