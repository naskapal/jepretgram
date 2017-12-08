<template lang="html">
  <form>
    <div class="form-group">
      <label for="Username">Username</label>
      <input type="text" v-model="username">
      <div class="whitespace"></div>
      <label for="Password">Password</label>
      <input type="password" v-model="password">
      <button type="button" class="btn btn-success" @click="sendRegister">Register</button>
    </div>
  </form>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      'username': '',
      'password': ''
    }
  },
  methods: {
    ...mapActions([
      'register'
    ]),
    sendRegister () {
      this.register({
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
