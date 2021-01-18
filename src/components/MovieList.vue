<template>
  <v-container fluid>
    <!-- Owned Movie Results -->
    <v-row dense>
      <v-col cols="12" class="d-flex d-sm-none mb-1">
        <v-spacer />
        <SortMenu />
        <FilterMenu class="ml-3" />
        <v-spacer />
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
          :src="imageQuery + movie.poster_path"
          v-ripple="{ class: 'primary--text' }"
        />
      </v-col>
    </v-row>

    <!-- Unowned Movie Results -->
    <template v-if="showUnownedMovies">
      <v-divider class="mt-3" />
      <h3 class="font-weight-regular py-2">Movies I Don't Own (Yet)</h3>
      <v-row dense class="my-1">
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
            :src="imageQuery + movie.poster_path"
            class="pa-0"
            v-ripple="{ class: 'primary--text' }"
          />
        </v-col>
      </v-row>
    </template>

    <MovieDetails
      :movie="openedMovie"
      :imagePath="openedMovieImagePath"
      :dialogOpen="dialogOpen"
      @close-dialog="dialogOpen = false"
    />
  </v-container>
</template>

<script>
import IMAGE_QUERY from "../assets/constants.js";
import axios from "axios";

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
    showUnownedMovies: Boolean,
  },

  data: () => ({
    dialogOpen: false,
    openedMovie: new Object(),
    openedMovieImagePath: "",
    imageQuery: IMAGE_QUERY.IMAGE_QUERY,
  }),

  methods: {
    openDialog: function (id) {
      let apiKey = "c273df1bacfdd9e48630cddba6ef4d18";
      let detailsQuery =
        "https://api.themoviedb.org/3/movie/" + id + "?api_key=" + apiKey;

      axios.get(detailsQuery).then((response) => {
        this.openedMovie = response.data;

        if (this.openedMovie.backdrop_path) {
          this.openedMovieImagePath =
            "https://image.tmdb.org/t/p/w500" + this.openedMovie.backdrop_path;
        }
        else {
          this.openedMovieImagePath = "";
        }

        this.dialogOpen = true;
      });
    },
  },
};
</script>