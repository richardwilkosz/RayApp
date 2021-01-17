<template>
  <v-text-field
    solo
    flat
    dense
    placeholder="Search movies"
    prepend-inner-icon="mdi-magnify"
    class="mt-6"
    v-model="input"
    @keyup="getResult(input)"
  ></v-text-field>
</template>

<script>
import axios from "axios";

const API_KEY = "c273df1bacfdd9e48630cddba6ef4d18";
const SEARCH_QUERY =
  "https://api.themoviedb.org/3/search/movie?api_key=" + API_KEY + "&query=";

export default {
  data: () => ({
      query: "",
      results: "",
      input: "",
  }),
  methods: {
    getResult: function (input) {
      if (input.length > 3) {
        axios.get(SEARCH_QUERY + input).then((response) => {
          this.results = response.data.results;
        });
        //console.log(this.results);
        this.$emit('update-results', this.results);
      }
    },
  },
};
</script>