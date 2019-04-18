<template>
  <div>
    <app-header></app-header>
    <router-view/>
    <app-tabbar></app-tabbar>
  </div>
</template>

<script>
import Header from './components/Common/Header.vue'
import Tabbar from './components/Common/Tabbar.vue'
export default {
  name:'app',
  components : {
    appHeader : Header,
    appTabbar : Tabbar
  }
}
</script>
<style scoped>
</style>
