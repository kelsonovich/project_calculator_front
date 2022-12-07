<template>
  <div>
    {{ cell.value }}
  </div>
</template>

<script>
export default {
  name: "CellText",
  props: {
    cell: Object
  }
}
</script>

<style scoped>

</style>