<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-12">
        
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  computed: {
    ...mapActions([
      'photos'
    ])
  }
}
</script>

<style lang="css">
</style>
