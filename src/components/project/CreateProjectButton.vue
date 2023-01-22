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
          <InputComponent :input="input" @update="setTitle"/>
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
import InputComponent from "@/components/ui/InputComponent";

export default {
  name: "CreateProjectButton",
  components: {InputComponent},
  data() {
    return {
      input: {
        key: 'title',
        value: '',
        type: 'text',
        class: ['mb-3l']
      },
      title: null
    }
  },
  computed: {
    project() {
      return this.$store.getters.GET_RECALCULATED_PROJECT;
    }
  },
  methods: {
    setTitle(value) {
      this.title = value.title;
    },
    async createProject() {
      if (this.title.length > 5) {
        await this.$store.dispatch('createProject', {data: {title: this.title}});
        document.querySelector('button[data-bs-dismiss="modal"]').click();
        await this.$store.dispatch('getAllProjects');

        this.$router.push({name: 'projectList'});
      }
    },
  }
}
</script>

<style scoped>

</style>