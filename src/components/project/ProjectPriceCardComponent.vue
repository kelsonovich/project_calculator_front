<template>
  <div class="card card-body">
    <div class="row">
      <div class="col">
        <ProjectInputComponent :input="getInput('analyst')"/>
      </div>
      <div class="col">
        <ProjectInputComponent :input="getInput('designer')"/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <ProjectInputComponent :input="getInput('front')"/>
      </div>
      <div class="col">
        <ProjectInputComponent :input="getInput('back')"/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <ProjectInputComponent :input="getInput('qa')"/>
      </div>
      <div class="col">
        <ProjectInputComponent :input="getInput('content')"/>
      </div>
    </div>
  </div>
</template>

<script>

import ProjectInputComponent from "@/components/project/ProjectInputComponent";

export default {
  name: "ProjectPriceCardComponent",
  components: {
    ProjectInputComponent
  },
  props: {
    price: Object
  },
  data() {
    return {
      priceType: {
        analyst: 'Аналитика',
        designer: 'Дизайнер',
        front: 'Верстальщик',
        back: 'Разработчик',
        qa: 'Тестирование',
        content: 'Контент',
      }
    }
  },
  methods: {
    getInput(type) {
      return {
        label: this.priceType[`${type}`],
        key: type,
        value: this.price[`${type}`],
        readonly: false
      }
    },
  }
}
</script>

<style scoped>

</style>