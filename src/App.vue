<template>
  <v-app dark>
    <AppBar @update-search="search" />
    <v-main>
      <MovieList
        :ownedMovies="ownedResults"
        :unownedMovies="unownedResults"
        :showUnownedMovies="unownedResults.length > 0"
      />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import axios from 'axios';
import Constants from './assets/Constants.js';

import AppBar from './components/AppBar';
import MovieList from './components/MovieList';
import AppFooter from './components/AppFooter';

export default {
  name: 'Ray',

  data: () => ({
    input: '',
    ownedIds: [],
    ownedMovies: [],
    ownedResults: [],
    unownedResults: [],
    showUnownedMovies: false,
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
      ownedResults.forEach(function (result) {
        vm.ownedMovies.push(result);
        vm.ownedIds.push(result.id);
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

        if (e === '*') {
          this.queryAllOwned();
          this.showUnownedMovies = false;
        }
        else {
          this.queryFromString(e);
        }
      }
    },

    queryAllOwned() {
      this.ownedResults = this.ownedMovies;
      return this.ownedMovies;
    },

    queryFromString(query) {
      let vm = this;

      axios.get(Constants.SEARCH_QUERY + query).then((response) => {
          let allResults = response.data.results;

          // TODO: Apply sorts/filters

          allResults.forEach(function (result) {
            if (vm.ownedIds.includes(result.id)) {
              vm.ownedResults.push(result);
            } else {
              vm.unownedResults.push(result);
            }
          });
        });

      if (vm.unownedMovies && vm.unownedMovies.length > 0) {
        vm.showUnownedMovies = true;
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