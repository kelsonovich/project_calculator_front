<template>
  <div class="card card-body">
    <div class="row">
      <div class="col">
        <ProjectInputComponent :input="getInput('analyst')" @update="changePrice"/>
      </div>
      <div class="col">
        <ProjectInputComponent :input="getInput('designer')" @update="changePrice"/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <ProjectInputComponent :input="getInput('front')" @update="changePrice"/>
      </div>
      <div class="col">
        <ProjectInputComponent :input="getInput('back')" @update="changePrice"/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <ProjectInputComponent :input="getInput('qa')" @update="changePrice"/>
      </div>
      <div class="col">
        <ProjectInputComponent :input="getInput('content')" @update="changePrice"/>
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
    changePrice(price) {
      console.log({price: price});
      this.$store.dispatch('changePrice', {price});
      // this.$emit('changeProject', {price: price});
    }
  }
}
</script>

<style scoped>

</style>