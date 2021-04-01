<template>
  <v-app dark>
    <AppBar
      @update-search="search"
      @update-sort="sort"
      @update-filter="filter"
      @menu-view-all="queryAllOwned"
      :genres="genres"
    />
    <v-main>
      <MovieList
        :ownedMovies="ownedResults"
        :unownedMovies="unownedResults"
        :genres="genres"
        :isLoading="isLoading"
        @update-sort="sort"
        @update-filter="filter"
      />
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
    filterOn: [],

    ownedMovies: [],
    ownedResults: [],
    unownedResults: [],

    genres: [],

    isLoading: true,
  }),

  components: {
    AppBar,
    MovieList,
    AppFooter,
  },

  created() {
    let vm = this;

    // Get list of owned movies
    axios.get(Constants.OWNED_LIST_QUERY).then((response) => {
      let ownedResults = response.data.items;
      let ownedDetailPromises = [];

      // Get extra details of each owned movie, e.g. runtime
      ownedResults.forEach(function (result) {
        ownedDetailPromises.push(vm.getOwnedDetails(result.id));
      });

      // Get list of genres
      axios.get(Constants.GENRES_QUERY).then((response) => {
        vm.genres = response.data.genres;
        vm.genres.unshift({
          id: 0,
          name: "Include All Genres",
        });
      });

      // Finalize list after API calls are complete
      Promise.all(ownedDetailPromises).then(function (results) {
        results.forEach(function (result) {
          vm.ownedMovies.push(result.data);
        });
        vm.queryAllOwned();
        vm.isLoading = false;
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

    sort(sortBy) {
      switch (sortBy) {
        case 0: // Alphabetical
          this.sortAlphabetical([
            this.ownedResults,
            this.unownedResults,
            this.ownedMovies,
          ]);
          break;
        case 1: // Shortest
          this.sortByRuntime(
            [this.ownedResults, this.unownedResults, this.ownedMovies],
            "desc"
          );
          break;
        case 2: // Longest
          this.sortByRuntime(
            [this.ownedResults, this.unownedResults, this.ownedMovies],
            "asc"
          );
          break;
        case 3: // Newest
          this.sortByReleaseYear(
            [this.ownedResults, this.unownedResults, this.ownedMovies],
            "asc"
          );
          break;
        case 4: // Oldest
          this.sortByReleaseYear(
            [this.ownedResults, this.unownedResults, this.ownedMovies],
            "desc"
          );
          break;
        default:
          this.sortAlphabetical([
            this.ownedResults,
            this.unownedResults,
            this.ownedMovies,
          ]);
      }
    },

    sortAlphabetical(movieArrays) {
      movieArrays.forEach(function (array) {
        array.sort(function (a, b) {
          a.title = a.title.replace("The ", "").toUpperCase();
          b.title = b.title.replace("The ", "").toUpperCase();
          return a.title > b.title ? 1 : b.title > a.title ? -1 : 0;
        });
      });
    },

    sortByRuntime(movieArrays, ascOrDesc) {
      let sortMethod;

      if (ascOrDesc === "asc") {
        sortMethod = function (arr) {
          arr.sort((a, b) => b.runtime - a.runtime);
        };
      } else {
        sortMethod = function (arr) {
          arr.sort((a, b) => a.runtime - b.runtime);
        };
      }

      movieArrays.forEach(function (array) {
        sortMethod(array);
      });
    },

    sortByReleaseYear(movieArrays, ascOrDesc) {
      let sortMethod;

      if (ascOrDesc === "asc") {
        sortMethod = function (arr) {
          arr.sort(
            (a, b) => new Date(b.release_date) - new Date(a.release_date)
          );
        };
      } else {
        sortMethod = function (arr) {
          arr.sort(
            (a, b) => new Date(a.release_date) - new Date(b.release_date)
          );
        };
      }

      movieArrays.forEach(function (array) {
        sortMethod(array);
      });
    },

    filter(e) {
      this.filterOn = e;
      console.log(this.filterOn);
    },

    getOwnedDetails(id) {
      return axios.get(Constants.DETAILS_QUERY(id));
    },

    queryAllOwned() {
      this.sortAndFilter();
      this.ownedResults = this.ownedMovies;
    },

    queryFromString(query) {
      let vm = this;
      vm.isLoading = true;

      // Query list of owned movies created at init
      vm.ownedMovies.forEach(function (ownedMovie) {
        if (ownedMovie.title.includes(query.toUpperCase())) {
          // TODO: Figure out why duplicates sometimes get added
          vm.ownedResults.push(ownedMovie);
        }
      });

      // Query API for unowned movies that match too
      axios.get(Constants.SEARCH_QUERY + query).then((response) => {
        let allResults = response.data.results;

        allResults.forEach(function (result) {
          let isOwned = false;

          vm.ownedMovies.forEach(function (ownedMovie) {
            if (ownedMovie.id === result.id) {
              isOwned = true;
            }
          });

          if (!isOwned) {
            vm.unownedResults.push(result);
          }
        });

        vm.sortAndFilter();
        vm.isLoading = false;
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
    sortAndFilter() {
      this.sort();
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