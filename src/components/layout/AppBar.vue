<template>
  <v-app-bar
    flat
    app
    color="black"
    dark
    height="120"
  >
    <v-row>
      <v-col cols="6" class="pl-5">
        <v-img
          :src="require('../../assets/logo.png')"
          transition="scale-transition"
          max-width="200"
          contain
        />
      </v-col>
      <v-col cols="6" class="d-flex flex-column align-end">
        <span class="mr-2 text-md-h6">QUOTE REFERENCE</span>
        <span class="mr-2 text-md-h6">PSL-BCHI-1234567</span>
      </v-col>
    </v-row>

    <template v-slot:extension>
      <Steps/>
    </template>
  </v-app-bar>
</template>

<script>
import Steps from '../Steps'

export default {
  name: 'AppBar',
  components: {
    Steps,
  }
};
</script>

<style>
  .v-toolbar__extension {
    display: flex;
    justify-content: center;
    padding: 0px !important;
    height: 50px !important;
  }
</style>