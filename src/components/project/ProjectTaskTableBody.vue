<template>
  <tbody>
    <tr
        v-for="row in body"
        :key="row.id"
    >
      <TableCellComponent
          v-for="cell in row"
          :key="cell.id"
          :cell="cell"
          :isAdditional="isAdditional"
          :title="title"
      />
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
  },
}
</script>

<style scoped>

</style>