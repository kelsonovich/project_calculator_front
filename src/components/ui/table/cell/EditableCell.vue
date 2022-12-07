<template>
  <div>
    <input
        :type="cell.type"
        :name="cell.key"
        class="form-control"
        v-model="value"
        @input="setValue"
    />
  </div>
</template>

<script>
export default {
  name: "EditableCell",
  props: {
    cell: Object
  },
  data() {
    return {
      value: this.cell.value
    }
  },
  methods: {
    setValue() {
      console.log({
        key: this.cell.key,
        value: this.value
      });
    }
  }
}
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>