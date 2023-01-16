<template>
  <table class="table table-hover table-responsive-xl">
    <TableHead :config="config" :thBgClass="'table-primary'"/>

    <TaskTableBody :config="config" :body="tasks" :type="'task'" @changeProject="change"/>
    <TaskTableBody :config="config" :body="qa" :isAdditional="true" :title="'Тестирование'"/>
    <TaskTableBody :config="config" :body="steps" :isAdditional="true" :title="'Итого этапы'"/>
    <TaskTableBody :config="config" :body="total" :isAdditional="true" :title="'Итого'"/>
  </table>
</template>

<script>
import TableHead from "@/components/ui/table/TableHead";
import TaskTableBody from "@/components/project/TaskTableBody";

export default {
  name: "TableComponent",
  components: {
    TaskTableBody,
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
    change(value) {
      this.$store.dispatch('changeProject', {type: 'tasks', data: value});
    }
  }
}
</script>

<style scoped>

</style>