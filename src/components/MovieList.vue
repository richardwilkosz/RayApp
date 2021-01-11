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
        :key="movie.title"
        cols="6"
        sm="4"
        md="3"
        lg="2"
        @click.stop="dialogOpen = true"
      >
        <OwnedMovie
          :title="movie.title"
          :src="movie.src"
          :runtime="movie.runtime"
          :releaseYear="movie.releaseYear"
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
          :key="movie.title"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          xl="2"
          class="pr-0 pb-0"
          @click.stop="dialogOpen = true"
        >
          <UnownedMovie
            :title="movie.title"
            :src="movie.src"
            class="pa-0"
            v-ripple="{ class: 'primary--text' }"
          />
        </v-col>
      </v-row>
    </template>

    <MovieDetails :dialogOpen="dialogOpen" @close-dialog="dialogOpen = false" />
  </v-container>
</template>

<script>
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

  data: () => ({
    dialogOpen: false,
    showUnownedMovies: true,
    ownedMovies: [
      {
        title: "Portrait of a Lady on Fire",
        src:
          "https://www.themoviedb.org/t/p/w1280/3NTEMlG5mQdIAlKDl3AJG0rX29Z.jpg",
        runtime: "1h 59m",
        releaseYear: "2019",
      },
      {
        title: "Eternal Sunshine of the Spotless Mind",
        src:
          "https://www.themoviedb.org/t/p/w1280/6at9dM9tg1TTE5DDWWKzGDINQJj.jpg",
        runtime: "1h 48m",
        releaseYear: "2004",
      },
      {
        title: "Frances Ha",
        src:
          "https://www.themoviedb.org/t/p/w1280/jrq1NoKvsxWCcffVOjegiYwloFN.jpg",
        runtime: "1h 26m",
        releaseYear: "2012",
      },
      {
        title: "Spider-Man 3",
        src:
          "https://www.themoviedb.org/t/p/w1280/sqZKCRYGovZ8aN99VVJSdL8Ja9k.jpg",
        runtime: "2h 19m",
        releaseYear: "2007",
      },
      {
        title: "Manchester by the Sea",
        src:
          "https://www.themoviedb.org/t/p/w1280/e8daDzP0vFOnGyKmve95Yv0D0io.jpg",
        runtime: "2h 18m",
        releaseYear: "2016",
      },
      {
        title: "Hereditary",
        src:
          "https://www.themoviedb.org/t/p/w1280/lHV8HHlhwNup2VbpiACtlKzaGIQ.jpg",
        runtime: "2h 7m",
        releaseYear: "2018",
      },
      {
        title: "In the Mood for Love",
        src:
          "https://www.themoviedb.org/t/p/w1280/iYypPT4bhqXfq1b6EnmxvRt6b2Y.jpg",
        runtime: "1h 39m",
        releaseYear: "2000",
      },
    ],

    unownedMovies: [
      {
        title: "The Favourite",
        src:
          "https://www.themoviedb.org/t/p/w1280/cwBq0onfmeilU5xgqNNjJAMPfpw.jpg",
      },
      {
        title: "Thor: Ragnarok",
        src:
          "https://www.themoviedb.org/t/p/w1280/8hnNdUFlUkjPWxKDyiE4Kn8h7Q5.jpg",
      },
      {
        title: "Nightcrawler",
        src:
          "https://www.themoviedb.org/t/p/w1280/gYPIRu0jX2CGYdeO422cq3N78ju.jpg",
      },
    ],
  }),
};
</script>