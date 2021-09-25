<template>
  <v-container>
    <v-row class="row-container mb-4" v-for="product in computedProducts" :key="product.id">
      <v-col cols="12" md="3" class="d-flex justify-center justify-md-start">
        <v-img
          :src="require('../assets/' + product.img)"
          transition="scale-transition"
          max-width="150"
          contain
          :alt="product.name"
        />
      </v-col>

      <v-col cols="12" md="3" class="text-center d-flex justify-center flex-column" v-if="!product.quoteDeclined">
        <span class="text-h3">
          £{{ product.newPrice.toFixed(2) }}
        </span>
        <span class="d-block text-h6 shieldOrange" v-if="product.isLowestPrice">
          Lowest Price
        </span>
        <div>
          <v-select
            v-model="product.selectedSubscription"
            :items="product.subscriptionOptions"
            item-text="duration"
            item-value="id"
            outlined
            dense
            hide-details
            single-line
            class="mt-4"
          ></v-select>
        </div>
      </v-col>

      <v-col cols="12" md="3" class="d-flex justify-space-around flex-column px-4" v-if="!product.quoteDeclined">
        <span class="d-block">Buildings accidental damage</span>
        <div class="d-flex justify-space-between align-center">
          <span class="text-h5 mr-2" v-if="!product.isBadApplied">+ £{{ product.buildingsAccidentalDamage }}</span>
          <span class="text-h5 mr-2" v-else>Included</span>
          <v-switch
            v-model="product.isBadApplied"
            color="juicyRed"
            hide-details
            style="margin-top: 0px !important"
            inset
          ></v-switch>
        </div>
        <span class="d-block mt-2">Contents accidental damage</span>
        <div class="d-flex justify-space-between align-center">
          <span class="mr-2 text-h5" v-if="!product.isCadApplied">+ £{{ product.contentsAccidentalDamage }}</span>
          <span class="text-h5 mr-2" v-else>Included</span>
          <v-switch
            v-model="product.isCadApplied"
            color="juicyRed"
            hide-details
            style="margin-top: 0px !important"
            inset
          ></v-switch>
        </div>
      </v-col>

      <v-col cols="12" md="3" class="d-flex justify-center align-center pl-md-7" v-if="!product.quoteDeclined"> 
        <v-btn
          elevation="2"
          color="juicyRed"
          x-large
          block
          class="pa-9"
        >
        <span class="btn-white">
          Apply
        </span>
        </v-btn>
      </v-col>

      <v-col cols="12" md="9" class="text-center d-md-flex flex-column align-start justify-center " v-if="product.quoteDeclined">
        <span class="d-block">
          Declined to quote
        </span>
        <span>
          !{{ product.declinedReason }}
        </span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Products',
  data: () => ({
    products : [
      {
        id: 1,
        name: 'LVE',
        originalPrice: 36.89,
        newPrice: 36.89,
        buildingsAccidentalDamage: 26.92,
        isBadApplied: false,
        contentsAccidentalDamage: 12.67,
        isCadApplied: false,
        selectedSubscription: { duration: 'Monthly', id: 'monthly' },
        subscriptionOptions: [
          { duration: 'Monthly', id: 'monthly' },
          { duration: 'Yearly', id: 'yearly' },
          { duration: '3 Months Deferred', id: '3monthdef' }
        ],
        isLowestPrice: true,
        img: 'lv.png',
        quoteDeclined: false,
        declinedReason: '' 
      },
      {
        id: 2,
        name: 'ukgeneral',
        originalPrice: 37.89,
        newPrice: 37.89,
        buildingsAccidentalDamage: 26.92,
        isBadApplied: false,
        contentsAccidentalDamage: 12.67,
        isCadApplied: false,
        selectedSubscription: { duration: 'Monthly', id: 'monthly' },
        subscriptionOptions: [
          { duration: 'Monthly', id: 'monthly' },
          { duration: 'Yearly', id: 'yearly' },
          { duration: '3 Months Deferred', id: '3monthdef' }
        ],
        isLowestPrice: false,
        img: 'ukgeneral.png',
        quoteDeclined: false,
        declinedReason: '' 
      },
      {
        id: 3,
        name: 'prestige',
        originalPrice: 49.61,
        newPrice: 49.61,
        buildingsAccidentalDamage: 26.92,
        isBadApplied: false,
        contentsAccidentalDamage: 12.67,
        isCadApplied: false,
        selectedSubscription: { duration: 'Monthly', id: 'monthly' },
        subscriptionOptions: [
          { duration: 'Monthly', id: 'monthly' },
          { duration: 'Yearly', id: 'yearly' },
          { duration: '3 Months Deferred', id: '3monthdef' }
        ],
        isLowestPrice: false,
        img: 'prestige.png',
        quoteDeclined: false,
        declinedReason: '' 
      },
      {
        id: 4,
        name: 'axa',
        originalPrice: 0,
        newPrice: 0,
        buildingsAccidentalDamage: 0,
        isBadApplied: false,
        contentsAccidentalDamage: 0,
        isCadApplied: false,
        selectedSubscription: { duration: 'Monthly', id: 'monthly' },
        subscriptionOptions: [
          { duration: 'Monthly', id: 'monthly' },
          { duration: 'Yearly', id: 'yearly' },
          { duration: '3 Months Deferred', id: '3monthdef' }
        ],
        isLowestPrice: false,
        img: 'axa.png',
        quoteDeclined: true,
        declinedReason: 'Property too close to a flood plain.' 
      },

    ]
  }),
  computed: {
    computedProducts () {
      this.products.forEach((product, index) => {
        this.products[index].newPrice = this.products[index].originalPrice
        if (product.isBadApplied) {
          this.products[index].newPrice += product.buildingsAccidentalDamage
        }

        if (product.isCadApplied) {
          this.products[index].newPrice += product.contentsAccidentalDamage
        }

        if (product.selectedSubscription == 'yearly') {
          this.products[index].newPrice = product.newPrice * 12
        }

        if (product.selectedSubscription == '3monthdef') {
          this.products[index].newPrice = product.newPrice * 3
        }
      })
      return this.products
    }
  }
};
</script>

<style scoped>
.products {
    border: 1px solid grey;
  }
.shieldOrange {
  color: #F18A22 !important;
}

.v-text-field__details {
  display: none;
}
</style>