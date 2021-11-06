<template>
  <Slideshow/>
</template>


<script lang="ts">
import VueGallerySlideshow from 'vue-gallery-slideshow';
import Vue from 'vue';

const Slideshow = new Vue({
  el: '#slideshow',
  components: {
    VueGallerySlideshow
  },
  data: {
    images: [
      'https://placekitten.com/801/800',
      'https://placekitten.com/802/800',
      'https://placekitten.com/803/800',
      'https://placekitten.com/804/800',
      'https://placekitten.com/805/800',
      'https://placekitten.com/806/800',
      'https://placekitten.com/807/800',
      'https://placekitten.com/808/800',
      'https://placekitten.com/809/800',
      'https://placekitten.com/810/800'
    ],
    index: null
  }
});
</script>