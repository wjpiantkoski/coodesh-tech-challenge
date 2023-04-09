<script>
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import {email, required} from 'vuelidate/lib/validators'

export default {
  name: 'FormLogin',
  data: () => ({
    loader: false,
    email: '',
    password: '',
    showPassword: ''
  }),
  validations: {
    email: {
      email,
      required
    },
    password: {
      required
    }
  },
  computed: {
    emailErrors() {
      if (!this.$v.email.$anyDirty) {
        return []
      }

      if (this.$v.email.$anyError) {
        return ['Preencha um e-mail válido']
      }
    },
    passwordErrors() {
      if (!this.$v.password.$anyDirty) {
        return []
      }

      if (this.$v.password.$anyError) {
        return ['Preencha uma senha válida']
      }
    }
  },
  methods: {
    async submit() {
      try {
        this.$v.$touch()

        if (!this.$v.$anyError) {
          this.loader = true

          const email = this.email.trim().toLowerCase()

          await signInWithEmailAndPassword(getAuth(), email, this.password)
          await this.$router.push('/')
        }
      } catch (err) {
        if (process.env.NODE_ENV !== 'production') {
          console.error(err)
        }
      } finally {
        this.loader = false
      }
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
            :error-messages="emailErrors"
        ></v-text-field>

        <v-text-field
            outlined
            label="Senha"
            type="password"
            v-model="password"
            :error-messages="passwordErrors"
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