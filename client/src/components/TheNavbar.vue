<template lang="html">
  <div class="container">
    <router-link :to="{ name: 'IndexPage'}">
      <h1 class="navbar-brand">Jepretgram</h1>
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link :to="{ name: 'IndexPage'}">
            <h5 class="nav-link">Home</h5>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'uploadPhoto'}">
            <h5 class="nav-link">Photos</h5>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState([
      'showLogin'
    ])
  }
}
</script>

<style lang="css">
</style>
