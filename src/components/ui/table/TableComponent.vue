<template>
  <table class="table table-hover table-responsive-xl">
    <TableHead :config="config" :thBgClass="'table-primary'"/>

    <ProjectTaskTableBody :body="prepare(tasks)"/>
    <ProjectTaskTableBody :body="prepare([qa])" :isAdditional="true" :title="'Тестирование'"/>
    <ProjectTaskTableBody :body="prepare([total])" :isAdditional="true" :title="'Итого'"/>
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
  },
  computed: {},
  methods: {
    prepare(tasks) {
      let body = [];
      tasks.forEach(task => {
        let row = [];
        this.config.forEach(tableHeadCell => {
          let tableHeadCellCopy = JSON.parse(JSON.stringify(tableHeadCell));

          let cell = tableHeadCellCopy;
          let value = '-';

          if (Object.prototype.hasOwnProperty.call(task, tableHeadCellCopy.key)) {
            value = task[tableHeadCellCopy.key];
          }

          cell.value = value;
          row.push(cell);
        });

        body.push(row);
      });

      return body;
    }
  }
}
</script>

<style scoped>

</style>