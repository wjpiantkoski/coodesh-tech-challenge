<script>
import numberToCurrency from "@/utils/numberToCurrency";

export default {
  name: 'CardSellerTransactions',
  props: ['sellerData'],
  computed: {
    total() {
      return numberToCurrency(this.sellerData.total)
    }
  }
}
</script>

<template>
  <v-card>
    <v-card-title class="d-flex align-center justify-space-between">
      <div>
        {{ sellerData.seller }}
      </div>

      <div class="d-flex flex-column text-right">
        <span class="seller-total-value">{{ total }}</span>
        <span class="seller-total-desc">Total</span>
      </div>
    </v-card-title>

    <v-card-text>

    </v-card-text>
  </v-card>
</template>

<style scoped>
.seller-total-value,
.seller-total-desc {
  font-size: 16px;
  line-height: 1.5em;
}

.seller-total-desc {
  font-size: 12px;
}
</style>