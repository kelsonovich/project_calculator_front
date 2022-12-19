<template>
  <footer class="footer bg-body sticky-bottom border-top">
    <ul class="nav nav-pills nav-fill mt-3" id="detalizationTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
            class="nav-link active" id="client-tab" data-bs-toggle="pill" data-bs-target="#client" type="button"
            role="tab" aria-controls="client" aria-selected="true"
        >
          Клиент
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
            class="nav-link" id="scid-tab" data-bs-toggle="pill" data-bs-target="#scid" type="button"
            role="tab" aria-controls="scid" aria-selected="false" tabindex="-1"
        >
          СКАИД
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
            class="nav-link" id="detalization-tab" data-bs-toggle="pill" data-bs-target="#detalization"
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
  name: "ProjectFooterComponent"
}
</script>

<style scoped>
.footer {
  bottom: 0px;
}
</style>