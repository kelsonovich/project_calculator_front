<template>
  <div class="card">
    <div class="card-body">
      <router-link
          class="stretched-link"
          :to="route"
      >
        <span>{{ project.title }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectListItemComponent",
  props: {
    project: Object
  },
  computed: {
    route() {
      return '/project/' + this.project.id;
    }
  }
}
</script>

<style scoped>

</style>