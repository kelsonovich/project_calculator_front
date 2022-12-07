<template>
  <table class="table table-hover table-bordered">
    <TableHead :config="config" :thBgClass="'table-primary'"/>

    <ProjectStepTableBody :steps="steps" :isClient="isClient" :projectLength="projectLength" :agreementWeeks="agreementWeeks" />
  </table>
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
}
</script>

<style scoped>

</style>