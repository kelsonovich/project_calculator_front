<template>
  <div>
    <button class="btn btn-outline-danger" @click="clearProject">
      Отменить сохранения
    </button>
  </div>
</template>

<script>
export default {
  name: "ClearChangeButton",
  methods: {
    clearProject() {
      this.$store.dispatch('clearProject');
    }
  }
}
</script>

<style scoped>

</style>