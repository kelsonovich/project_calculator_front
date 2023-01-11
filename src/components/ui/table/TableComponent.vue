<template>
  <table class="table table-hover table-responsive-xl">
    <TableHead :config="config" :thBgClass="'table-primary'"/>

    <ProjectTaskTableBody :config="config" :body="tasks" :type="'task'" @updateProject="update"/>
    <ProjectTaskTableBody :config="config" :body="qa"    :isAdditional="true" :title="'Тестирование'"/>
    <ProjectTaskTableBody :config="config" :body="steps" :isAdditional="true" :title="'Итого этапы'"/>
    <ProjectTaskTableBody :config="config" :body="total" :isAdditional="true" :title="'Итого'"/>
  </table>
</template>

<script>
import TableHead from "@/components/ui/table/TableHead";
import ProjectTaskTableBody from "@/components/project/ProjectTaskTableBody";

export default {
  name: "TableComponent",
  components: {
    ProjectTaskTableBody,
    TableHead
  },
  props: {
    config: [Object, Array],
    tasks: [Object, Array],
    qa: [Object, Array],
    total: [Object, Array],
    steps: [Object, Array],
  },
  methods: {
    update(value) {
      console.log('TableComponent');
      console.log(value);
      // this.$emit('updateProject');
    }
  }
}
</script>

<style scoped>

</style>