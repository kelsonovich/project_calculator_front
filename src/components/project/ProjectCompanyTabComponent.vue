<template>
  <div>
    <div class="container-fluid row">
      <div class="col-sm-6 mb-3">
        <ProjectDateComponent :isClient="false" @updateProject="updateProject"/>
      </div>
      <div class="col-sm-6">
        <div class="row mb-3">
          <ProjectPriceCardComponent :price="project.price" @updateProject="updateProject"/>
        </div>
        <div class="row mb-3">
          <div class="card card-body">
            <ProjectInputComponent :input="getProjectWeeks"/>
          </div>
        </div>
      </div>
    </div>

    <ProjectClientTableComponent :project="project" :isClient="false"/>
  </div>
</template>

<script>
import ProjectDateComponent from "@/components/project/ProjectDateComponent";
import ProjectPriceCardComponent from "@/components/project/ProjectPriceCardComponent";
import ProjectInputComponent from "@/components/project/ProjectInputComponent";
import ProjectClientTableComponent from "@/components/project/ProjectClientTableComponent";

export default {
  name: "ProjectCompanyTabComponent",
  components: {ProjectClientTableComponent, ProjectInputComponent, ProjectPriceCardComponent, ProjectDateComponent},
  props: {
    project: Object
  },
  computed: {
    getProjectWeeks() {
      return {
        label: 'Кол-во часов в неделю на 1 сотрудника',
        key: 'hours_per_week',
        value: this.project.hours_per_week,
        readonly: true,
        type: 'string'
      }
    }
  },
  methods: {
    updateProject(value) {
      this.$emit('updateProject', value);
    },
  }
}
</script>

<style scoped>

</style>