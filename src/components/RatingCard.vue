<template>
  <v-container class="pa-5">
    <v-row>
        <v-col cols="3" sm="2">
        <v-img
            :src="require('../assets/defaqto.png')"
            transition="scale-transition"
            width="200"
        />
        </v-col>
        <v-col cols="7" sm="4">
        <span class="text-h6 text-sm-h6 text-md-h5">Your home insurance quotes for Jen Pomfret</span>
        </v-col>
        <v-col cols="2" sm="6" class="d-flex text-right justify-end">
        <v-btn icon color="black" class="mr-2">
            <v-icon dense large>mdi-share-variant</v-icon>
        </v-btn>
        <a href="#" class="d-none d-sm-flex text-right mt-1 share-quote">
            Share quote results
        </a>
        </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
  .share-quote {
    text-decoration: none;
    color: #071F36;
    font-weight: bold;
    font-size: 1.1em;
  }
</style>