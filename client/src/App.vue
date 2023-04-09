<script setup lang="ts">
import {ref} from 'vue'
const btnText = ref('Teste')
</script>

<template>
  <div id="app">
    <v-container>
      <v-btn>{{btnText}}</v-btn>
    </v-container>
  </div>
</template>

<style scoped>

</style>
