<template>
  <div class="card card-body h-100">
    <ProjectInputComponent :input="getProjectStart"/>
    <ProjectInputComponent :input="getProjectEnd"/>
    <ProjectInputComponent :input="getProjectDuration"/>
    <ProjectInputComponent :input="getProjectPrice"/>
  </div>
</template>

<script>
import ProjectInputComponent from "@/components/project/ProjectInputComponent";

export default {
  name: "ProjectDateComponent",
  components: {ProjectInputComponent},
  props: {
    isReadonly: Boolean,
    project: Object
  },
  computed: {
    getProjectStart() {
      return {
        label: 'Дата начала проекта',
        key: 'start',
        value: new Date(this.project.start).toLocaleDateString(),
        readonly: this.isReadonly
      }
    },
    getProjectEnd() {
      return {
        label: 'Дата окончания проекта',
        key: 'end',
        value: this.project.end,
        readonly: true
      }
    },
    getProjectDuration() {
      return {
        label: 'Длительность (мес)\n' +
            '* При расчете сроков праздничные дни не учтены.',
        key: 'start',
        value: this.project.duration,
        readonly: true
      }
    },
    getProjectPrice() {
      return {
        label: 'Предварительная стоимость разработки\n' +
            '*для стандартных условий Договора',
        key: 'price',
        value: this.project.total.price,
        readonly: true
      }
    },
  }
}
</script>

<style scoped>

</style>