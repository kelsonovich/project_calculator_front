<template>
  <tbody>
    <template
        v-for="(step, key) in steps"
        :key="key"
    >
      <tr v-if="isNeededRender(step, key)">
        <TableCellComponent :cell="{value: step.title}" />
        <TableCellComponent :cell="{value: step.description}" />
        <TableCellComponent
            v-for="(weekNumber) in projectLength"
            :key="weekNumber"
            :cell="getCellValue(step, key, weekNumber)"
        />
      </tr>
    </template>
  </tbody>
</template>

<script>

import TableCellComponent from "@/components/ui/table/cell/TableCellComponent";
export default {
  name: "ProjectStepTableBody",
  components: {TableCellComponent},
  props: {
    steps: [Array, Object],
    isClient: Boolean,
    projectLength: [Number, String],
    agreementWeeks: [Number, String],
  },
  data() {
    return {
      rowIndex: 0,
      lastStart: 0,
    }
  },
  methods: {
    isNeededRender(step, key){
      if (this.isClient) {
        return Number(step.hours) > 0 && key !== 'buffer';
      }

      return Number(step.hours) > 0;
    },
    getCellValue(step, key, weekNumber) {
      let background = '';

      background = (weekNumber > step.start && weekNumber <= step.end) ? 'bg-primary' : '';
      if (key === 'qa') {
        if (weekNumber > step.end) {
          background = ((weekNumber >= (step.end + this.agreementWeeks - 1)) && (weekNumber <= (step.end + this.agreementWeeks))) ? 'bg-danger' : '';
        }
      }

      return {
        value: '',
        class: background
      }
    }
  }
}
</script>

<style scoped>

</style>