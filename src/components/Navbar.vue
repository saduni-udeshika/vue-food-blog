<template>
  <div class="nav-container">
    <div class="nav-brand">LaCooK</div>
    <router-link to="/">
      <div class="nav-item">HOME</div>
    </router-link>
    <router-link to="/about">
      <div class="nav-item">ABOUT</div>
    </router-link>
    <router-link to="/recipes">
      <div class="nav-item">ALL RECIPES</div>
    </router-link>
    <router-link to="/feedback">
      <div class="nav-item">F & Q</div>
    </router-link>
    <div class="spacer"></div>
    <router-link to="/login" class="user-icon">
      <div class="nav-item user-icon-content">👤</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Navbar",
}
</script>

<style lang="sass" scoped>
@import "./src/assets/style.sass"

.nav-container
  padding: 14px 0
  display: flex
  flex-direction: row
  align-items: center
  background-color: #f3f3f3
  text-decoration: none

.nav-brand
  color: blueviolet
  margin: 0 2.75%

.nav-item
  color: #090909
  cursor: pointer
  margin: 0 15px
  text-decoration: none

a
  color: inherit
  text-decoration: inherit

.nav-item:hover
  color: #ff0000

input
  padding: 1%
  border-style: solid
  border-color: #b9b5d2

.placeholder
  outline: none

.user-icon
  margin-left: auto
  margin-right: 15px
  display: flex
  align-items: center

.user-icon-content
  cursor: pointer
  font-size: 24px
  color: #090909
  text-decoration: none

.user-icon-content:hover
  color: #ff0000

/*@media screen and (max-width: 850px)
  .search-bar
    flex: none
  .nav-container
    float: none*/
</style>
