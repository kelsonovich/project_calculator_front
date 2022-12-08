<template>
  <div>
    <ProjectDescriptionComponent :description="project.description" />

    <div class="container-fluid row col-xl-4 col-md-12">
      <ProjectDateComponent :project="project" :isReadonly="true"/>
    </div>

    <ProjectClientTableComponent :project="project" :isReadonly="true"/>
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
  }
}
</script>

<style scoped>

</style>