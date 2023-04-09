<script lang="ts" setup></script>

<template>
  <v-card>
    <v-form @submit.prevent="">
      <v-card-title>Login</v-card-title>

      <v-card-text>
        <v-text-field
            label="E-mail"
            type="email"
        ></v-text-field>

        <v-text-field
            label="Senha"
            type="password"
        ></v-text-field>

        <div class="my-2 text-right">
          <a href="">Esqueci minha senha</a>
        </div>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
            variant="tonal"
            color="blue"
        >
          Entrar
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>