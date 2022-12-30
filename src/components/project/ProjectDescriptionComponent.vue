<template>
  <div class="card card-body h-100">
    <ProjectInputComponent :input="getDescriptionConfig" @update="update1"/>
  </div>
</template>

<script>
import ProjectInputComponent from "@/components/project/ProjectInputComponent";
export default {
  name: "ProjectDescriptionComponent",
  components: {ProjectInputComponent},
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
    update1(value) {
      this.$emit('updateDescription', value);
    },
  }
}
</script>

<style scoped>

</style>