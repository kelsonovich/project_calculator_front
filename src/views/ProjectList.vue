<template>
  <div v-if="allProjects">
    <ProjectListItemComponent
        v-for="project in allProjects"
        :key="project.id"
        :project="project"
    />
  </div>
</template>

<script>

import ProjectListItemComponent from "@/components/project/ProjectListItemComponent";
export default {
  name: "ProjectList",
  components: {ProjectListItemComponent},
  computed: {
    allProjects() {
      return this.$store.getters.GET_ALL_PROJECTS;
    },
  },
  mounted() {
    this.$store.dispatch('getAllProjects');
  },
  methods: {}
}
</script>

<style scoped>

</style>