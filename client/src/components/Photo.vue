<template lang="html">
  <div class="card mb-3">
  <!-- <h3 class="card-header"> nanti username disini </h3> -->
  <img style="height: 200px; width: 100%; display: block;" :src="photo.path" alt="Card image">
  <div class="card-body">
    <p class="card-text">{{photo.caption}}</p>
  </div>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
  </div>
</div>
</template>

<script>
export default {
  props: ['photo']
}
</script>

<style lang="css">
</style>
