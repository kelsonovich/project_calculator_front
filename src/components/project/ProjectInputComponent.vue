<template>
  <div class="mb-3" v-if="input">
    <label :for="input.key" class="form-label mb-2">{{ input.label }}</label>
    <input type="text" class="form-control"
           :id="input.key"
           :readonly="input.readonly"
           :disabled="input.readonly"
           v-model="inputValue"
    >
  </div>
</template>

<script>
export default {
  name: "ProjectInputComponent",
  props: {
    input: Object
  },
  data() {
    return {
      inputValue: this.input.value,
    }
  }
}
</script>

<style scoped>

</style>