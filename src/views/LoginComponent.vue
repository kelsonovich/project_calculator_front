<template>
  <div class="h-100 d-flex align-items-center justify-content-center">
    <main class="form-signin w-100 ">
      <form>
        <h3 class="h3 mb-3 fw-normal text-center">Авторизация</h3>

        <ProjectInputComponent :input="getLoginInput" @update="setLogin" class="mb-2"/>
        <ProjectInputComponent :input="getPasswordInput" @update="setPassword" class="mb-3"/>

        <button class="w-100 btn btn-primary" type="button" @click="authorize">Авторизоваться</button>
      </form>
    </main>
  </div>
</template>

<script>
import ProjectInputComponent from "@/components/project/ProjectInputComponent";

export default {
  name: "LoginComponent",
  components: {ProjectInputComponent},
  data() {
    return {
      userData: {
        email: null,
        password: null
      }
    }
  },
  computed: {
    getLoginInput() {
      return {
        placeholder: 'Email',
        key: 'email',
        value: '',
        readonly: false,
        type: 'email',
      };
    },
    getPasswordInput() {
      return {
        placeholder: 'Пароль',
        key: 'password',
        value: '',
        readonly: false,
        type: 'password',
      };
    }
  },
  methods: {
    authorize() {
      this.$store.dispatch('login', {userData: this.userData});
    },
    setLogin(value) {
      this.userData.email = value.email;
    },
    setPassword(value) {
      this.userData.password = value.password;
    },
  }
}
</script>

<style scoped>
html,
body {
  height: 100%;
}

.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

</style>