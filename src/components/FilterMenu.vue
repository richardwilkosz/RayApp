<template>
  <div class="text-center">
    <v-menu bottom offset-y v-bind:close-on-content-click="false">
      <template v-slot:activator="{ on, attrs }">
        <v-btn outlined color="primary" dark v-bind="attrs" v-on="on">
          Genres
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
          <v-chip v-for="(genre, index) in genres" :key="index" filter>
            {{ genre }}
          </v-chip>
        </v-chip-group>
      </v-sheet>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    allGenreIndex: 0,
    allGenreName: "Include All Genres",
    genresSelected: [0],
    genres: [
      "Include All Genres",
      "Action",
      "Adventure",
      "Animation",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "History",
      "Horror",
      "Music",
      "Mystery",
      "Romance",
      "Sci-Fi",
      "TV Movie",
      "Thriller",
      "War",
      "Western",
    ],
  }),
  methods: {
    selectGenre: function () {
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
        this.genresSelected.push(0);
      }
    },
  },
};
</script>