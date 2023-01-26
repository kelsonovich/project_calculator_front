<template>
  <div class="btn-group col-4">
    <button type="button" class="btn btn-outline-success dropdown-toggle btn-block" data-bs-toggle="dropdown"
            aria-expanded="false">
      Создать
    </button>
    <ul class="dropdown-menu">
      <li>
        <a class="dropdown-item" href="#" @click="showCreateProjectModal">
          Проект
        </a>
      </li>
      <li>
        <a class="dropdown-item" href="#" @click="showCreateCompanyModal">
          Компанию
        </a>
      </li>
    </ul>
  </div>

  <ModalComponent :config="config"/>
</template>

<script>
import ModalComponent from "@/components/ui/ModalComponent";
import {Modal} from "bootstrap"

export default {
  name: "CreateProjectButton",
  components: {ModalComponent},
  data() {
    return {
      input: {
        key: 'title',
        value: '',
        type: 'text',
        placeholder: 'Введите название проекта...',
        class: ['mb-3'],
      },
      innerCompany: {
        key: 'company_id',
        value: 0,
        type: 'select',
        class: ['mb-3'],
        options: []
      },
      client: {
        key: 'client_id',
        value: 0,
        type: 'select',
        options: []
      },
      config: null
    }
  },
  methods: {
    setModal() {
      this.modal = new Modal(document.getElementById('createModel'), {backdrop: true});
    },
    showModal() {
      this.modal.show();
    },
    showCreateCompanyModal() {
      this.setModal();

      this.config = {
        head: {
          title: 'Создание новой компании'
        }
      };

      this.showModal();
    },
    showCreateProjectModal() {
      this.setModal();

      this.config = {
        head: {
          title: 'Создание нового проекта'
        },
        footer: {
          button: {
            close: {
              title: 'Закрыть',
              class: 'btn btn-secondary'
            },
            accept: {
              title: 'Создать',
              class: 'btn btn-success'
            }
          }
        }
      };

      this.showModal();
    }
  },
}
</script>

<style scoped>

</style>