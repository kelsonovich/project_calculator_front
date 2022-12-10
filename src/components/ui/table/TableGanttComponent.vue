<template>
  <table class="table table-hover table-bordered table-sm">
    <TableHead :config="config" :thBgClass="'table-primary'"/>

    <ProjectStepTableBody
        :steps="steps"
        :config="config"
        :isClient="isClient"
        :projectLength="projectLength"
        :agreementWeeks="agreementWeeks"
    />
  </table>
  <div class="container-fluid row">
    <div class="row">
      <div class="col-1 bg-primary"></div>
      <div class="col-11"> — время работ подрядчика</div>
    </div>
    <div class="row">
      <div class="col-1 bg-danger"></div>
      <div class="col-11"> — время на согласование с заказчиком</div>
    </div>
  </div>

</template>

<script>
import TableHead from "@/components/ui/table/TableHead";
import ProjectStepTableBody from "@/components/project/ProjectStepTableBody";

export default {
  name: "TableGanttComponent",
  components: {
    ProjectStepTableBody,
    TableHead
  },
  props: {
    config: [Object, Array],
    steps: [Object, Array],
    isClient: Boolean,
    projectLength: [Number, String],
    agreementWeeks: [Number, String],
  },
  methods: {}
}
</script>

<style scoped>

</style>