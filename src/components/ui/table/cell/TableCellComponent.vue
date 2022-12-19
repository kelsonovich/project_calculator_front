<template>
  <td
      :class="classes(cell)"
  >
    <component
        v-if="component(cell)"
        :is="component(cell)"
        :cell="getCell(cell)"
        @updateCell="update"
    />
  </td>
</template>

<script>
import CellText from "@/components/ui/table/cell/CellText";
import EditableCell from "@/components/ui/table/cell/EditableCell";

export default {
  name: "TableCellComponent",
  props: {
    cell: Object,
    isAdditional: Boolean,
    title: String,
  },
  methods: {
    update(value) {
      value.id = this.cell.id;
      console.log('TableCellComponent');

      this.$emit('updateTask', value);
    },
    classes(cell) {
      let classes = [];

      classes.push(cell.classes);

      if (cell.align === undefined) {
        return classes;
      }

      if (cell.align.vertical) {
        classes.push('align-middle')
      }

      if (cell.align.horizontal) {
        classes.push('text-center')
      }

      return classes;
    },
    component(cell) {
      if (! cell.isEditable || this.isAdditional) {
        return CellText;
      }

      return EditableCell;
    },
    getCell(cell) {
      if (! this.isAdditional) {
        return cell;
      }

      if (cell.key === 'title') {
        cell.value = this.title;
      } else if (cell.key === 'description') {
        cell.value = '';
      }

      return cell;
    }
  }
}
</script>

<style scoped>
.title {
  min-width: 350px;
  position: sticky;
  left: 0;
  background: white;
}
td{
  max-height: 40px;
}
</style>