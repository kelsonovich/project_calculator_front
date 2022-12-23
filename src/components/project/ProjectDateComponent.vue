<template>
  <div class="card card-body h-100" v-if="project">
    <ProjectInputComponent :input="getProjectStart" @update="updateStartDate"/>
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
  },
  data() {
    return {
      project: null
    }
  },
  mounted() {
    this.setProject();
  },
  computed: {
    getProjectStart() {
      return {
        label: 'Дата начала проекта',
        key: 'start',
        value: this.project.start,
        readonly: this.isReadonly,
        type: 'date',
        class: ['mb-3']
      }
    },
    getProjectEnd() {
      return {
        label: 'Дата окончания проекта',
        key: 'end',
        value: this.project.end,
        readonly: true,
        type: 'date',
        class: ['mb-3']
      }
    },
    getProjectDuration() {
      return {
        label: 'Длительность (мес)\n' +
            '* При расчете сроков праздничные дни не учтены.',
        key: 'start',
        value: this.project.duration,
        readonly: true,
        type: 'string',
        class: ['mb-3']
      }
    },
    getProjectPrice() {
      return {
        label: 'Предварительная стоимость разработки\n' +
            '*для стандартных условий Договора',
        key: 'price',
        value: this.project.total.price,
        readonly: true,
        type: 'string',
        class: ['mb-3']
      }
    },
  },
  methods: {
    updateStartDate(value) {
      this.$emit('updateProject', value);
    },
    setProject() {
      this.project = this.$store.getters.GET_PROJECT;
      console.log(this.project.start);
    }
  }
}
</script>

<style scoped>

</style>