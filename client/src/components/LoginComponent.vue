<template lang="html">
  <div class="">
    <div class="form-group">
      <label for="username">Username</label>
      <input type="email" class="form-control" placeholder="Enter username" v-model="username">
      <label for="username">Password</label>
      <input type="email" class="form-control" placeholder="Enter password" v-model="password">
      <button type="button" class="btn btn-primary" name="button"></button>
    </div>
  </div>
</template>

<script>
// import {mapActions} from 'vuex'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  }
}
</script>

<style lang="css">
</style>
