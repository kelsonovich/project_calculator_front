<template>
  <div>
    <button class="btn btn-outline-danger" @click="clearProject">
      Отменить изменения
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