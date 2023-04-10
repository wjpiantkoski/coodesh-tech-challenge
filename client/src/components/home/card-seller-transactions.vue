<script>
import numberToCurrency from "@/utils/numberToCurrency";
import dayjs from "@/utils/dayjs";

export default {
  name: 'CardSellerTransactions',
  props: ['sellerData'],
  data: () => ({
    tableHeaders: [
      {
        text: 'Produto',
        align: 'start',
        sortable: true,
        value: '_product'
      },
      {
        text: 'Data',
        align: 'center',
        sortable: true,
        value: '_date'
      },
      {
        text: 'Tipo',
        align: 'start',
        sortable: true,
        value: '_type._description'
      },
      {
        text: 'Valor',
        align: 'start',
        sortable: true,
        value: '_value'
      },
    ]
  }),
  computed: {
    total() {
      return numberToCurrency(this.sellerData.total / 100)
    }
  },
  methods: {
    formatValue(valueCents, transactionNature) {
      if (valueCents) {
        let total = transactionNature === 'cash-out' ? valueCents * -1 : valueCents
        return numberToCurrency(total / 100)
      }

      return ''
    },
    formatDate(date) {
      if (date) {
        return dayjs(date).format('DD/MM/YYYY')
      }

      return ''
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
      <v-data-table
          :headers="tableHeaders"
          :items="sellerData.transactions"
      >
        <template v-slot:item._date="{ item }">
          {{ formatDate(item._date) }}
        </template>

        <template v-slot:item._value="{ item }">
          <v-chip
              dark
              :color="item._type._nature === 'cash-out' ? 'error' : 'success'"
          >
            {{ formatValue(item._value, item._type._nature) }}
          </v-chip>
        </template>
      </v-data-table>
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