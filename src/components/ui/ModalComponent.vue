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
          <InputComponent
              v-for="(input, index) in config.body.inputs"
              :key="index"
              :input="input"
              @update="setValue"
          />
        </div>
        <div class="modal-footer">
          <button type="button" :class="config.footer.button.accept.class" @click="emitValue">
            {{ config.footer.button.accept.title }}
          </button>
          <button type="button" :class="config.footer.button.close.class" data-bs-dismiss="modal">
            {{ config.footer.button.close.title }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputComponent from "@/components/ui/InputComponent";
export default {
  name: "ModalComponent",
  components: {InputComponent},
  data() {
    return {
      modalValue: {}
    }
  },
  props: {
    config: Object
  },
  methods: {
    setValue(emitValue) {
      for (let key in emitValue) {
        this.modalValue[key] = emitValue[key];
      }
    },
    emitValue(){
      this.modalValue.type = this.config.type;

      this.$emit('emitValue', this.modalValue);
    }
  }
}
</script>

<style scoped>

</style>