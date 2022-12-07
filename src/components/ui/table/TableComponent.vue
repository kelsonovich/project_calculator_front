<template>
  <table class="table table-hover">
    <TableHead :config="config"/>

<!--    <ProjectTaskTableBody :body="projectTaskTableBody"/>-->
<!--    <ProjectTaskTableBody :body="projectQaTableBody"/>-->
<!--    <ProjectTaskTableBody :body="projectTotalTableBody"/>-->
  </table>
</template>

<script>
import TableHead from "@/components/ui/table/TableHead";
// import ProjectTaskTableBody from "@/components/project/ProjectTaskTableBody";

export default {
  name: "TableComponent",
  components: {
    // ProjectTaskTableBody,
    TableHead
  },
  props: {
    config: [Object, Array],
    tasks: [Object, Array],
    qa: [Object, Array],
    total: [Object, Array],
  },
  computed: {
    projectTaskTableBody() {
      return this.prepare(this.tasks, this.config);
    },
    projectQaTableBody() {
      return this.prepare([this.qa], this.config);
    },
    projectTotalTableBody() {
      return this.prepare([this.total], this.config);
    },
  },
  methods: {
    prepare(tasks, config) {
      let body = [];
      tasks.map(element => {
        let row = [];
        config.forEach(tableHeadCell => {
          let cell = {};
          let value = '-';
          if (Object.prototype.hasOwnProperty.call(element, tableHeadCell.key)) {
            value = element[tableHeadCell.key];
            cell = tableHeadCell;
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