<template>
  <HeaderTemplate v-if="!isLogin"/>
  <div class="container-fluid">
    <PreloaderComponent v-if="preloader > 0"/>
    <router-view
        v-slot="{ Component, route }"
    >
      <transition name="fade">
        <component
            :is="Component "
            :key="route.path"
        />
      </transition>
    </router-view>
  </div>
</template>

<script>
import HeaderTemplate from "@/components/template/Header";
import PreloaderComponent from "@/components/ui/PreloaderComponent";

export default {
  name: 'App',
  components: {
    PreloaderComponent,
    HeaderTemplate,
  },
  data() {
    return {
      title: 'Калькулятор проектов',
    }
  },
  computed: {
    preloader() {
      return this.$store.getters.PRELOADER;
    },
    isLogin() {
      return this.$route.path === '/login';
    }
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      if (! localStorage.user) {
        this.$router.replace({name: 'login'});
      }
    }
  }
}
</script>

<style>

</style>
