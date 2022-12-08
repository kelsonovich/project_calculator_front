<template>
  <div class="mb-2">
    <label :for="code" class="form-label mb-2"><small>{{ title }}</small></label>
    <input type="text" class="form-control" :id="code" placeholder="" :value="price">
  </div>
</template>

<script>
export default {
  name: "ProjectPriceInputComponent",
  props: {
    price: Number,
    title: String,
    code: String
  }
}
</script>

<style scoped>

</style>