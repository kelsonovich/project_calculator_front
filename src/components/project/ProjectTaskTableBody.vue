<template>
  <tbody>
  <tr
      v-for="row in getBody"
      :key="row.id"
  >
    <TableCellComponent
        v-for="cell in row"
        :key="cell.id"
        :cell="cell"
        :isAdditional="isAdditional"
        :title="title"
        @update="updateTask"
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
    getBody() {
      return this.rows;
    },
  },
  methods: {
    updateTask(value) {
      if (this.type === 'task') {
        this.$store.dispatch('updateTask', {taskId: value.id, data: value});
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
    }
  }
}
</script>

<style scoped>

</style>