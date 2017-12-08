<template lang="html">
  <div class="">
    <div class="form-group">
      <label for="username">Username</label>
      <input type="email" class="form-control" placeholder="Enter username" v-model="username">
      <label for="username">Password</label>
      <input type="email" class="form-control" placeholder="Enter password" v-model="password">
      <div class="whitespace"></div>
      <button type="button" class="btn btn-success" name="button" @click="doLogin">Login</button>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    doLogin () {
      this.login({
        username: this.username,
        password: this.password
      })
      this.$emit('hide-me')
    }
  }
}
</script>

<style lang="css">
.whitespace {
  margin: 16px
}
</style>
