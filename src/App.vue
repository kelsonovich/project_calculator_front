<template>
  <HeaderTemplate/>
  <div class="container-fluid">
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

export default {
  name: 'App',
  components: {
    HeaderTemplate,
  },
  mounted() {
    // document.body.classList.add('d-flex', 'flex-column', 'min-vh-100')
  }
}
</script>

<style>
</style>
