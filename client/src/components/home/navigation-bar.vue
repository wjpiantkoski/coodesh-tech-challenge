<script>
import {getAuth, signOut} from "firebase/auth";

export default {
  name: 'NavigationBar',
  data: () => ({
    loader: false
  }),
  methods: {
    async signout() {
      this.loader = true
      await signOut(getAuth())
      await this.$router.push('/login')
    }
  }
}
</script>

<template>
  <v-app-bar
      dark
      dense
      color="blue"
  >
    <v-toolbar-title>Coodesh Challenge</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn
        text
        @click="signout"
        :loading="loader"
    >
      Sair
    </v-btn>
  </v-app-bar>
</template>