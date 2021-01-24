<template>
  <v-app dark>
    <AppBar @update-search="search" @menu-view-all="queryAllOwned" />
    <v-main>
      <MovieList :ownedMovies="ownedResults" :unownedMovies="unownedResults" />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import axios from "axios";
import Constants from "./assets/Constants.js";

import AppBar from "./components/AppBar";
import MovieList from "./components/MovieList";
import AppFooter from "./components/AppFooter";

export default {
  name: "Ray",

  data: () => ({
    input: "",
    sort: "Alphabetical",
    filter: [],

    ownedMovies: [],
    ownedResults: [],
    unownedResults: [],
  }),

  components: {
    AppBar,
    MovieList,
    AppFooter,
  },

  // Get list of owned movies to categorize between owned/unowned
  created() {
    let vm = this;

    axios.get(Constants.OWNED_LIST_QUERY).then((response) => {
      let ownedResults = response.data.items;
      let ownedDetailPromises = [];

      // Get extra details of each owned movie, e.g. runtime
      ownedResults.forEach(function (result) {
        ownedDetailPromises.push(vm.getOwnedDetails(result.id));
      });

      // Finalize list after API calls are complete
      Promise.all(ownedDetailPromises).then(function (results) {
        results.forEach(function (result) {
          vm.ownedMovies.push(result.data);
        });
        vm.queryAllOwned();
      });
    });
  },

  methods: {
    search(e) {
      // Prevent duplicate searches
      if (e !== this.input) {
        this.input = e;

        // Clear previous results
        this.ownedResults = new Array();
        this.unownedResults = new Array();

        if (e === "*") {
          this.queryAllOwned();
        } else {
          this.queryFromString(e);
        }
      }
    },

    getOwnedDetails(id) {
      return axios.get(Constants.DETAILS_QUERY(id));
    },

    queryAllOwned() {
      this.sortAndFilter(this.ownedMovies);
      this.ownedResults = this.ownedMovies;
    },

    queryFromString(query) {
      let vm = this;

      axios.get(Constants.SEARCH_QUERY + query).then((response) => {
        let allResults = response.data.results;
        vm.sortAndFilter(allResults);

        allResults.forEach(function (result) {
          let ownedMovieDetails = vm.getOwnedMovie(result.id);
          if (
            ownedMovieDetails &&
            !vm.ownedResults.includes(ownedMovieDetails)
          ) {
            vm.ownedResults.push(ownedMovieDetails);
          } else if (!vm.unownedResults.includes(result)) {
            vm.unownedResults.push(result);
          }
        });
      });
    },

    // Checks if movie is owned; if so, returns its full details
    getOwnedMovie(id) {
      let movie = null;
      this.ownedMovies.forEach(function (ownedMovie) {
        if (id === ownedMovie.id) {
          movie = ownedMovie;
        }
      });
      return movie;
    },

    // TODO: Implement fully
    sortAndFilter(movieArray) {
      if (this.sort === "Alphabetical") {
        movieArray.sort((a, b) =>
          a.title.toUpperCase() > b.title.toUpperCase()
            ? 1
            : b.title.toUpperCase() > a.title.toUpperCase()
            ? -1
            : 0
        );
      }
    },
  },
};
</script>

<style>
/* Used for mobile browsers' scroll bouncing */
html {
  background-color: #272727;
}
</style>