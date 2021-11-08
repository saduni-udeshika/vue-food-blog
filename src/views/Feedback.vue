<template>
  <div class="feedback">
    <form class="feedbackForm">
      <lable class="inputs">Name: </lable><br>
      <input class="input" type="text" placeholder="Enter your name"><br>
      <lable class="inputs">Email: </lable><br>
      <input class="input" type="email" placeholder="Enter your email address"><br>
      <lable class="inputs">Type your Feedback or Questions: </lable><br>
      <textarea class="input" type="text" placeholder="Give feedbacks or ask questions"></textarea><br>
      <button class="submit">SUBMIT</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Feedback'
}
</script>

<style lang="sass" scoped>
.feedback
  height: 76vh
.feedbackForm
  margin: 4% 20%
  border: 2px
  border: solid
  border-color: #c9a3ef
  border-radius: 4px
  padding: 30px 30px
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
