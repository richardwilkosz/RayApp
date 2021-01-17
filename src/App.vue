<template>
  <v-app dark>
    <AppBar @update-results="updateResults" />
    <v-main>
      <MovieList />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";

export default {
  name: "Ray",

  data: () => ({
    searchResults: [],
  }),

  components: {
    AppBar,
    MovieList,
    Footer,
  },

  methods: {
    updateResults(e) {
      this.searchResults = e;
    }
  }
};
</script>

<style>
html {
  background-color: #272727;
}
</style>