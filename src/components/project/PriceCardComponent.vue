<template>
  <div class="card card-body">
    <div class="row">
      <div class="col">
        <InputComponent :input="getInput('analyst')" @update="changePrice"/>
      </div>
      <div class="col">
        <InputComponent :input="getInput('designer')" @update="changePrice"/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <InputComponent :input="getInput('front')" @update="changePrice"/>
      </div>
      <div class="col">
        <InputComponent :input="getInput('back')" @update="changePrice"/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <InputComponent :input="getInput('qa')" @update="changePrice"/>
      </div>
      <div class="col">
        <InputComponent :input="getInput('content')" @update="changePrice"/>
      </div>
    </div>
  </div>
</template>

<script>
import InputComponent from "@/components/ui/InputComponent";

export default {
  name: "ProjectPriceCardComponent",
  components: {
    InputComponent
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
      this.$store.dispatch('changeProject', {type: 'price', data: price});
    }
  }
}
</script>

<style scoped>

</style>