<template>
    <v-app-bar app>
      <!-- TODO: Add Ray title or logo to put in corner for desktop viewports -->
      <v-img src="../assets/logo.png" max-height="30" max-width="30"></v-img>
      <v-toolbar-title class="ml-3">Ray</v-toolbar-title>
      <v-spacer />
      <SearchBar @update-search="updateSearch" />
      <v-spacer />
      <div class="d-none d-sm-flex">
        <SortMenu @update-sort="updateSort" />
        <FilterMenu :genres="genres" @update-filter="updateFilter" class="ml-3" />
      </div>
      <v-btn outlined color="primary" class="d-sm-none ml-3">
          <v-icon>mdi-tune</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
import SearchBar from "./SearchBar";
import SortMenu from "./SortMenu";
import FilterMenu from "./FilterMenu";

export default {
  components: {
    SearchBar,
    SortMenu,
    FilterMenu,
  },

  props: {
    genres: Array,
  },

  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },

  methods: {
    updateSearch: function (e) {
      this.$emit("update-search", e);
    },
    updateSort: function (e) {
      this.$emit("update-sort", e);
    },
    updateFilter: function (e) {
      this.$emit("update-filter", e);
    },
  },
};
</script>