<template>
  <v-app dark>
    <AppBar />
    <v-main>
      <MovieList />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar";
import MovieList from "./components/MovieList";
import Footer from './components/Footer';

export default {
  name: "Ray",

  components: {
    AppBar,
    MovieList,
    Footer,
  },
};
</script>

<style>
  html {
    background-color: #272727;
  }
</style>