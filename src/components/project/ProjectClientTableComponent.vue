<template>
  <div style="overflow-x: auto;" class="mt-5">
    <TableGanttComponent
        v-if="project"
        :config="config"
        :steps="project.steps"
        :isClient="isClient"
        :projectLength="countWeeks"
        :agreementWeeks="project.agreementWeeks"
    />
  </div>
</template>

<script>
import TableGanttComponent from "@/components/ui/table/TableGanttComponent";

export default {
  name: "ProjectClientTableComponent",
  components: {TableGanttComponent},
  props: {
    project: [Object, Array],
    isClient: Boolean
  },
  data() {
    return {
      config: [
        {
          title: 'Наименование задачи',
          key: 'title',
          isEditable: false,
          type: 'text',
          align: {
            vertical: true,
            horizontal: true,
          },
        },
        {
          title: 'Комментарий',
          key: 'description',
          isEditable: false,
          type: 'text',
          align: {
            vertical: true,
            horizontal: true,
          },
        },
      ],
      countWeeks: 0,
    }
  },
  mounted() {
    this.setConfig();
    this.setCountWeeks();
    this.setWeeksInConfig();
  },
  methods: {
    setConfig() {
      if (! this.isClient) {
        console.log(1);
      }
    },
    setCountWeeks() {
      if (this.project) {
        for (const key in this.project.steps) {
          this.countWeeks += this.project.steps[`${key}`].weeks;
        }

        this.countWeeks += this.project.agreementWeeks;
      }
    },
    setWeeksInConfig() {
      for (let i = 0; i < this.countWeeks; i++) {
        let currentDate = new Date(this.project.start);
        currentDate.setDate(currentDate.getDate() + 7 * i);

        const date = currentDate.toLocaleDateString('ru-RU', {month:"numeric", day:"numeric"});

        this.config.push({
          title: date,
          key: date,
          isEditable: false,
          type: 'text',
          align: {
            vertical: true,
            horizontal: true,
          },
          classes: ['w-10']
        });
      }

    },
  }
}
</script>

<style scoped>

</style>