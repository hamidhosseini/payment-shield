<template>
  <v-app color="grey">
    <AppBar/>
    <v-main>
      <RatingCard/>
      <Totals/>
      <Products/>
    </v-main>
  </v-app>
</template>

<script>
import Totals from './components/Totals'
import Products from './components/Products'
import AppBar from './components/layout/AppBar'
import RatingCard from './components/RatingCard'

export default {
  name: 'App',

  components: {
    Totals,
    Products,
    AppBar,
    RatingCard
  }
};
</script>

<style>
  @font-face {
    font-family: "lato-black";
    src: local("lato-black"),
    url(./fonts/Lato/Lato-Black.ttf) format("truetype");
  }

  @font-face {
    font-family: "lato-regular";
    src: local("lato-regular"),
    url(./fonts/Lato/Lato-Regular.ttf) format("truetype");
  }

  .container {
    max-width: 1100px;
    font-family: 'lato-regular';
  }

  .btn-white {
    color: white;
  }

  .row-container {
    border: 1px solid rgba(128, 128, 128, 0.404);
    margin: 5px;
    border-radius: 3px;
  }
</style>