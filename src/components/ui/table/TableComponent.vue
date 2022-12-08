<template>
  <table class="table table-hover">
    <TableHead :config="config"/>

    <ProjectTaskTableBody :body="prepare(tasks)"/>
    <ProjectTaskTableBody :body="prepare([qa])"/>
    <ProjectTaskTableBody :body="prepare([total])"/>
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
  computed: {

  },
  methods: {
    prepare(tasks) {
      let body = [];
      tasks.forEach(task => {
        let row = [];
        this.config.forEach(tableHeadCell => {
          let tableHeadCellCopy = JSON.parse(JSON.stringify(tableHeadCell));

          let cell = {};
          let value = '-';

          if (Object.prototype.hasOwnProperty.call(task, tableHeadCellCopy.key)) {
            value = task[tableHeadCellCopy.key];
            cell = tableHeadCellCopy;
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