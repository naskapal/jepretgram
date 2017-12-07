<template>
  <div id="app">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <TheNavbar/>
      </nav>
    </div>
    <login v-if="showLogin"/>
    <router-view/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import TheNavbar from '@/components/TheNavbar'
import Login from '@/components/LoginComponent'
export default {
  components: {
    'TheNavbar': TheNavbar,
    'login': Login
  },
  computed: {
    ...mapState([
      'showLogin'
    ])
  },
  name: 'app'
}
</script>

<style scoped>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
