<!--
<template>
  <div class="text-center">
    <v-menu bottom offset-y v-bind:close-on-content-click="false">
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on">
          <v-icon left class="d-none d-md-flex">mdi-filter</v-icon>
          Filter Genres
        </v-btn>
      </template>
      <v-sheet dark class="px-2">
        <v-chip-group
          v-model="genresSelected"
          active-class="primary--text"
          @change="selectGenre()"
          multiple
          column
        >
          <v-chip v-for="genre in genres" :key="genre.id" filter>
            {{ genre.name }}
          </v-chip>
        </v-chip-group>
      </v-sheet>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: {
    genres: Array,
  },

  data: () => ({
    allGenreIndex: 0,
    allGenreName: "Include All Genres",
    genresSelected: [0],
  }),

  methods: {
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
-->