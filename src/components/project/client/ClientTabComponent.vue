<template>
  <div v-if="project">
    <div class="container-fluid row mb-3">

      <div class="col-4">
        <CardDateComponent :project="project" :isReadonly="true" :isClient="true" @changeProject="calculate"/>
      </div>
      <div class="col-8">
        <DescriptionComponent :project="project" @changeDescription="calculate"/>
      </div>
    </div>

    <ClientTableComponent :project="project" :isClient="true"/>
  </div>
</template>

<script>
import DescriptionComponent from "@/components/project/client/DescriptionComponent";
import CardDateComponent from "@/components/project/CardDateComponent";
import ClientTableComponent from "@/components/project/client/ClientTableComponent";

export default {
  name: "ClientTabComponent",
  components: {ClientTableComponent, CardDateComponent, DescriptionComponent},
  props: {
    project: [Object]
  },
  methods: {
    calculate(value) {
      this.$store.dispatch('changeProject', {type: 'project', data: value});
    }
  }
}
</script>

<style scoped>

</style>