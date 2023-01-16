<template>
  <div>
    <div class="container-fluid row">
      <div class="col-sm-6 mb-3">
        <CardDateComponent :isClient="false" @changeProject="calculate"/>
      </div>
      <div class="col-sm-6">
        <div class="row mb-3">
          <PriceCardComponent :price="project.price"/>
        </div>
        <div class="row mb-3">
          <div class="card card-body">
            <InputComponent :input="getProjectWeeks" @update="calculate"/>
          </div>
        </div>
      </div>
    </div>

    <ClientTableComponent :project="project" :isClient="false"/>

    <OptionTableComponent :title="'Дополнения'" :project="project" :isClient="false"/>
  </div>
</template>

<script>
import CardDateComponent from "@/components/project/CardDateComponent";
import PriceCardComponent from "@/components/project/PriceCardComponent";
import InputComponent from "@/components/ui/InputComponent";
import ClientTableComponent from "@/components/project/client/ClientTableComponent";
import OptionTableComponent from "@/components/project/company/OptionTableComponent";

export default {
  name: "CompanyTabComponent",
  components: {
    OptionTableComponent,
    ClientTableComponent,
    InputComponent,
    PriceCardComponent,
    CardDateComponent},
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
        type: 'number'
      }
    }
  },
  methods: {
    calculate(value) {
      this.$store.dispatch('changeProject', {type: 'project', data: value});
    },
  }
}
</script>

<style scoped>

</style>