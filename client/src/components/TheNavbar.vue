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
      <ul class="navbar-nav float-right">
        <li v-if="loggedIn" class="nav-item">
            <h5>Halo {{username}}</h5>
        </li>
        <li class="nav-item">
            <h5 class="nav-link" @click="showRegister">Register</h5>
        </li>
        <li class="nav-item">
            <h5 v-if="loggedIn" class="nav-link" @click="destroyToken">Logout</h5>
            <h5 v-else class="nav-link" @click="showLogin">Login</h5>
        </li>
      </ul>
    </div>
    <LoginComponent v-if="loggingIn" @hide-me="hideLogin"/>
    <RegisterForm v-if="register" @hide-me="hideRegister"/>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import LoginComponent from '@/components/LoginComponent'
import RegisterForm from '@/components/RegisterForm'
export default {
  components: {
    'LoginComponent': LoginComponent,
    'RegisterForm': RegisterForm
  },
  data () {
    return {
      'loggingIn': false,
      'loggedIn': false,
      'register': false
    }
  },
  methods: {
    ...mapActions([
      'decodeToken',
      'logout'
    ]),
    showLogin () {
      this.loggingIn = true
    },
    showRegister () {
      this.register = true
    },
    hideLogin () {
      this.loggingIn = false
      this.loggedIn = true
      this.decodeToken()
    },
    hideRegister () {
      this.register = false
    },
    destroyToken () {
      this.logout()
      this.loggedIn = false
    }
  },
  computed: {
    ...mapState([
      'username'
    ])
  }
}
</script>

<style lang="css">
</style>
