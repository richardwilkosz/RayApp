<template>
  <v-combobox
    solo
    flat
    dense
    clearable
    id="searchBar"
    class="mt-6"
    placeholder="Search movies"
    append-icon=""
    :search-input.sync="searchInput"
    :items="suggestedMovieTitles"
    @keydown.enter="endSearch()"
    @click:clear="clearSearch()"
    @update:search-input="updateSearch()"
  >
    <!-- <template v-slot:append-outer>
      <v-btn
        depressed
        height="38"
        min-width="38"
        width="46"
        color="grey darken-3"
        @click="endSearch()"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </template> -->
    <template v-slot:prepend-item>
      <v-subheader>SUGGESTED SEARCHES</v-subheader>
    </template>
  </v-combobox>
</template>

<script>
import _ from "lodash";

export default {
  data: () => ({
    // input: "",
    searchInput: "",
    suggestedMovieTitles: new Array(),
  }),

  props: {
    ownedMovieTitles: Array,
  },

  methods: {
    updateSearch: function() {
      // Only show suggestions when there's actual input
      this.suggestedMovieTitles = this.searchInput ? this.ownedMovieTitles : new Array();
      this.emitSearch();
    },

    emitSearch: _.debounce(function () {
      this.$emit("update-search", this.searchInput ? this.searchInput : "*");
    }, 750),

    // Workaround since comboboxes don't close on enter
    endSearch: function () {
      this.$children[0].blur();
    },

    clearSearch: function () {
      this.$emit("update-search", "*");
    },
  },
};
</script>

<style lang="scss">
#searchBar ~ .v-input__append-inner .v-input__icon--append .v-icon {
  transform: none;
}

.v-input__append-outer {
  margin: 0 !important;
}
</style>