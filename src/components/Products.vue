<template>
  <v-container>
    <v-row class="row-container mb-4" v-for="(product, index) in products" :key="product.id">
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
          £{{ product.price.toFixed(2) }}
        </span>
        <span class="d-block text-h6 shieldOrange" v-if="product.isLowestPrice">
          Lowest Price
        </span>
        <div>
          <v-select
            :items="product.subscriptionOptions"
            label="Monthly"
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
          <span class="text-h5 mr-2">+ £{{ product.buildingsAccidentalDamage }}</span>
          <v-switch
            v-model="product.isBadApplied"
            color="juicyRed"
            hide-details
            style="margin-top: 0px !important"
            inset
            @click="recalculateProductPrice(product, index, 'BAD')"
          ></v-switch>
        </div>
        <span class="d-block mt-2">Contents accidental damage</span>
        <div class="d-flex justify-space-between align-center">
          <span class="mr-2 text-h5">+ £{{ product.contentsAccidentalDamage }}</span>
          <v-switch
            v-model="product.isCadApplied"
            color="juicyRed"
            hide-details
            style="margin-top: 0px !important"
            inset
            @click="recalculateProductPrice(product, index, 'CAD')"
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
        price: 36.89,
        buildingsAccidentalDamage: 26.92,
        isBadApplied: false,
        contentsAccidentalDamage: 12.67,
        isCadApplied: false,
        subscriptionOptions: ['Monthly', 'Yearly', '3 Months Deferred'],
        isLowestPrice: true,
        img: 'lv.png',
        quoteDeclined: false,
        declinedReason: '' 
      },
      {
        id: 2,
        name: 'ukgeneral',
        price: 37.89,
        buildingsAccidentalDamage: 26.92,
        isBadApplied: false,
        contentsAccidentalDamage: 12.67,
        isCadApplied: false,
        subscriptionOptions: ['Monthly', 'Yearly', '3 Months Deferred'],
        isLowestPrice: false,
        img: 'ukgeneral.png',
        quoteDeclined: false,
        declinedReason: '' 
      },
      {
        id: 3,
        name: 'prestige',
        price: 49.61,
        buildingsAccidentalDamage: 26.92,
        isBadApplied: false,
        contentsAccidentalDamage: 12.67,
        isCadApplied: false,
        subscriptionOptions: ['Monthly', 'Yearly', '3 Months Deferred'],
        isLowestPrice: false,
        img: 'prestige.png',
        quoteDeclined: false,
        declinedReason: '' 
      },
      {
        id: 4,
        name: 'axa',
        price: 0,
        buildingsAccidentalDamage: 0,
        isBadApplied: false,
        contentsAccidentalDamage: 0,
        isCadApplied: false,
        subscriptionOptions: ['Monthly', 'Yearly', '3 Months Deferred'],
        isLowestPrice: false,
        img: 'axa.png',
        quoteDeclined: true,
        declinedReason: 'Property too close to a flood plain.' 
      },

    ]
  }),
  methods: {
    recalculateProductPrice (product, index, type) {
      if (product.isBadApplied && type === 'BAD') {
        this.products[index].price  += product.buildingsAccidentalDamage
      } else if (!product.isBadApplied&& type === 'BAD') {
        this.products[index].price  -= product.buildingsAccidentalDamage
      }
      
      if (product.isCadApplied && type === 'CAD') {
        this.products[index].price  += product.contentsAccidentalDamage
      } else if (!product.isCadApplied && type === 'CAD') {
        this.products[index].price  -= product.contentsAccidentalDamage
      }
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