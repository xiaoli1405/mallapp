<template>
  <div id="app">
    <router-view/>
    <main-tab-bar/>
  </div>
</template>
<script>

  import MainTabBar from 'components/content/tabbar/MainTabBar'

  export default {
    components: {
      MainTabBar
    }
}
</script>
<style>
  @import "./assets/css/base.css"
</style>
