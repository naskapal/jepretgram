<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <photo v-for="(photo, index) in photos" :key="index" :photo="photo"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Photo from '@/components/Photo'
export default {
  components: {
    'photo': Photo
  },
  computed: {
    ...mapState([
      'photos'
    ])
  },
  methods: {
    ...mapActions([
      'getPhotos'
    ])
  },
  mounted () {
    this.getPhotos()
  }
}
</script>

<style lang="css">
</style>
