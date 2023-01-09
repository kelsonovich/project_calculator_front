<template>
  <div v-if="project" class="project__body">
    <div class="row d-flex align-items-center">
      <div class="col-9">
        <TitleUI :title="project.title"/>
      </div>
      <div class="col">
        <ClearChangeButton />
      </div>
      <div class="col">
        <ProjectUpdateButton />
      </div>
    </div>


    <div class="tab-content" id="detalizationTabContent">
      <div class="tab-pane fade show active" id="client" role="tabpanel" aria-labelledby="client-tab" tabindex="0">
        <ProjectClientTabComponent :project="project" @updateProject="updateProject"/>
      </div>

      <div class="tab-pane fade" id="scid" role="tabpanel" aria-labelledby="scid-tab" tabindex="0">
        <ProjectCompanyTabComponent :project="project" @updateProject="updateProject"/>
      </div>

      <div class="tab-pane fade" id="detalization" role="tabpanel" aria-labelledby="detalization-tab" tabindex="0">
        <ProjectDetalizationTableComponent @updateProject="updateProject"/>
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
import ProjectUpdateButton from "@/components/project/ProjectUpdateButton";
import ClearChangeButton from "@/components/project/ClearChangeButton";

export default {
  name: "ProjectComponent",
  components: {
    ClearChangeButton,
    ProjectUpdateButton,
    ProjectCompanyTabComponent,
    ProjectClientTabComponent,
    ProjectDetalizationTableComponent,
    ProjectFooterComponent,
    TitleUI
  },
  data() {
    return {
    }
  },
  mounted() {
    console.log('mounted');
    this.load();
  },
  computed: {
    project() {
      return this.$store.getters.GET_PROJECT;
    },
  },
  watch: {
    '$store.state.project': function () {
      // this.load();
    }
  },
  methods: {
    load() {
      if (this.$route.params && this.$route.params.projectId) {
        this.$store.dispatch('getProject', {projectId: this.$route.params.projectId});
      }
    },
    async updateProject(value) {
      console.log('ProjectComponent');
      await this.$store.dispatch('updateProject', {projectId: this.$route.params.projectId, data: value});
    }
  }
}
</script>

<style scoped>
.project__body {
  min-height: 84vh;
}
</style>
