<script>
import numberToCurrency from "@/utils/numberToCurrency";

export default {
  name: 'TransactionsTotal',
  props: ['total'],
  computed: {
    formatedTotal() {
      let total = 0

      if (this.total > 0) {
        total = this.total / 100
      }

      return numberToCurrency(total)
    }
  }
}
</script>

<template>
<div class="d-flex align-center justify-space-between">
  <div class="d-flex flex-column">
    <h2>Total</h2>
  </div>

  <div class="d-flex flex-column">
    <h2>{{ formatedTotal }}</h2>
  </div>
</div>
</template>