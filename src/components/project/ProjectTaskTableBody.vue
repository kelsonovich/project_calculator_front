<template>
  <tbody v-if="rows">
    <tr
        v-for="row in prepareRows"
        :key="row.id"
    >
      <TableCellComponent
          v-for="cell in row"
          :key="cell.id"
          :cell="cell"
          :isAdditional="isAdditional"
          :title="title"
          @updateTask="update"
      />
      <template v-if="isTask">
        <td>
          <button class="btn btn-outline-danger" @click="deleteTask(row)">
            <i class="bi bi-trash3"></i>
          </button>
        </td>
        <td v-if="isLast(row)">
          <button class="btn btn-outline-success" @click="createTask()">
            <i class="bi bi-plus-lg"></i>
          </button>
        </td>
      </template>
    </tr>
  </tbody>
</template>

<script>
import TableCellComponent from "@/components/ui/table/cell/TableCellComponent";

export default {
  name: "ProjectTaskTableBody",
  components: {TableCellComponent},
  props: {
    body: [Array, Object],
    isAdditional: Boolean,
    title: String,
    type: String,
    config: [Object, Array],
  },
  data() {
    return {
      rows: this.body
    }
  },
  computed: {
    isTask() {
      return this.type === 'task';
    },
    prepareRows() {
      return this.prepare(this.rows);
    },
  },
  methods: {
    update(value) {
      if (this.type === 'task') {
        console.log('ProjectTaskTableBody');

        this.$store.dispatch('updateTask', {taskId: value.id, data: value});
        this.$emit('updateProject');
      }
    },
    isLast(row) {
      return this.rows[this.rows.length - 1] === row;
    },
    deleteTask(row) {
      let rows = this.rows;
      console.log(rows.length);

      rows.filter(function(task) {
        return task !== row;
      });

      console.log(rows.length);
    },
    createTask() {
      let newTask = this.rows[this.rows.length - 1];

      newTask.map(field => {
        field.value = field.type;

        if (field.isEditable) {
          field.value = (field.type === 'text') ? '' : 0;
        } else {
          field.value = '-';
        }
      });

      this.rows.push(newTask);
    },
    prepare(tasks) {
      if (tasks.length === 0) {
        for (let i = 0; i < this.config.length; i++) {
          tasks.push({});
        }

        tasks = [tasks];
      }

      let body = [];
      tasks.forEach(task => {
        let row = [];
        this.config.forEach(tableHeadCell => {
          let tableHeadCellCopy = JSON.parse(JSON.stringify(tableHeadCell));

          let cell = tableHeadCellCopy;
          let value = '-';

          if (tableHeadCellCopy.isEditable) {
            value = (tableHeadCellCopy.type === 'text') ? '' : 0;
          }

          if (Object.prototype.hasOwnProperty.call(task, tableHeadCellCopy.key)) {
            value = task[tableHeadCellCopy.key];
          }

          cell.id = task.id;
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