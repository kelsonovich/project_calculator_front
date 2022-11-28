<template>
  <div class="row">
    <ProjectPriceInputComponent
        :price="price.analyst"
        :code="'analyst'"
        :title="'Аналитик'"
    />
  </div>
  <div class="row">
    <ProjectPriceInputComponent
        :price="price.designer"
        :code="'designer'"
        :title="'Дизайнер'"
    />
  </div>
  <div class="row">
    <ProjectPriceInputComponent
        :price="price.front"
        :code="'front'"
        :title="'Верстальщик'"
    />
  </div>
  <div class="row">
    <ProjectPriceInputComponent
        :price="price.back"
        :code="'back'"
        :title="'Разработчик'"
    />
  </div>
  <div class="row">
    <ProjectPriceInputComponent
        :price="price.qa"
        :code="'qa'"
        :title="'QA'"
    />
  </div>
  <div class="row">
    <ProjectPriceInputComponent
        :price="price.content"
        :code="'content'"
        :title="'Контент-менеджер'"
    />
  </div>
</template>

<script>

import ProjectPriceInputComponent from "@/components/project/ProjectPriceInputComponent";

export default {
  name: "ProjectPriceCardComponent",
  components: {
    ProjectPriceInputComponent
  },
  props: {
    price: Object
  }
}
</script>

<style scoped>

</style>