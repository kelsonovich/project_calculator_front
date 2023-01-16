<template>
  <div class="container-fluid">
    <header
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="34" viewBox="0 0 30 34" fill="none">
          <path
              d="M21.6559 0.949997H13.4434C9.26212 0.949997 5.84961 4.3125 5.77461 8.48124C2.78711 9.93124 0.724609 13 0.724609 16.5312C0.724609 21.4625 4.73711 25.475 9.66837 25.475H21.5996V21.0937H9.66837C7.15587 21.0937 5.10586 19.05 5.10586 16.5312C5.10586 14.0125 7.14962 11.9687 9.66837 11.9687C12.1809 11.9687 14.2309 14.0125 14.2309 16.5312V18.0375H18.6121V16.5312C18.6121 11.8125 14.9496 7.94374 10.3184 7.60624C10.7434 6.2875 11.9871 5.325 13.4496 5.325H21.6684C23.4809 5.325 24.8934 6.79999 24.8934 8.61249L24.9059 25.65C24.8996 27.425 23.4559 29.225 21.6059 29.2187V33.6C23.6496 33.6 25.4746 32.5187 26.9559 31.0812C28.4621 29.6187 29.2871 27.6875 29.2871 25.6375L29.2934 8.66249C29.2809 4.4375 25.8871 0.949997 21.6559 0.949997Z"
              fill="#1F2123"/>
          <path
              d="M20.3809 11.55C21.5027 11.55 22.4121 10.6406 22.4121 9.51875C22.4121 8.39692 21.5027 7.4875 20.3809 7.4875C19.259 7.4875 18.3496 8.39692 18.3496 9.51875C18.3496 10.6406 19.259 11.55 20.3809 11.55Z"
              fill="#1F2123"/>
        </svg>
      </a>

      <div class="col-md-3 text-end">
        <CreateProjectComponent />
      </div>
    </header>
  </div>
</template>

<script>
import CreateProjectComponent from "@/components/project/CreateProjectButton";
export default {
  name: "HeaderTemplate",
  components: {CreateProjectComponent},
  data() {
    return {
      projectName: 'Калькулятор проектов'
    }
  }
}
</script>

<style scoped>

</style>