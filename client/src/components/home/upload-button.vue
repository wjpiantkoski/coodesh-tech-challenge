<script>
export default {
  name: 'UploadButton',
  methods: {
    showUploadForm() {
      this.$bus.$emit('OpenUploadForm')
    }
  }
}
</script>

<template>
  <v-btn
    fab
    right
    bottom
    absolute
    color="primary"
    class="mb-16 mr-5"
    @click="showUploadForm"
  >
    <v-icon>mdi-file-upload</v-icon>
  </v-btn>
</template>