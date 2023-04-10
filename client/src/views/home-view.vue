<script>
import NavigationBar from "@/components/home/navigation-bar.vue";
import UploadButton from "@/components/home/upload-button.vue";
import FormFileUpload from "@/components/home/form-file-upload.vue";
import transactionsList from "@/services/transactionsList";

export default {
  name: 'HomeView',
  data: () => ({
    loader: false,
    transactionsList: {
      items: [],
      total: 0
    }
  }),
  components: {
    FormFileUpload,
    UploadButton,
    NavigationBar
  },
  methods: {
    async listTransactions() {
      try {
        this.loader = true
        const {data} = await transactionsList()

        this.transactionsList = data
      } catch (err) {
        if (process.env.NODE_ENV !== 'production') {
          console.error(err)
        }
      } finally {
        this.loader = false
      }
    }
  },
  created() {
    this.listTransactions()
    this.$bus.$on('refreshTransactionsList', this.listTransactions)
  }
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

    <form-file-upload/>
  </v-main>
</template>