<template>
  <div style="overflow-x: auto;">
    <TableComponent
        v-if="project"
        :config="config"
        :tasks="project.tasks"
        :qa="project.qa"
        :total="project.total.project"
    />
  </div>
</template>

<script>
import TableComponent from "@/components/ui/table/TableComponent";

export default {
  name: "ProjectDetalizationTableComponent",
  components: {TableComponent},
  props: {
    project: [Object, Array],
  },
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
          }
        },
        {
          title: 'Описание',
          key: 'description',
          isEditable: true,
          type: 'text',
          align: {
            vertical: true,
            horizontal: true,
          }
        },
        {
          title: 'Аналитика / Прототип',
          key: 'analyst_price',
          isEditable: false,
          type: 'text',
          align: {
            vertical: true,
            horizontal: true,
          }
        },
        {
          title: 'Дизайн, min, руб',
          key: 'designer_price_min',
          isEditable: false,
          type: 'text',
          align: {
            vertical: true,
            horizontal: true,
          }
        },
        {
          title: 'Дизайн, max, руб',
          key: 'designer_price_max',
          isEditable: false,
          type: 'text',
          align: {
            vertical: true,
            horizontal: true,
          }
        },
        {
          title: 'Верстка, min, руб',
          key: 'front_price_min',
          isEditable: false,
          type: 'text',
          align: {
            vertical: true,
            horizontal: true,
          }
        },
        {
          title: 'Верстка, max, руб',
          key: 'front_price_max',
          isEditable: false,
          type: 'text',
          align: {
            vertical: true,
            horizontal: true,
          }
        }, {
          title: 'Разработка, min, руб',
          key: 'back_price_min',
          isEditable: false,
          type: 'text',
          align: {
            vertical: true,
            horizontal: true,
          }
        }, {
          title: 'Разработка, max, руб',
          key: 'back_price_max',
          isEditable: false,
          type: 'text',
          align: {
            vertical: true,
            horizontal: true,
          }
        }, {
          title: 'Прототип',
          key: 'analyst_hours',
          isEditable: true,
          type: 'number',
          align: {
            vertical: true,
            horizontal: true,
          }
        },
        {
          title: 'Дизайн, min',
          key: 'designer_hours_min',
          isEditable: true,
          type: 'number',
          align: {
            vertical: true,
            horizontal: true,
          }
        },
        {
          title: 'Дизайн, max',
          key: 'designer_hours_max',
          isEditable: true,
          type: 'number',
          align: {
            vertical: true,
            horizontal: true,
          }
        },
        {
          title: 'Верстка, min',
          key: 'front_hours_min',
          isEditable: true,
          type: 'number',
          align: {
            vertical: true,
            horizontal: true,
          }
        },
        {
          title: 'Верстка, max',
          key: 'front_hours_max',
          isEditable: true,
          type: 'number',
          align: {
            vertical: true,
            horizontal: true,
          }
        },
        {
          title: 'Разработка, min',
          key: 'back_hours_min',
          isEditable: true,
          type: 'number',
          align: {
            vertical: true,
            horizontal: true,
          }
        },
        {
          title: 'Разработка, max',
          key: 'back_hours_max',
          isEditable: true,
          type: 'number',
          align: {
            vertical: true,
            horizontal: true,
          }
        },
      ]
    }
  },
  methods: {}
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