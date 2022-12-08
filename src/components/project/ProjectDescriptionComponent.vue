<template>
  <div class="card card-body mb-3" v-if="isShowNeed">
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "ProjectDescriptionComponent",
  props: {
    description: String
  },
  computed: {
    isShowNeed(){
      return this.description && this.description.length > 0;
    }
  }
}
</script>

<style scoped>

</style>