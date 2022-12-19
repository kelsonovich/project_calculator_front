<template>
  <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    Новый проект
  </button>
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
       aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Новый проект</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <ProjectInputComponent :input="input" @update="setTitle"/>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-success btn-sm" @click="createProject">Создать</button>
          <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Закрыть</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectInputComponent from "@/components/project/ProjectInputComponent";

export default {
  name: "CreateProjectComponent",
  components: {ProjectInputComponent},
  data() {
    return {
      input: {
        key: 'title',
        value: '',
        type: 'text',
        class: ['mb-3l']
      },
      project: null
    }
  },
  computed: {
    newProjectId() {
      return this.$store.getters.GET_NEW_PROJECT_ID;
    }
  },
  methods: {
    setTitle(value) {
      this.project = value;
    },
    async createProject() {
      if (this.project.title.length > 5) {
        await this.$store.dispatch('createProject', {data: this.project});
        document.querySelector('button[data-bs-dismiss="modal"]').click();
        this.$router.push({path: '/project/' + this.$store.getters.GET_NEW_PROJECT_ID});
      }
    },
  }
}
</script>

<style scoped>

</style>