<template>
  <div class="compose">
    <h1>Compose</h1>
    <form class="" action="" method="post">
      <p>Upload Image Here</p>
      <div id="image-box"></div>
      <input type="text" name="post-heading" placeholder="Heading"><br>
      <textarea name="text1" placeholder="Recipe"></textarea><br>
      <button type="submit" name="button">PUBLISH</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Compose'
}
</script>

<style lang="sass" scoped>
.compose
  padding: 2% 10%
  text-align: left
#image-box
  border: solid black
</style>
