<template>
  <tbody v-if="prepareRows">
    <tr
        v-for="(row) in prepareRows"
        :key="row[0].id"
    >
      <TableCellComponent
          v-for="(cell) in row"
          :key="row[0].id + cell.title"
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
import utils from "@/assets/js/utils";

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
      rows: this.prepare(this.body)
    }
  },
  watch: {
    body: function () {
      this.rows = this.prepare(this.body);
    }
  },
  computed: {
    isTask() {
      return this.type === 'task';
    },
    prepareRows() {
      return this.rows;
    },
  },
  methods: {
    update(value) {
      if (this.type === 'task') {
        let tasks = this.body;

        tasks.forEach(task => {
          if (Number(task.id) === Number(value.id)) {
            for (let key in value) {
              if (utils.hasProperty(task, key)) {
                task[key] = value[key];
              }
            }
          }
        });

        this.$store.dispatch('changeTasks', {tasks: tasks});
      }
    },
    isLast(row) {
      return this.rows[this.rows.length - 1] === row;
    },
    deleteTask(row) {
      if (this.rows.length > 1) {
        this.rows = this.rows.filter(function(task) {
          console.log(task);

          return task !== row;
        });
      }
    },
    createTask() {
      let newTask = JSON.parse(JSON.stringify(this.rows[this.rows.length - 1]));

      newTask.map(field => {
        field.value = field.type;
        delete field.id;

        if (field.isEditable) {
          field.value = (field.type === 'text') ? '' : 0;
        } else {
          field.value = '-';
        }
      });

      this.rows.push(newTask);
    },
    prepare(tasks) {
      console.log(tasks);

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