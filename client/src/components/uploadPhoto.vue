<template lang="html">
  <div class="photoUpload">
    <input type="file" @change="processFile">
    <input type="text" v-model="caption">
    <button type="button" class="btn btn-primary" name="button" @click="upload">Submit</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      photo: '',
      caption: ''
    }
  },
  methods: {
    processFile (e) {
      this.photo = e.target.files[0]
    },
    upload () {
      this.uploadPhoto({
        photo: this.photo,
        caption: this.caption
      })
    },
    ...mapActions([
      'uploadPhoto'
    ])
  }
}
</script>

<style lang="css">
</style>
