<template>
  <div class="card card-body h-100">
    <InputComponent :input="getDescriptionConfig" @update="updateDescription"/>
  </div>
</template>

<script>
import InputComponent from "@/components/ui/InputComponent";

export default {
  name: "DescriptionComponent",
  components: {InputComponent},
  props: {
    project: Object
  },
  computed: {
    getDescriptionConfig() {
      return {
        label: 'Описание:',
        key: 'description',
        value: this.project.description,
        readonly: false,
        type: 'long_text',
        rows: 16,
      };
    }
  },
  methods: {
    updateDescription(value) {
      this.$emit('updateDescription', value);
    },
  }
}
</script>

<style scoped>

</style>