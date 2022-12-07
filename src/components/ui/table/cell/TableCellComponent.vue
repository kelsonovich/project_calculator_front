<template>
  <td
      :class="classes(cell)"
  >
    <component
        v-if="component(cell)"
        :is="component(cell)"
        :cell="cell"
    />
  </td>
</template>

<script>
import CellText from "@/components/ui/table/cell/CellText";
import EditableCell from "@/components/ui/table/cell/EditableCell";

export default {
  name: "TableCellComponent",
  props: {
    cell: Object
  },
  methods: {
    classes(cell) {
      let classes = [];

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
      if (!cell.isEditable) {
        return CellText;
      }

      return EditableCell;
    }
  }
}
</script>

<style scoped>

</style>