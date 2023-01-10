<template>
  <div v-if="project">
    <div class="container-fluid row mb-3">

      <div class="col-4">
        <ProjectDateComponent :project="project" :isReadonly="true" :isClient="true" @changeProject="calculate"/>
      </div>
      <div class="col-8">
        <ProjectDescriptionComponent :project="project" @changeDescription="calculate"/>
      </div>
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
    calculate(value) {
      console.log('ProjectClientTabComponent');
      console.log(value);
      // this.$emit('calculateProject', value);
    }
  }
}
</script>

<style scoped>

</style>