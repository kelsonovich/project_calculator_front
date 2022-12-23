<template>
  <table class="table table-hover table-bordered table-sm">
<!--    <TableHead :config="config" :thBgClass="'bg-title text-white'"/>-->
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
      <div class="col-1 bg-work" style="width: 50px"></div>
      <div class="col-11"> — время работ подрядчика</div>
    </div>
    <div class="row">
      <div class="col-1 bg-agreement" style="width: 50px"></div>
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