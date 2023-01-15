<template>
  <div style="overflow-x: auto;">
    <TableComponent
        v-if="project"
        :config="config"
        :tasks="getTasks"
        :qa="getQa"
        :steps="getSteps"
        :total="getTotal"
    />
  </div>
</template>

<script>
import TableComponent from "@/components/ui/table/TableComponent";

export default {
  name: "ProjectDetalizationTableComponent",
  components: {TableComponent},
  data() {
    return {
      config: [
        {
          title: 'Наименование задачи',
          key: 'title',
          isEditable: true,
          type: 'text',
          align: {
            vertical: true,
            horizontal: false,
          },
          classes: ['title']
        },
        {
          title: 'Описание',
          key: 'description',
          isEditable: true,
          type: 'text',
          align: {
            vertical: true,
            horizontal: true,
          },
          classes: ['description']
        },
        {
          title: 'Аналитика / Прототип',
          key: 'analyst_price',
          isEditable: false,
          type: 'text',
          align: {
            vertical: true,
            horizontal: true,
          },
          classes: ['title_price']
        },
        {
          title: 'Дизайн, min, руб',
          key: 'designer_price_min',
          isEditable: false,
          type: 'text',
          align: {
            vertical: true,
            horizontal: true,
          },
          classes: ['title_price']
        },
        {
          title: 'Дизайн, max, руб',
          key: 'designer_price_max',
          isEditable: false,
          type: 'text',
          align: {
            vertical: true,
            horizontal: true,
          },
          classes: ['title_price']
        },
        {
          title: 'Верстка, min, руб',
          key: 'front_price_min',
          isEditable: false,
          type: 'text',
          align: {
            vertical: true,
            horizontal: true,
          },
          classes: ['title_price']
        },
        {
          title: 'Верстка, max, руб',
          key: 'front_price_max',
          isEditable: false,
          type: 'text',
          align: {
            vertical: true,
            horizontal: true,
          },
          classes: ['title_price']
        },
        {
          title: 'Разработка, min, руб',
          key: 'back_price_min',
          isEditable: false,
          type: 'text',
          align: {
            vertical: true,
            horizontal: true,
          },
          classes: ['title_price']
        },
        {
          title: 'Разработка, max, руб',
          key: 'back_price_max',
          isEditable: false,
          type: 'text',
          align: {
            vertical: true,
            horizontal: true,
          },
          classes: ['title_price']
        },
        {
          title: 'Прототип',
          key: 'analyst_hours',
          isEditable: true,
          type: 'number',
          align: {
            vertical: true,
            horizontal: true,
          },
          classes: ['title_price']
        },
        {
          title: 'Дизайн, min',
          key: 'designer_hours_min',
          isEditable: true,
          type: 'number',
          align: {
            vertical: true,
            horizontal: true,
          },
          classes: ['title_price']
        },
        {
          title: 'Дизайн, max',
          key: 'designer_hours_max',
          isEditable: true,
          type: 'number',
          align: {
            vertical: true,
            horizontal: true,
          },
          classes: ['title_price']
        },
        {
          title: 'Верстка, min',
          key: 'front_hours_min',
          isEditable: true,
          type: 'number',
          align: {
            vertical: true,
            horizontal: true,
          },
          classes: ['title_price']
        },
        {
          title: 'Верстка, max',
          key: 'front_hours_max',
          isEditable: true,
          type: 'number',
          align: {
            vertical: true,
            horizontal: true,
          },
          classes: ['title_price']
        },
        {
          title: 'Разработка, min',
          key: 'back_hours_min',
          isEditable: true,
          type: 'number',
          align: {
            vertical: true,
            horizontal: true,
          },
          classes: ['title_price']
        },
        {
          title: 'Разработка, max',
          key: 'back_hours_max',
          isEditable: true,
          type: 'number',
          align: {
            vertical: true,
            horizontal: true,
          },
          classes: ['title_price']
        },
      ]
    }
  },
  computed: {
    getTotal() {
      return this.project.calculated.total;
    },
    getSteps() {
      return this.project.calculated.steps;
    },
    getQa() {
      return this.project.calculated.qa;
    },
    getTasks() {
      return this.project.calculated.tasks;
    },
    project() {
      return this.$store.getters.GET_RECALCULATED_PROJECT;
    },
  },
}
</script>

<style scoped>
div table {

}

th {
  min-width: 100px;
  width: 150px;
  align-items: center;
}
</style>