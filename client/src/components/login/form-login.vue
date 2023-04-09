<script>
export default {
  name: 'FormLogin',
  data: () => ({
    loader: false,
    email: '',
    password: '',
    showPassword: ''
  }),
  methods: {
    async submit() {

    }
  }
}
</script>

<template>
  <v-form
      style="width: 100%"
      @submit.prevent="submit"
  >
    <v-card>
      <v-card-title>Login</v-card-title>

      <v-card-text>
        <v-text-field
            outlined
            type="email"
            label="E-mail"
            v-model="email"
        ></v-text-field>

        <v-text-field
            outlined
            label="Senha"
            type="password"
            v-model="password"
        ></v-text-field>

        <div>
          <a href="">Esqueci minha senha</a>
        </div>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          class="px-5"
          type="submit"
          color="primary"
          :loading="loader"
        >
          Entrar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>