<script>
import NavigationBar from "@/components/home/navigation-bar.vue";
import UploadButton from "@/components/home/upload-button.vue";

export default {
  name: 'HomeView',
  components: {UploadButton, NavigationBar}
}
</script>

<template>
  <v-main>
    <upload-button/>
    <navigation-bar/>

    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 class="text-right">

        </v-flex>
      </v-layout>
    </v-container>
  </v-main>
</template>