<template>
  <ProjectInputComponent :input="cell" @update="setValue"/>
</template>

<script>
import ProjectInputComponent from "@/components/project/ProjectInputComponent";
export default {
  name: "EditableCell",
  components: {ProjectInputComponent},
  props: {
    cell: Object
  },
  methods: {
    setValue(value) {
      this.$emit('updateCell', value);
    }
  }
}
</script>

<style scoped>

</style>