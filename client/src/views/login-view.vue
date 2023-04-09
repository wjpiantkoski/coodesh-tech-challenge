<script>
import {defineComponent} from "vue";
import FormLogin from "../components/form-login.vue";

export default defineComponent({
  components: {FormLogin}
})
</script>

<template>
  <div class="coodesh-container d-flex align-center justify-center">
    <v-row>
      <v-col class="col-12">
        <form-login/>
      </v-col>
    </v-row>
  </div>
</template>