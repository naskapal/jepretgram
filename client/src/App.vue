<template>
  <div id="app">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <TheNavbar/>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'
export default {
  components: {
    'TheNavbar': TheNavbar
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
