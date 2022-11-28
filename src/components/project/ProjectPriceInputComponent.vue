<template>
<!--  <div class="input-group input-group-sm">-->
<!--    <span class="input-group-text" :id="code">{{ title }}</span>-->
<!--    <input type="text" class="form-control" :value="price">-->
<!--  </div>-->
  <div class="">
    <label :for="code" class="form-label"><small>{{ title }}</small></label>
    <input type="text" class="form-control form-control-sm" :id="code" placeholder="" :value="price">
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