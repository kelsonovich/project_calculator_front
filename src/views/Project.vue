<template>
  <div v-if="project">
    <TitleUI :title="project.title"/>

    <div class="tab-content" id="detalizationTabContent">
      <div class="tab-pane fade show active" id="client" role="tabpanel" aria-labelledby="client-tab" tabindex="0">
        <ProjectClientTabComponent :project="project" />
      </div>

      <div class="tab-pane fade" id="scid" role="tabpanel" aria-labelledby="scid-tab" tabindex="0">
        <ProjectCompanyTabComponent :project="project" />
      </div>

      <div class="tab-pane fade" id="detalization" role="tabpanel" aria-labelledby="detalization-tab" tabindex="0">
        <ProjectDetalizationTableComponent :project="project"/>
      </div>
    </div>
  </div>
  <ProjectFooterComponent/>
</template>

<script>
import TitleUI from "@/components/ui/Title";
import ProjectFooterComponent from "@/components/project/ProjectFooterComponent";
import ProjectDetalizationTableComponent from "@/components/project/ProjectDetalizationTableComponent";
import ProjectClientTabComponent from "@/components/project/ProjectClientTabComponent";
import ProjectCompanyTabComponent from "@/components/project/ProjectCompanyTabComponent";

export default {
  name: "ProjectComponent",
  components: {
    ProjectCompanyTabComponent,
    ProjectClientTabComponent,
    ProjectDetalizationTableComponent,
    ProjectFooterComponent,
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
