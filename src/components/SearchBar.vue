<template>
  <v-text-field
    solo
    flat
    dense
    clearable
    placeholder="Search movies"
    prepend-inner-icon="mdi-magnify"
    class="mt-6"
    v-model="input"
    @keyup="updateSearch(input)"
    @click:clear="clearSearch"
  ></v-text-field>
</template>

<script>
import _ from "lodash";

export default {
  data: () => ({
    input: "",
  }),
  methods: {
    updateSearch: _.debounce(function(input) {
        if (input.length > 2) {
          this.$emit("update-search", input);
        } else {
          this.$emit("update-search", "*");
        }
    }, 500),
    clearSearch: function() {
      this.input = "";
      this.$emit("update-search", "*");
    }
  },
};
</script>