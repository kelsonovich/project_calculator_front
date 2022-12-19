<template>
  <div :class="input.class" v-if="input">
    <label
        v-if="input.label"
        :for="input.key"
        class="form-label mb-2"
    >
      {{ input.label }}
    </label>
    <input
        :id="input.key"
        :type="input.type"
        class="form-control form-control-sm"
        :readonly="input.readonly"
        :disabled="input.readonly"
        v-model="inputValue"
        @change="setValue"
        v-imask="getMask()"
    >
  </div>
</template>

<script>
import {IMaskDirective} from 'vue-imask';

export default {
  name: "ProjectInputComponent",
  props: {
    input: Object
  },
  data() {
    return {
      inputValue: this.input.value,
    }
  },
  methods: {
    setValue(event) {
      let value = event.target.value;

      if (this.isNumber()) {
        value = Number(value);
      }

      this.$emit('update', {
        [this.input.key]: value
      });
    },
    getMask() {
      let mask = {mask: String};

      if (this.isNumber()) {
        mask = {
          mask: Number,
          scale: 2,
          radix: '.'
        };
      }

      return mask;
    },
    isNumber() {
      return this.input.type === 'number';
    }
  },
  directives: {
    imask: IMaskDirective,
  },
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