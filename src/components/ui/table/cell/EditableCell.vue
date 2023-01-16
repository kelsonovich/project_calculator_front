<template>
  <ProjectInputComponent :input="cell" @update="setValue"/>
</template>

<script>
import ProjectInputComponent from "@/components/ui/InputComponent";
export default {
  name: "EditableCell",
  components: {ProjectInputComponent},
  props: {
    cell: Object
  },
  methods: {
    setValue(value) {
      console.log('EditableCell');
      this.$emit('updateCell', value);
    }
  }
}
</script>

<style scoped>

</style>