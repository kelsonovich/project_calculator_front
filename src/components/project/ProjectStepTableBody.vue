<template>
  <tbody>
    <template
        v-for="(step, key) in prepare(steps)"
        :key="key"
    >
      <tr>
        <TableCellComponent
            v-for="cell in step"
            :key="cell.id"
            :cell="cell"
            @update="updateStep"
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
    config: [Array, Object],
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
    updateStep(value) {
      this.$store.dispatch('updateStep', {stepId: value.id, data: value})
    },
    prepare(steps) {
      let body = [];
      steps.forEach(step => {
        if (Number(step.hours_min) === 0 || (this.isClient && step.code === 'buffer')) {
          return;
        }

        let row = [];
        this.config.forEach((tableHeadCell, index) => {
          let tableHeadCellCopy = JSON.parse(JSON.stringify(tableHeadCell));

          let cell = tableHeadCellCopy;
          let value = '';
          if (Object.prototype.hasOwnProperty.call(step, tableHeadCellCopy.key)) {
            value = step[tableHeadCellCopy.key];
          } else if (cell.classes && cell.classes.includes('date')) {
            let weekNumber = (this.isClient) ? (index - 1) : (index - 10);

            cell.classes.push(this.getCellType(step, weekNumber));
          }

          cell.id = step.id;
          cell.value = value;
          row.push(cell);
        });
        body.push(row);
      });

      return body;
    },
    getCellType(step, weekNumber) {
      let background = '';

      background = (weekNumber > step.start && weekNumber <= step.end) ? 'bg-work' : '';
      if (step.code === 'qa') {
        if (weekNumber > step.end) {
          background = ((weekNumber >= (step.end + this.agreementWeeks - 1)) && (weekNumber <= (step.end + this.agreementWeeks))) ? 'bg-agreement' : '';
        }
      }

      return background
    }
  }
}
</script>

<style scoped>


</style>