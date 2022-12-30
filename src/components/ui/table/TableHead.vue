<template>
  <thead :class="thBgClass">
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
    config: [Array, Object],
    thBgClass: String,
  },
  methods: {
    classes(cell) {
      let classes = [];

      if (cell.classes) {
        classes = classes.concat(cell.classes);
      }

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
.title {
  min-width: 350px;
  position: sticky;
  left: 0;
}

.title_task, .description {
  min-width: 500px;
}

.title_price {
  min-width: 100px;
}

.date {
  writing-mode: vertical-rl;
  rotate: 180deg;
  margin: 0;
}
</style>