<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        v-for="card in cards"
        :key="card.title"
        cols="6"
        sm="4"
        md="3"
        lg="2"
        xl="1"
      >
        <MovieCard
          v-bind:title="card.title"
          v-bind:src="card.src"
          v-bind:runtime="card.runtime"
          v-bind:releaseYear="card.releaseYear"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MovieCard from "./MovieCard";

export default {
  components: {
    MovieCard,
  },

  data: () => ({
    cards: [
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
  }),
};
</script>