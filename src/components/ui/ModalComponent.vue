<template>
  <div class="modal fade" id="createModel" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
       aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content" v-if="config">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">{{ config.head.title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

        </div>
        <div class="modal-footer">
          <button type="button" :class="config.footer.button.accept.class">{{ config.footer.button.accept.title }}</button>
          <button type="button" :class="config.footer.button.close.class">{{ config.footer.button.close.title }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
  props: {
    config: Object
  },
}
</script>

<style scoped>

</style>