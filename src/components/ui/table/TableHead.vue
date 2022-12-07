<template>
  <thead>
  <tr>
    <th
        v-for="cell in config"
        :key="cell.id"
        :class="classes(cell)"
    >
      {{ cell.title }}
    </th>
  </tr>
  </thead>
</template>

<script>
export default {
  name: "TableHead",
  props: {
    config: [Array, Object]
  },
  methods: {
    classes(cell) {
      let classes = [];

      if (cell.align.vertical) {
        classes.push('align-middle')
      }

      if (cell.align.horizontal) {
        classes.push('text-center')
      }

      return classes;
    }
  }
}
</script>

<style scoped>
  thead {
    position: sticky;
    top: 0;
  }

  th:first-child, td:first-child {
    position: sticky;
    left: 0px;
  }
</style>