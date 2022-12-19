<template>
  <div style="overflow-x: auto;" class="mb-3">
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
            horizontal: false,
          },
          classes: ['title']
        },
        {
          title: 'Комментарий',
          key: 'description',
          isEditable: false,
          type: 'text',
          align: {
            vertical: true,
            horizontal: false,
          },
        },
      ],
      countWeeks: 0,
    }
  },
  watch: {
    project: 'reload'
  },
  mounted() {
    this.reload();
  },
  methods: {
    reload() {
      console.log(1);
      this.setConfig();
      this.setCountWeeks();
      this.setWeeksInConfig();
    },
    setConfig() {
      let additionalColumns = [
        {
          title: 'Трудозатраты',
          key: 'hours_min',
          isEditable: false,
          type: 'text',
          align: {
            vertical: true,
            horizontal: true,
          },
        },
        {
          title: 'Кол-во сотруд. на этап',
          key: 'employee_quantity',
          isEditable: true,
          type: 'number',
          align: {
            vertical: true,
            horizontal: true,
          },
        },
        {
          title: 'Согласование',
          key: 'agreement',
          isEditable: true,
          type: 'text',
          align: {
            vertical: true,
            horizontal: true,
          },
        },
        {
          title: 'Запараллеливание',
          key: 'parallels',
          isEditable: true,
          type: 'text',
          align: {
            vertical: true,
            horizontal: true,
          },
        },
        {
          title: 'Длит.этапа (неделей)',
          key: 'weeks',
          isEditable: false,
          type: 'text',
          align: {
            vertical: true,
            horizontal: true,
          },
        },
        {
          title: 'Кол-во сотруд. на этап',
          key: 'employee_quantity',
          isEditable: true,
          type: 'text',
          align: {
            vertical: true,
            horizontal: true,
          },
        },
        {
          title: 'Начало этапа',
          key: 'start_date',
          isEditable: false,
          type: 'text',
          align: {
            vertical: true,
            horizontal: true,
          },
        },
        {
          title: 'Конец этапа',
          key: 'end_date',
          isEditable: false,
          type: 'text',
          align: {
            vertical: true,
            horizontal: true,
          },
        },
        {
          title: 'Предварительная стоимость',
          key: 'price',
          isEditable: false,
          type: 'text',
          align: {
            vertical: true,
            horizontal: true,
          },
        },
      ];

      if (! this.isClient) {
        additionalColumns.forEach(column => {
          this.config.push(column);
        });
      }

    },
    setCountWeeks() {
      if (this.project) {

        this.project.steps.forEach(step => {
          this.countWeeks += step.weeks;
        });

        this.countWeeks += this.project.agreementWeeks;
      }
    },
    setWeeksInConfig() {

      for (let i = 0; i < this.countWeeks; i++) {
        let currentDate = new Date(this.project.start);
        currentDate.setDate(currentDate.getDate() + 7 * i);

        const date = currentDate.toLocaleDateString('ru-RU', {month: "numeric", day: "numeric"});

        this.config.push({
          title: date,
          key: date,
          isEditable: false,
          type: 'text',
          align: {
            vertical: true,
            horizontal: true,
          },
          classes: ['date']
        });
      }
    },
  }
}
</script>

<style scoped>

</style>