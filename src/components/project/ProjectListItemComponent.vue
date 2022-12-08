<template>
  <div class="card card-body" >
    <router-link
        class="stretched-link"
        :to="route"
    >
      <span>{{ project.title }}</span>
    </router-link>
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