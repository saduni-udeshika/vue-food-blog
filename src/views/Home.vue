<template>
  <div class="main">
    <div class="home">
      <div class="flex-container">
        <div class="home-text">
          LEARN HOW TO COOK TASTY MEALS
          <p>The Simply Recipes</p>
        </div>
      </div>
    </div>
    <div class="flex-box">
      <div class="intro">
        <h1>What We do at LaCooK?</h1>
        <div>We provide recipes and cooking ideas</div>
        <div class="container">
          <div class="card">
            <img class="features" src="../assets/shrimp.jpg" />
            <h3>WEEKDAYS SPECIAL RECIPES</h3>
            <div class="text-features">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit
              ut aliquam purus sit amet luctus venenatis lectus.
            </div>
          </div>
          <div class="card" id="pasta">
            <img class="features" src="../assets/rotini-pasta.jpg" />
            <h3>PASTA SALADS FOR EVERY OCCASION</h3>
            <div class="text-features">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit
              ut aliquam purus sit amet luctus venenatis lectus.
            </div>
          </div>
          <div class="card">
            <img class="features" src="../assets/cake.jpg" />
            <h3>CAKE DECORATING & TIPS</h3>
            <div class="text-features">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit
              ut aliquam purus sit amet luctus venenatis lectus.
            </div>
          </div>
        </div>
      </div>
      <div class="spacer"></div>
      <div class="intro">
        <h1>Why you should choose LaCooK</h1>
        <div>There are reasons, Why you should choose us.</div>
      </div>
      <div class="mt-40"></div>
      <div class="container">
        <div class="card-2">
          <img class="icon-image" src="../assets/icons8-food-30.png" />
          <div class="mt-20"></div>
          <div class="text-header">Tasty Food Recipes</div>
          <div class="mt-20"></div>
          <div class="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ut
            aliquam purus sit amet luctus venenatis lectus.
          </div>
        </div>
        <div class="card-2">
          <img class="icon-image" src="../assets/icons8-food-30.png" />
          <div class="mt-20"></div>
          <div class="text-header">Tasty Food Recipes</div>
          <div class="mt-20"></div>
          <div class="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ut
            aliquam purus sit amet luctus venenatis lectus.
          </div>
        </div>
        <div class="card-2">
          <img class="icon-image" src="../assets/icons8-food-30.png" />
          <div class="mt-20"></div>
          <div class="text-header">Tasty Food Recipes</div>
          <div class="mt-20"></div>
          <div class="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ut
            aliquam purus sit amet luctus venenatis lectus.
          </div>
        </div>
        <div class="card-2">
          <img class="icon-image" src="../assets/icons8-food-30.png" />
          <div class="mt-20"></div>
          <div class="text-header">Tasty Food Recipes</div>
          <div class="mt-20"></div>
          <div class="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ut
            aliquam purus sit amet luctus venenatis lectus.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
}
</script>
<style lang="sass" scoped>
@import "./src/assets/style.sass"
.home
  height: 100vh
  background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0.1,0.5)),url("../assets/home.jpg")
  background-size: cover

*
  box-sizing: border-box

.flex-container
  display: flex
  flex-wrap: wrap
  font-size: 45px
  padding: 20%
  color: rgba(245, 240, 240, 0.94)
  font-weight: bold

@media (max-width: 800px)
 .flex-item-right
   flex: 100%
 .flex-item-left
   flex: 100%

a
  text-decoration: none
  color: blueviolet

.flex-box
  padding: 5%

.container
  padding: 4%
  display: flex
  flex-direction: row

.features
  margin-top: 20px
  width: 200px
  height: 200px
  border-radius: 50%

.card
  height: 480px
  border: 2px
  border: solid
  border-color: #c9a3ef
  border-radius: 4px
  padding: 30px 30px
  margin: 1%

#pasta
  background-color: #eeeded

.card-2
  background-color: #a59a8e
  margin: 2%
  padding: 4%
  border-radius: 4px

.text
  color: white
  line-height: 2rem

.text-header
  color: white
  font-weight: bold
  font-size: 1.5rem

.icon-image
  width: 50px
  height: 50px
</style>
