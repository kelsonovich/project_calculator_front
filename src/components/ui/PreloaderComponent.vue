<template>
  <div class="overlay">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PreloaderComponent"
}
</script>

<style scoped>
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.75);
  transition: opacity .3s ease;
  backdrop-filter: blur(10px);
  z-index: 1040;
}

.spinner-border {
  z-index: 1050;
  position: fixed;
  left: 50%;
  top: 50%;
  /*width: 5rem;*/
  /*height: 5rem;*/
}
</style>