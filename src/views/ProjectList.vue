<template>
  <div v-if="allProjects" class="container">
    <ProjectListItemComponent
        v-for="project in allProjects"
        :key="project.id"
        :project="project.result"
        @delete="load"
    />
  </div>
</template>

<script>

import ProjectListItemComponent from "@/components/project/ListItemComponent";
export default {
  name: "ProjectList",
  components: {ProjectListItemComponent},
  computed: {
    allProjects() {
      return this.$store.getters.GET_ALL_PROJECTS;
    },
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      this.$store.dispatch('getAllProjects');
    }
  }
}
</script>

<style scoped>

</style>