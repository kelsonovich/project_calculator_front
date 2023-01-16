<template>
  <tbody v-if="prepareRows">
    <tr
        v-for="(row, index) in prepareRows"
        :key="row[0].id"
        class=""
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
        <td class="align-middle text-center">
          <button class="btn btn-outline-danger" @click="deleteRow(index)">
            <i class="bi bi-trash3"></i>
          </button>
        </td>
        <td v-if="isLast(index)" class="align-middle text-center">
          <button class="btn btn-outline-success" @click="createRow()">
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
  name: "TaskTableBody",
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
      rows: this.body,
    }
  },
  watch: {
    body: function () {
      this.rows = this.body;
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
        let tasks = this.rows;

        tasks.forEach(task => {
          if (Number(task.innerIndex) === Number(value.innerIndex) || Number(task.id) === Number(value.id)) {
            for (let key in value) {
              if (utils.hasProperty(task, key)) {
                task[key] = value[key];
              }
            }
          }
        });

        this.$emit('changeProject', tasks);
      }
    },
    isLast(index) {
      return (this.rows.length - 1) === index;
    },
    getColspanForDelete(index) {
      return (this.isLast(index)) ? 1 : 2;
    },
    deleteRow(index) {
      this.rows.splice(index, 1);
      this.$emit('changeProject', this.rows);
    },
    createRow() {
      let newTask = JSON.parse(JSON.stringify(this.rows[this.rows.length - 1]));

      if (newTask.id !== undefined) {
        delete newTask.id;
      }

      for (let key in newTask) {
        newTask[key] = '';
      }

      this.rows.push(newTask);

      this.$emit('changeProject', this.rows);
    },
    prepare(tasks) {
      this.rows.forEach((row, index) => {
        row.innerIndex = index;
      });

      if (tasks.length === 0) {
        for (let i = 0; i < this.config.length; i++) {
          tasks.push({});
        }

        tasks = [tasks];
      }

      let body = [];
      tasks.forEach((task, index) => {
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
          cell.innerIndex = index;
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