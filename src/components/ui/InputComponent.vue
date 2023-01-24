<template>
  <div :class="input.class" v-if="input">
    <label
        v-if="input.label && !isTextarea"
        :for="input.key"
        class="form-label mb-2"
    >
      {{ input.label }}
    </label>
    <template v-if="isTextarea">
      <textarea
          :id="input.key"
          :class="getClass"
          :readonly="input.readonly"
          :disabled="input.readonly"
          v-model="inputValue"
          @change="setValue"
          :rows="input.rows"
          placeholder="Описание проекта..."
      > </textarea>
    </template>
    <template v-else>
      <input
          :id="input.key"
          :type="input.type"
          :class="getClass"
          :readonly="input.readonly"
          :disabled="input.readonly"
          v-model="inputValue"
          @change="setValue"
          v-imask="getMask()"
          :placeholder="input.placeholder"
      >
    </template>
  </div>
</template>

<script>
import {IMaskDirective} from 'vue-imask';

export default {
  name: "InputComponent",
  props: {
    input: Object
  },
  computed: {
    inputValue() {
      return this.input.value;
    },
    getClass() {
      let classes = [];

      classes.push('form-control');
      classes.push('form-control-sm');

      if (this.input.type === 'number') {
        classes.push('input__text_center');
      }

      return classes;
    },
    isTextarea() {
      return this.input.type === 'long_text';
    },
  },
  methods: {
    setValue(event) {
      let value = event.target.value;

      if (this.isNumber()) {
        value = Number(value);
      }

      if (this.input.isRequired) {
        if (value.length === 0) {
          return;
        }
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
          radix: '.',
          min: -10000000,
          max: 10000000
        };
      }

      return mask;
    },
    isNumber() {
      return this.input.type === 'number';
    },
    isDate() {
      return this.input.type === 'date';
    },
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
td .input__text_center {
  text-align: center;
}
</style>