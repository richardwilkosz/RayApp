<template>
  <v-app dark>
    <AppBar @update-results="updateResults" />
    <v-main>
      <MovieList
        :ownedMovies="ownedResults"
        :unownedMovies="unownedResults"
        :showUnownedMovies="unownedResults.length > 0"
      />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import axios from 'axios';
import OWNED_MOVIES from "./assets/ownedMovieList.ts";
import OWNED_LIST_QUERY from './assets/constants.js';

import AppBar from "./components/AppBar";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";

export default {
  name: "Ray",

  data: () => ({
    ownedIds: [],
    ownedMovies: [],
    ownedResults: [],
    unownedResults: [],
    showUnownedMovies: false,
  }),

  components: {
    AppBar,
    MovieList,
    Footer,
  },

  // Get list of owned movies to categorize between owned/unowned
  created() {
    let vm = this;
    axios.get(OWNED_LIST_QUERY.OWNED_LIST_QUERY).then((response) => {
      let ownedResults = response.data.items;
      ownedResults.forEach(function (result) {
        vm.ownedMovies.push(result);
        vm.ownedIds.push(result.id);
      });
    });
  },

  methods: {
    updateResults(e) {
      if (e) {
        // TODO: Apply sorts/filters

        this.ownedResults = new Array();
        this.unownedResults = new Array();
        let vm = this;

        e.forEach(function (result) {
          if (OWNED_MOVIES.OWNED_MOVIES.includes(result.id)) {
            vm.ownedResults.push(result);
          } else {
            vm.unownedResults.push(result);
          }
        });
      }

      if (this.unownedMovies && this.unownedMovies.length > 0) {
        this.showUnownedMovies = true;
      }
    },
  },
};
</script>

<style>
html {
  background-color: #272727;
}
</style>