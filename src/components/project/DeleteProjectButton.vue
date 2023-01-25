<template>
  <button class="btn btn-outline-danger btn-block" @click="deleteProject">
    <i class="bi bi-trash3"></i>
  </button>
</template>

<script>
export default {
  name: "DeleteProjectButton",
  props: {
    project: Object
  },
  methods: {
    async deleteProject() {
      let projectId = (this.project.parent_id) ? this.project.parent_id : this.project.id;

      await this.$store.dispatch('deleteProject', {projectId: projectId, revisionId: this.project.revision_id});
      await this.$store.dispatch('getAllProjects');
    }
  }
}
</script>

<style scoped>

</style>