<template>
  <v-text-field
    solo
    flat
    dense
    placeholder="Search movies"
    prepend-inner-icon="mdi-magnify"
    class="mt-6"
    v-model="input"
    @keyup="updateSearch(input)"
  ></v-text-field>
</template>

<script>
export default {
  data: () => ({
      input: "",
  }),
  methods: {
    updateSearch: function (input) {
      if (input.length > 3) {
        this.$emit('update-search', input);
      }
    },
  },
};
</script>