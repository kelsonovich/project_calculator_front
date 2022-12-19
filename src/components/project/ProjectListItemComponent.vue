<template>
  <div class="card card-body mb-3" >
    <div class="row">
      <div class="col-11 pointer-event" @click="redirect(project)">
        <router-link
            :to="route"
        >
          <span>{{ project.title }}</span>
        </router-link>
      </div>
      <div class="col-1 d-grid gap-2 mx-auto">
        <DeleteProjectComponent :project="project" />
      </div>
    </div>
  </div>
</template>

<script>
import DeleteProjectComponent from "@/components/DeleteProjectComponent";

export default {
  name: "ProjectListItemComponent",
  components: {DeleteProjectComponent},
  props: {
    project: Object
  },
  computed: {
    route() {
      return '/project/' + this.project.id;
    }
  },
  methods: {
    redirect() {
      this.$router.push({path: '/project/' + this.project.id});
    }
  }
}
</script>

<style scoped>

</style>