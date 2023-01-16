<template>
  <div class="mt-3">
    <div v-if="title">
      <h3>{{ title }}</h3>
    </div>
    <table class="table table-hover table-bordered table-sm">
      <TableHead :config="config" :thBgClass="'table-primary'"/>

      <TaskTableBody :config="config" :body="project.calculatedOptions" :type="'task'" @changeProject="change"/>
    </table>
  </div>
</template>

<script>
import TableHead from "@/components/ui/table/TableHead";
import TaskTableBody from "@/components/project/TaskTableBody";

export default {
  name: "OptionTableComponent",
  components: {TaskTableBody, TableHead},
  props: {
    project: [Object, Array],
    isClient: Boolean,
    title: String,
  },
  data() {
    return {
      config: [
        {
          title: 'Наименование',
          key: 'title',
          isEditable: true,
          type: 'text',
          align: {
            vertical: true,
            horizontal: true,
          },
          classes: ['title', 'col-3']
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
          classes: ['col-5']
        },
        {
          title: 'Количество',
          key: 'quantity',
          isEditable: true,
          type: 'number',
          align: {
            vertical: true,
            horizontal: true,
          },
          classes: ['col-1']
        },
        {
          title: 'Цена за ед.',
          key: 'price',
          isEditable: true,
          type: 'number',
          align: {
            vertical: true,
            horizontal: true,
          },
          classes: ['col-1']
        },
        {
          title: 'Итого',
          key: 'total_price',
          isEditable: true,
          type: 'number',
          align: {
            vertical: true,
            horizontal: true,
          },
          classes: ['col-1']
        },
      ],
    }
  },
  methods: {
    change(value) {
      this.$store.dispatch('changeProject', {type: 'options', data: value});
    }
  }
}
</script>

<style scoped>

</style>