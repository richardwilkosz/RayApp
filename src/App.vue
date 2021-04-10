<template>
  <v-app dark>
    <AppBar
      @update-search="search"
      @update-sort="sort"
      @update-filter="filter"
      @menu-view-all="queryAllOwned"
      :genres="genres"
      :ownedMovieTitles="getOwnedMovieTitles()"
    />
    <v-main>
      <MovieList
        :ownedMovies="ownedResults"
        :unownedMovies="unownedResults"
        :genres="genres"
        :isLoading="isLoading"
        :isSortingByYear="isSortingByYear"
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
    isSortingByYear: false,

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
      this.isSortingByYear = (sortBy === Constants.SORT_NEW || sortBy === Constants.SORT_OLD);

      switch (sortBy) {
        case Constants.SORT_ALPHA:
          this.sortAlphabetical([
            this.ownedResults,
            this.unownedResults,
            this.ownedMovies,
          ]);
          break;
        case Constants.SORT_SHORT:
          this.sortByRuntime(
            [this.ownedResults, this.unownedResults, this.ownedMovies],
            "desc"
          );
          break;
        case Constants.SORT_LONG:
          this.sortByRuntime(
            [this.ownedResults, this.unownedResults, this.ownedMovies],
            "asc"
          );
          break;
        case Constants.SORT_NEW:
          this.sortByReleaseYear(
            [this.ownedResults, this.unownedResults, this.ownedMovies],
            "asc"
          );
          break;
        case Constants.SORT_OLD:
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
          let titleA = a.title.replace("The ", "").toUpperCase();
          let titleB = b.title.replace("The ", "").toUpperCase();
          return titleA > titleB ? 1 : titleB > titleA ? -1 : 0;
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
        if (ownedMovie.title.toUpperCase().includes(query.toUpperCase())) {
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

    getOwnedMovieTitles() {
      let titles = new Array();

      this.ownedMovies.forEach(function (ownedMovie) {
        titles.push(ownedMovie.title);
      })

      return titles;
    },

    // TODO: Implement fully
    sortAndFilter() {
      this.sort();
    },
  },
};
</script>

<style lang="scss">
/* Custom font */
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap");
$body-font-family: "Open Sans";
$title-font: "Open Sans";
.v-application {
  font-family: $body-font-family, sans-serif !important;
  .title {
    // To pin point specific classes of some components
    font-family: $title-font, sans-serif !important;
  }
}

/* Used for mobile browsers' scroll bouncing */
html {
  background-color: #272727;
}
</style>