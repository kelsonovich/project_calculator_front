<template>
  <div v-if="project">
    <ProjectDescriptionComponent :description="project.description" @updateDescription="updateProject"/>

    <div class="container-fluid row col-xl-4 col-md-12 mb-3">
      <ProjectDateComponent :project="project" :isReadonly="true" @updateStartDate="updateProject"/>
    </div>

    <ProjectClientTableComponent :project="project" :isClient="true"/>
  </div>
</template>

<script>
import ProjectDescriptionComponent from "@/components/project/ProjectDescriptionComponent";
import ProjectDateComponent from "@/components/project/ProjectDateComponent";
import ProjectClientTableComponent from "@/components/project/ProjectClientTableComponent";

export default {
  name: "ProjectClientTabComponent",
  components: {ProjectClientTableComponent, ProjectDateComponent, ProjectDescriptionComponent},
  props: {
    project: Object
  },
  methods: {
    updateProject(value) {
      this.$emit('updateProject', value);
    }
  }
}
</script>

<style scoped>

</style>