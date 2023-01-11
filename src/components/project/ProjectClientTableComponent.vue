<template>
  <div style="overflow-x: auto;" class="mb-3">
    <TableGanttComponent
        v-if="project"
        :config="config"
        :steps="getSteps"
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
      defaultConfig: [
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
      config: [],
      countWeeks: 0,
      companyColumns: [
        {
          title: 'Трудозатраты',
          key: 'hours_avg',
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
          title: 'Согла-сование',
          key: 'agreement',
          isEditable: true,
          type: 'number',
          align: {
            vertical: true,
            horizontal: true,
          },
        },
        {
          title: 'Запаралле-ливание',
          key: 'parallels',
          isEditable: true,
          type: 'number',
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
          title: 'Предвари-тельная стоимость',
          key: 'price',
          isEditable: false,
          type: 'text',
          align: {
            vertical: true,
            horizontal: true,
          },
        },
      ],
      clientColumns: [
        {
          title: 'Трудозатраты',
          key: 'hours_avg',
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
          title: 'Согла-сование',
          key: 'agreement',
          isEditable: true,
          type: 'number',
          align: {
            vertical: true,
            horizontal: true,
          },
        },
        {
          title: 'Запаралле-ливание',
          key: 'parallels',
          isEditable: true,
          type: 'number',
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
          title: 'Предвари-тельная стоимость',
          key: 'price',
          isEditable: false,
          type: 'text',
          align: {
            vertical: true,
            horizontal: true,
          },
        },
      ],
    }
  },
  watch: {
    project: 'reload'
  },
  mounted() {
    this.reload();
  },
  computed: {
    getSteps() {
      return this.isClient ? this.project.client.steps : this.project.company.steps;
    }
  },
  methods: {
    reload() {
      this.config = JSON.parse(JSON.stringify(this.defaultConfig));

      this.setConfig();
      this.setWeeksInConfig();
    },
    setConfig() {
      if (this.isClient) {
        this.clientColumns.forEach(column => {
          this.config.push(column);
        });
      } else {
        this.companyColumns.forEach(column => {
          this.config.push(column);
        });
      }

    },
    setWeeksInConfig() {
      let countWeeks = (this.isClient) ? this.project.client.countWeeks : this.project.company.countWeeks;

      countWeeks *= 1.2;

      for (let i = 0; i < countWeeks; i++) {
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