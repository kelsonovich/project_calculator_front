<template>
  <div>
    <button class="btn btn-outline-success" @click="updateProject">
      Сохранить
    </button>
  </div>
</template>

<script>
export default {
  name: "UpdateProjectButton",
  methods: {
    updateProject() {
      this.$store.dispatch('updateProject');
    }
  }
}
</script>

<style scoped>

</style>