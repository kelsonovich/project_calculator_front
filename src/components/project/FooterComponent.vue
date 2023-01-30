<template>
  <footer class="footer bg-body sticky-bottom border-top">
    <ul class="nav nav-pills nav-fill mt-3" id="detalizationTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
            class="nav-link active" id="client-tab" data-bs-toggle="pill" data-bs-target="#client" type="button"
            role="tab" aria-controls="client" aria-selected="true"
        >
          {{ getInnerClientTitle }}
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
            class="nav-link" id="company-tab" data-bs-toggle="pill" data-bs-target="#company" type="button"
            role="tab" aria-controls="company" aria-selected="false" tabindex="-1"
        >
          {{ getInnerCompanyTitle }}
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
            class="nav-link mb-3" id="detalization-tab" data-bs-toggle="pill" data-bs-target="#detalization"
            type="button" role="tab" aria-controls="detalization" aria-selected="false" tabindex="-1"
        >
          Детализация
        </button>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  computed: {
    project() {
      return this.$store.getters.GET_RECALCULATED_PROJECT;
    },
    getInnerCompanyTitle() {
      if (this.project) {
        return this.project.innerCompany.title;
      }

      return 'Компания';
    },
    getInnerClientTitle() {

      if (this.project) {
        return this.project.clientCompany.title;
      }

      return 'Клиент';
    }
  },
}
</script>

<style scoped>
.footer {
  bottom: 0px;
}
</style>