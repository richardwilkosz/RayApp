<template>
  <v-combobox
    solo
    flat
    dense
    clearable
    full-width
    placeholder="Search movies"
    prepend-inner-icon="mdi-magnify"
    class="mt-6"
    v-model="input"
    :items="ownedMovieTitles"
    @change="updateSearch(input)"
    @click:prepend-inner="endSearch(input)"
    @click:append="endSearch(input)"
    @keydown.enter="endSearch(input)"
    @click:clear="clearSearch"
  ></v-combobox>
</template>

<script>
// import _ from "lodash";

export default {
  data: () => ({
    input: "",
  }),

  props: {
    ownedMovieTitles: Array,
  },

  methods: {
    updateSearch: function (input) {
      this.$emit("update-search", input ? input : "*");
    },

    // Commented out instead of deleted as an example if debouncing ends up used elsewhere
    // updateSearch: _.debounce(function (input) {
    //   this.$emit("update-search", input ? input : "*");
    // }, 500),

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