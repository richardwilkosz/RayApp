<template>
  <div>
    <v-subheader>SORT BY</v-subheader>
    <v-radio-group v-model="input" @change="selectSort(input)" class="mt-0">
      <v-radio
        v-for="(item) in sortItems"
        :key="item.index"
        :label="item.title"
        :value="item.index"
      ></v-radio>
    </v-radio-group>
    <!-- <v-list-item-group
      v-model="input"
      color="primary"
      mandatory
      @change="selectSort(input)"
    >
      <div v-for="(item, index) in sortItems" :key="item.index">
        <v-divider v-if="index > 0"></v-divider>
        <v-list-item v-for="child in item" :key="child.index">
          <v-list-item-icon
            :class="{ hidden: child.index !== input }"
            class="mr-4"
          >
            <v-icon>mdi-check</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ child.title }}</v-list-item-title>
        </v-list-item>
      </div>
    </v-list-item-group> -->
    <v-divider></v-divider>
    <v-subheader>FILTER GENRES</v-subheader>
    <v-chip-group
      v-model="genresSelected"
      active-class="primary--text"
      @change="selectGenre()"
      multiple
      column
    >
      <v-chip v-for="genre in genres" :key="genre.id" small filter>
        {{ genre.name }}
      </v-chip>
    </v-chip-group>
  </div>
</template>

<script>
import Constants from "../assets/Constants.js";

export default {
  props: {
    genres: Array,
  },

  data: () => ({
    allGenreIndex: 0,
    allGenreName: "Include All Genres",
    genresSelected: [0],

    input: 0,
    sortItems: [
      { title: "Alphabetical", index: Constants.FILTER_ALPHA },
      { title: "Shortest", index: Constants.FILTER_SHORT },
      { title: "Longest", index: Constants.FILTER_LONG },
      { title: "Newest", index: Constants.FILTER_NEW },
      { title: "Oldest", index: Constants.FILTER_OLD },
    ],
  }),

  methods: {
    selectSort: function (input) {
      this.$emit("update-sort", input);
    },

    selectGenre: function () {
      let vm = this;
      let filters = new Array();
      this.setIncludeAll();
      this.genresSelected.forEach(function (index) {
        filters.push(vm.genres[index].id);
      });
      vm.$emit("update-filter", filters);
    },

    setIncludeAll: function () {
      // Either "Include All" is selected, or some subset of genres
      let lastSelectedIndex = this.genresSelected[
        this.genresSelected.length - 1
      ];
      if (lastSelectedIndex === this.allGenreIndex) {
        this.genresSelected = this.genresSelected.filter(
          (index) => index === this.allGenreIndex
        );
      } else {
        this.genresSelected = this.genresSelected.filter(
          (index) => index !== this.allGenreIndex
        );
      }
      // In the case of no filters, default back to All
      if (!this.genresSelected.length) {
        this.genresSelected.push(this.allGenreIndex);
      }
    },
  },
};
</script>

<style>
.hidden {
  visibility: hidden;
}
</style>