<template>
  <div class="btn-group col-4">
    <button type="button" class="btn btn-outline-success dropdown-toggle btn-block" data-bs-toggle="dropdown"
            aria-expanded="false">
      Создать
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" @click="showCreateProjectModal">Проект</a></li>
      <li><a class="dropdown-item" @click="showCreateCompanyModal">Компанию</a></li>
    </ul>
  </div>

  <ModalComponent :config="config" @emitValue="create"/>
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
  computed: {
    getClients() {
      return this.$store.getters.GET_CLIENTS;
    },
    getInnerCompanies() {
      return this.$store.getters.GET_INNER_COMPANIES;
    },
    isHasBeenCreated() {
      return this.$store.getters.GET_HAS_BEEN_CREATED;
    }
  },
  methods: {
    setModal() {
      this.modal = new Modal(document.getElementById('createModel'), {backdrop: true});
    },
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
    showCreateCompanyModal() {
      this.setModal();

      this.config = {
        type: 'company',
        head: {
          title: 'Создание новой компании'
        },
        body: {
          inputs: [
            {
              key: 'title',
              value: '',
              type: 'text',
              placeholder: 'Введите название компании...',
              class: ['mb-3'],
            },
            {
              key: 'description',
              value: '',
              type: 'text',
              placeholder: 'Введите описание компании...',
              class: ['mb-3'],
            },
          ]
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
    },
    async showCreateProjectModal() {
      this.setModal();

      await this.$store.dispatch('getInnerCompanies');
      await this.$store.dispatch('getClients');

      this.config = {
        type: 'project',
        head: {
          title: 'Создание нового проекта'
        },
        body: {
          inputs: [
            {
              key: 'title',
              value: '',
              type: 'text',
              placeholder: 'Введите название проекта...',
              class: ['mb-3'],
            },
            {
              key: 'company_id',
              type: 'select',
              class: ['mb-3'],
              options: this.getInnerCompanies
            },
            {
              key: 'client_id',
              type: 'select',
              class: ['mb-3'],
              options: this.getClients
            },
          ]
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
    },
    async create(value) {
      if (value.type === 'company') {
        await this.$store.dispatch('createCompany', {company: value});
      } else if (value.type === 'project') {
        await this.$store.dispatch('createProject', {project: value});
      }

      if (this.isHasBeenCreated) {
        this.hideModal();
      }
    }
  },
}
</script>

<style scoped>

</style>