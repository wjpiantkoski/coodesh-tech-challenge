<script>
import FormLogin from "@/components/login/form-login.vue";

export default {
  name: 'LoginView',
  components: {FormLogin}
}
</script>

<template>
  <v-main>
    <v-container fluid class="fill-height align-center justify-center">
      <FormLogin/>
    </v-container>
  </v-main>
</template>

<style scoped>
.container {
  max-width: 480px !important;
}
</style>