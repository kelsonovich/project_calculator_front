<template>
  <div v-if="project" class="container">
    <TitleUI :title="project.title"/>

    <div class="tab-content" id="detalizationTabContent">
      <div class="tab-pane fade show active" id="client" role="tabpanel" aria-labelledby="client-tab" tabindex="0">
        <ProjectClientTableComponent :project="project" :isClient="true"/>
      </div>

      <div class="tab-pane fade" id="scid" role="tabpanel" aria-labelledby="scid-tab" tabindex="0">
        <ProjectClientTableComponent :project="project" :isClient="false"/>
      </div>

      <div class="tab-pane fade" id="detalization" role="tabpanel" aria-labelledby="detalization-tab" tabindex="0">
        <div class="card card-body">
          <div class="row">
            <div class="col-4">
              <div class="row">
                <div class="mb-3">
                  <label class="form-label"><small>Дата начала проекта</small></label>
                  <input type="text" class="form-control form-control-sm" placeholder="" disabled
                         :value="project.start">
                </div>
              </div>
              <div class="row">
                <div class="mb-3">
                  <label class="form-label"><small>Дата окончания проекта</small></label>
                  <input type="text" class="form-control form-control-sm" placeholder="" disabled :value="project.end">
                </div>
              </div>
              <div class="row">
                <div class="mb-3">
                  <label class="form-label">
                    <small>Длительность (мес) <br> * При расчете сроков праздничные дни не учтены.</small>
                  </label>
                  <input type="text" class="form-control form-control-sm" placeholder="" disabled>
                </div>
              </div>
              <div class="row">
                <div class="mb-3">
                  <label class="form-label"><small>Предварительная стоимость разработки <br> * Для стандартных условий
                    Договора</small></label>
                  <input type="text" class="form-control form-control-sm" placeholder="" disabled>
                </div>
              </div>
            </div>
            <div class="col-4">
              <ProjectPriceCardComponent :price="project.price"/>
            </div>
            <div class="col-4">
              <div class="row">
                <div class="mb-3">
                  <label class="form-label"><small>Кол-во часов в неделю на 1 сотрудника</small></label>
                  <input type="text" class="form-control form-control-sm" placeholder="" disabled :value="project.hours_per_week">
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProjectDetalizationTableComponent :project="project"/>
      </div>
    </div>
  </div>
  <ProjectFooterComponent/>
</template>

<script>
import TitleUI from "@/components/ui/Title";
import ProjectPriceCardComponent from "@/components/project/ProjectPriceCardComponent";
import ProjectFooterComponent from "@/components/project/ProjectFooterComponent";
import ProjectDetalizationTableComponent from "@/components/project/ProjectDetalizationTableComponent";
import ProjectClientTableComponent from "@/components/project/ProjectClientTableComponent";

export default {
  name: "ProjectComponent",
  components: {
    ProjectClientTableComponent,
    ProjectDetalizationTableComponent,
    ProjectFooterComponent,
    ProjectPriceCardComponent,
    TitleUI
  },
  mounted() {
    this.load();
  },
  computed: {
    project() {
      return this.$store.getters.GET_PROJECT;
    },
  },
  methods: {
    load() {
      if (this.$route.params && this.$route.params.projectId) {
        this.$store.dispatch('getProject', {projectId: this.$route.params.projectId});
      }
    }
  }
}
</script>

<style scoped>

</style>
