<template>
  <div>
    <div class="container-fluid row">
      <div class="col-sm-6 mb-3">
        <ProjectDateComponent :isClient="false" @changeProject="calculate"/>
      </div>
      <div class="col-sm-6">
        <div class="row mb-3">
          <ProjectPriceCardComponent :price="project.price"/>
        </div>
        <div class="row mb-3">
          <div class="card card-body">
            <ProjectInputComponent :input="getProjectWeeks"/>
          </div>
        </div>
      </div>
    </div>

    <ProjectClientTableComponent :project="project" :isClient="false"/>

    <OptionTableComponent :title="'Дополнения'" :project="project" :isClient="false"/>
  </div>
</template>

<script>
import ProjectDateComponent from "@/components/project/ProjectDateComponent";
import ProjectPriceCardComponent from "@/components/project/ProjectPriceCardComponent";
import ProjectInputComponent from "@/components/project/ProjectInputComponent";
import ProjectClientTableComponent from "@/components/project/ProjectClientTableComponent";
import OptionTableComponent from "@/components/project/OptionTableComponent";

export default {
  name: "ProjectCompanyTabComponent",
  components: {
    OptionTableComponent,
    ProjectClientTableComponent, ProjectInputComponent, ProjectPriceCardComponent, ProjectDateComponent},
  props: {
    project: Object
  },
  computed: {
    getProjectWeeks() {
      return {
        label: 'Кол-во часов в неделю на 1 сотрудника',
        key: 'hours_per_week',
        value: this.project.hours_per_week,
        readonly: false,
        type: 'string'
      }
    }
  },
  methods: {
    calculate(value) {
      console.log('ProjectCompanyTabComponent');
      this.$emit('changeProject', value);
    },
  }
}
</script>

<style scoped>

</style>