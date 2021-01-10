<template>
  <v-app dark>
    <AppBar />
    <v-main>
      <MovieList />
    </v-main>
  </v-app>
</template>

<script>
import MovieList from "./components/MovieList";
import AppBar from "./components/AppBar";

export default {
  name: "Ray",

  components: {
    MovieList,
    AppBar,
  },
};
</script>