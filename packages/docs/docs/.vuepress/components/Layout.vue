<template>
  <div class="global-styles-container">
    <homepage/>
  </div>
</template>

<script lang="ts">
import Homepage from '../components/Homepage.vue'
export default {
  components: {
    Homepage
  }
}
</script>

<style>
.global-styles-container {
  --primary-color: #fcf2f2;
  --secondary-color: #f12928;
  --accent-color: #190da3;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
</style>