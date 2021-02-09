<template>
  <v-container fluid>
    <template v-if="isLoading">
      <div class="text-center">
        <v-progress-circular
          indeterminate
          color="primary"
          :size="50"
          class="mt-5"
        ></v-progress-circular>
      </div>
    </template>
    <template v-else>
      <!-- Owned Movie Results -->
      <template v-if="getOwnedMoviesCount() > 0">
        <v-row dense>
          <v-col cols="12" class="d-flex d-sm-none">
            <v-spacer />
            <SortMenu @update-sort="updateSort" />
            <FilterMenu
              :genres="genres"
              @update-filter="updateFilter"
              class="ml-3"
            />
            <v-spacer />
          </v-col>
          <v-col cols="12" class="py-0">
            <v-subheader>OWNED ({{ getOwnedMoviesCount() }})</v-subheader>
          </v-col>
          <v-col
            v-for="movie in ownedMovies"
            :key="movie.id"
            cols="6"
            sm="4"
            md="3"
            lg="2"
            @click.stop="openDialog(movie.id)"
          >
            <OwnedMovie
              :title="movie.title"
              :src="getPosterImage(movie)"
              :releaseYear="getReleaseYear(movie)"
              :runtime="getRuntimeInHours(movie)"
              v-ripple="{ class: 'primary--text' }"
            />
          </v-col>
        </v-row>
      </template>

      <!-- Unowned Movie Results -->
      <template v-if="getUnownedMoviesCount() > 0">
        <v-row dense class="my-1">
          <v-col cols="12" class="py-0">
            <v-subheader>NOT OWNED... YET</v-subheader>
          </v-col>
          <v-col
            v-for="movie in unownedMovies"
            :key="movie.id"
            cols="12"
            sm="6"
            md="4"
            lg="3"
            xl="2"
            class="pr-0 pb-0"
            @click.stop="openDialog(movie.id)"
          >
            <UnownedMovie
              :title="movie.title"
              :src="getPosterImage(movie)"
              class="pa-0"
              v-ripple="{ class: 'primary--text' }"
            />
          </v-col>
        </v-row>
      </template>

      <!-- No Results -->
      <template
        v-if="getOwnedMoviesCount() === 0 && getUnownedMoviesCount() === 0"
      >
        <v-container>
          <v-alert
            >No results found. Try searching or filtering differently.</v-alert
          >
        </v-container>
      </template>

      <MovieDetails
        :movie="openedMovie"
        :imagePath="openedMovieImagePath"
        :dialogOpen="dialogOpen"
        @close-dialog="dialogOpen = false"
      />
    </template>
  </v-container>
</template>

<script>
import axios from "axios";

import Constants from "../assets/Constants.js";
import OwnedMovie from "./OwnedMovie";
import UnownedMovie from "./UnownedMovie";
import MovieDetails from "./MovieDetails";
import SortMenu from "./SortMenu";
import FilterMenu from "./FilterMenu";

export default {
  components: {
    OwnedMovie,
    UnownedMovie,
    MovieDetails,
    SortMenu,
    FilterMenu,
  },

  props: {
    ownedMovies: Array,
    unownedMovies: Array,
    genres: Array,
    isLoading: Boolean,
  },

  data: () => ({
    dialogOpen: false,
    openedMovie: new Object(),
    openedMovieImagePath: "",
  }),

  methods: {
    updateSort: function (e) {
      this.$emit("update-sort", e);
    },
    updateFilter: function (e) {
      this.$emit("update-filter", e);
    },

    getPosterImage: function (movie) {
      return movie.poster_path ? Constants.IMAGE_QUERY + movie.poster_path : "";
    },
    getReleaseYear: function (movie) {
      return movie.release_date ? movie.release_date.substring(0, 4) : "";
    },
    getRuntimeInHours: function (movie) {
      return movie.runtime
        ? Math.floor(movie.runtime / 60) + "h " + (movie.runtime % 60) + "m"
        : "";
    },

    getOwnedMoviesCount: function () {
      return this.ownedMovies.length;
    },
    getUnownedMoviesCount: function () {
      return this.unownedMovies.length;
    },

    openDialog: function (id) {
      let detailsQuery = Constants.DETAILS_QUERY(id);

      axios.get(detailsQuery).then((response) => {
        this.openedMovie = response.data;

        if (this.openedMovie.backdrop_path) {
          this.openedMovieImagePath =
            Constants.BACKDROP_PATH + this.openedMovie.backdrop_path;
        } else {
          this.openedMovieImagePath = "";
        }

        this.dialogOpen = true;
      });
    },
  },
};
</script>