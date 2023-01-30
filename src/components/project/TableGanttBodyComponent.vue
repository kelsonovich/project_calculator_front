<template>
  <Container @drop="onDrop" tag="tbody" lock-axis="y">
      <Draggable
          tag="tr"
          v-for="(step, index) in prepareSteps"
          :key="index"
      >
        <TableCellComponent
            v-for="cell in step"
            :key="cell.id"
            :cell="cell"
            @updateTask="updateStep"
        />
      </Draggable>
  </Container>
</template>

<script>
import TableCellComponent from "@/components/ui/table/cell/TableCellComponent";
import {Container, Draggable} from "vue-dndrop";
import {applyDrag} from "@/assets/js/utils";

export default {
  name: "TableGanttBodyComponent",
  components: {TableCellComponent, Container, Draggable},
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
      },
      rows: this.steps,
    }
  },
  watch: {
    steps: function () {
      this.rows = this.steps;
    }
  },
  computed: {
    prepareSteps() {
      return this.prepare(this.rows);
    },
  },
  methods: {
    async updateStep(value) {
      this.$store.dispatch('changeProject', {type: 'steps', data: value});
    },
    prepare(steps) {
      console.log('prepare');
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
    },
    onDrop(dropResult) {
      let steps = this.rows;
      steps = applyDrag(steps, dropResult);

      steps.forEach((step, index) => {
        if (Boolean(step.isClient) === this.isClient) {
          step.sort = 100 * (index + 1);
        }
      });

      this.rows = steps;

      this.$store.dispatch('changeProject', {type: 'steps', data: this.rows});
    },
  }
}
</script>

<style scoped>
.dndrop-container.vertical > .dndrop-draggable-wrapper {
  display: revert!important;
}
</style>