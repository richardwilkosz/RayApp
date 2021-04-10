<template>
  <v-app-bar app>
    <AppLogo />
    <v-spacer />
    <SearchBar @update-search="updateSearch" :ownedMovieTitles="ownedMovieTitles" />
    <v-spacer />
    <div class="d-sm-none ml-2">
      <v-btn icon>
        <v-icon>mdi-tune</v-icon>
      </v-btn>
    </div>
    <div class="d-none d-sm-flex mr-3">
      <SortMenu @update-sort="updateSort" />
      <FilterMenu :genres="genres" @update-filter="updateFilter" />
    </div>
  </v-app-bar>
</template>

<script>
import AppLogo from "./AppLogo";
import SearchBar from "./SearchBar";
import SortMenu from "./SortMenu";
import FilterMenu from "./FilterMenu";

export default {
  components: {
    AppLogo,
    SearchBar,
    SortMenu,
    FilterMenu,
  },

  props: {
    genres: Array,
    ownedMovieTitles: Array,
  },

  data: () => ({
    isSearchingMobile: false,
  }),

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

    toggleMobileSearch: function () {
      this.isSearchingMobile = !this.isSearchingMobile;
    },
  },
};
</script>

<style>
.v-toolbar__content {
  padding-right: 0;
}
</style>