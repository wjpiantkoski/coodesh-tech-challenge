<script>
import {required} from 'vuelidate/lib/validators'
import uploadFile from "@/services/uploadFile";

export default {
  name: 'FormFileUpload',
  data: () => ({
    dialog: false,
    loader: false,
    file: null
  }),
  validations: {
    file: {required}
  },
  computed: {
    fileErrors() {
      if (!this.$v.file.$anyDirty) {
        return []
      }
      if (this.$v.file.$anyError) {
        return ['Selecione um arquivo válido']
      }
    }
  },
  methods: {
    openDialog() {
      this.dialog = true
    },
    closeDialog() {
      this.dialog = false
      this.loader = false
    },
    async submit() {
      try {
        this.$v.$touch()

        if (!this.$v.$anyError) {
          this.loader = true

          const formData = new FormData()

          formData.append('files', this.file, this.file.name)

          await uploadFile(formData)

          this.$bus.$emit('refreshTransactionsList')
          this.closeDialog()
        }
      } catch (err) {
        if (process.env.NODE_ENV !== 'production') {
          console.error(err)
        }
      }
    }
  },
  created() {
    this.$bus.$on('OpenUploadForm', this.openDialog)
  }
}
</script>

<template>
  <v-dialog
      v-model="dialog"
      max-width="480px"
  >
    <v-card>
      <v-card-title>
        <v-btn
            icon
            class="mr-2"
            @click="closeDialog"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>

        <span>Importar transações</span>
      </v-card-title>

      <v-card-text>
        <v-form @submit.prevent="submit">
          <v-file-input
              outlined
              accept=".txt"
              v-model="file"
              label="Selecione o arquivo"
              :error-messages="fileErrors"
          ></v-file-input>

          <v-card-actions class="pa-0">
            <v-spacer></v-spacer>
            <v-btn
                dark
                color="blue"
                type="submit"
                :loading="loader"
            >
              Importar
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>


    </v-card>
  </v-dialog>
</template>