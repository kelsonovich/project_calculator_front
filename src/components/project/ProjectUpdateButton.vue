<template>
  <div>
    <button class="btn btn-outline-success" @click="updateProject">
      Сохранить
    </button>
  </div>
</template>

<script>
export default {
  name: "ProjectUpdateButton",
  methods: {
    updateProject() {
      console.log('clear project');
    }
  }
}
</script>

<style scoped>

</style>