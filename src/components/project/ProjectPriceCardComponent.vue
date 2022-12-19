<template>
  <div class="card card-body">
    <div class="row">
      <div class="col">
        <ProjectInputComponent :input="getInput('analyst')" @update="updatePrice"/>
      </div>
      <div class="col">
        <ProjectInputComponent :input="getInput('designer')" @update="updatePrice"/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <ProjectInputComponent :input="getInput('front')" @update="updatePrice"/>
      </div>
      <div class="col">
        <ProjectInputComponent :input="getInput('back')" @update="updatePrice"/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <ProjectInputComponent :input="getInput('qa')" @update="updatePrice"/>
      </div>
      <div class="col">
        <ProjectInputComponent :input="getInput('content')" @update="updatePrice"/>
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
        readonly: false,
        type: 'number',
        class: ['mb-3']
      }
    },
    updatePrice(price) {
      this.$store.dispatch('updatePrice', {priceId: this.price.id, data: price});
      this.$emit('updateProject');
    }
  }
}
</script>

<style scoped>

</style>