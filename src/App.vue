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
import OWNED_MOVIES from "./assets/ownedMovieList.ts";
import IMAGE_QUERY from './assets/constants.js';

import AppBar from "./components/AppBar";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";

export default {
  name: "Ray",

  data: () => ({
    searchResults: [],
    ownedResults: [],
    unownedResults: [],
    showUnownedMovies: false,
  }),

  components: {
    AppBar,
    MovieList,
    Footer,
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
            console.log(IMAGE_QUERY.IMAGE_QUERY + result.poster_path);
            vm.ownedResults.push(result);
          } else {
            //console.log("Unowned: " + result.title);
            vm.unownedResults.push(result);
          }
        });
      }

      if (this.unownedMovies && this.unownedMovies.length > 0) {
        this.showUnownedMovies = true;
      }

      //this.searchResults = e;
    },
  },
};
</script>

<style>
html {
  background-color: #272727;
}
</style>