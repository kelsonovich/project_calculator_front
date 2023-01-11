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
            @updateTask="updateStep"
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
      background: {
        agreement: 'bg-agreement',
        work: 'bg-work'
      }
    }
  },
  methods: {
    async updateStep(value) {
      this.$store.dispatch('changeSteps', {step: value});
    },
    prepare(steps) {
      let body = [];
      steps.forEach(step => {
        if (Number(step.hours_avg) === 0 || (this.isClient && step.code === 'buffer')) {
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
            let weekNumber = index - 9;

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
      background = (weekNumber > step.start && weekNumber <= step.end) ? this.background.work : '';

      if (weekNumber > (step.end - step.agreement) && weekNumber <= step.end) {
        background = this.background.agreement;
      }

      return background
    }
  }
}
</script>

<style scoped>


</style>