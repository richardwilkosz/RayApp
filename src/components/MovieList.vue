<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        v-for="movie in ownedMovies"
        :key="movie.title"
        cols="6"
        sm="4"
        md="3"
        lg="2"
        xl="1"
      >
        <OwnedMovie
          :title="movie.title"
          :src="movie.src"
          :runtime="movie.runtime"
          :releaseYear="movie.releaseYear"
        />
      </v-col>
    </v-row>
    <v-divider class="mt-3"></v-divider>
    <h3 class="font-weight-regular py-2">Movies I Don't Own (Yet)</h3>
    <v-row dense class="mt-1">
      <v-col
        v-for="movie in unownedMovies"
        :key="movie.title"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="2"
        class="pr-0 pb-0"
      >
        <UnownedMovie :title="movie.title" :src="movie.src" class="pa-0"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import OwnedMovie from "./OwnedMovie";
import UnownedMovie from "./UnownedMovie";

export default {
  components: {
    OwnedMovie,
    UnownedMovie,
  },

  data: () => ({
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
        title: "Howl's Moving Castle",
        src:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/TkTPELv4kC3u1lkloush8skOjE.jpg",
        runtime: "1h 59m",
        releaseYear: "2004",
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