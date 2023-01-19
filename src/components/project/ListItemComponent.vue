<template>
  <div class="card card-body mb-3">
    <div class="row">
      <div class="col-11" @click="redirect(project)" style="cursor:pointer;">
        <span class="fs-4 align-middle">
          {{ project.title }}
        </span>
      </div>
      <div class="col-1 d-grid gap-2 mx-auto">
        <DeleteProjectButton :project="project" @click="sendDelete"/>
      </div>
    </div>
  </div>
</template>

<script>
import DeleteProjectButton from "@/components/project/DeleteProjectButton";

export default {
  name: "ListItemComponent",
  components: {DeleteProjectButton},
  props: {
    project: Object
  },
  methods: {
    redirect() {
      this.$router.push({name: 'projectDetail', params: {projectId: this.project.id, revisionId: this.project.revision_id}});
    },
    sendDelete() {
      this.$emit('delete');
    }
  }
}
</script>

<style scoped>

</style>