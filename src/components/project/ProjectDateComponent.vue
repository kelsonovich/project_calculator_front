<template>
  <div class="card card-body h-100" v-if="project">
    <ProjectInputComponent :input="getProjectStart" @update="calculate"/>
    <ProjectInputComponent :input="getProjectEnd"/>
    <ProjectInputComponent :input="getProjectDuration"/>
    <ProjectInputComponent :input="getProjectPrice"/>
    <ProjectInputComponent v-if="!isReadonly" :input="getProjectClientBuffer" @update="calculate"/>
  </div>
</template>

<script>
import ProjectInputComponent from "@/components/project/ProjectInputComponent";

export default {
  name: "ProjectDateComponent",
  components: {ProjectInputComponent},
  props: {
    isReadonly: Boolean,
    isClient: Boolean,
  },
  data() {
    return {
      project: null,
      projectConfig: {
        start: null,
        end: null,
        duration: null,
        price: null,
        client_buffer: null
      },
    }
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
      };
    },
    getProjectEnd() {
      return {
        label: 'Дата окончания проекта',
        key: 'end',
        value: (this.isClient) ? this.project.client.end : this.project.company.end,
        readonly: true,
        type: 'date',
        class: ['mb-3']
      };
    },
    getProjectDuration() {
      return {
        label: 'Длительность (мес)\n' +
            '* При расчете сроков праздничные дни не учтены.',
        key: 'duration',
        value: (this.isClient) ? this.project.client.duration : this.project.company.duration,
        readonly: true,
        type: 'string',
        class: ['mb-3']
      };
    },
    getProjectPrice() {
      return {
        label: 'Предварительная стоимость разработки\n' +
            '*для стандартных условий Договора',
        key: 'price',
        value: (this.isClient) ? this.project.total.client.price : this.project.total.company.price,
        readonly: true,
        type: 'string',
        class: ['mb-3']
      };
    },
    getProjectClientBuffer() {
      return {
        label: 'Буффер для клиента',
        key: 'client_buffer',
        value: this.project.client_buffer,
        readonly: this.isReadonly,
        type: 'number',
        class: ['mb-3']
      };
    },
  },
  mounted() {
    this.$watch('$store.state.recalculatedProject', () => {
      this.setProject();
    });
    this.setProject();
  },
  methods: {
    calculate(value) {
      console.log('ProjectDateComponent');
      this.$emit('changeProject', value);
    },
    setProject() {
      this.project = this.$store.getters.GET_RECALCULATED_PROJECT;
    },
  }
}
</script>

<style scoped>

</style>