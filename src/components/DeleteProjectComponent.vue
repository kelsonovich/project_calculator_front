<template>
  <button class="btn btn-outline-danger btn-block" @click="deleteProject">
    <i class="bi bi-trash3"></i>
  </button>
</template>

<script>
export default {
  name: "DeleteProjectComponent",
  props: {
    project: Object
  },
  methods: {
    deleteProject() {
      this.$store.dispatch('deleteProject', {projectId: this.project.id})
    }
  }
}
</script>

<style scoped>

</style>