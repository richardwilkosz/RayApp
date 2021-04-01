<template>
  <v-dialog
    v-model="dialogOpen"
    @click:outside="closeDialog()"
    max-width="720"
    overlay-opacity="0.75"
  >
    <v-card>
      <v-card-title class="mb-2">
        {{ movie.title ? movie.title : "" }}
        <v-spacer></v-spacer>
        <v-icon class="text--primary" @click.stop="closeDialog()"
          >mdi-close</v-icon
        >
      </v-card-title>
      <v-card-subtitle>
        {{ getReleaseYear(movie) }}{{ getRuntimeInHours(movie) }}
      </v-card-subtitle>
      <!-- <v-btn top right absolute id="btn-close" class="px-0" @click.stop="closeDialog()">
        <v-icon class="text--primary">mdi-close</v-icon>
      </v-btn> -->

      <v-img v-if="imagePath" :src="imagePath"></v-img>
      <v-card-text class="mt-5">
        <v-chip v-for="genre in movie.genres" :key="genre.id" class="mr-2 mb-2">
          {{ genre.name }}
        </v-chip>
        <br />
        <div class="mt-3">{{ movie.overview ? movie.overview : "" }}</div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    movie: Object,
    dialogOpen: Boolean,
    imagePath: String,
  },

  methods: {
    closeDialog: function () {
      this.$emit("close-dialog");
    },

    // As long as $parent is referenced, MovieDetails must be a child of MovieList
    getReleaseYear: function (movie) {
      return this.$parent.getReleaseYear(movie);
    },
    getRuntimeInHours: function (movie) {
      let runtime = this.$parent.getRuntimeInHours(movie);
      return runtime ? ", " + runtime : "";
    },
  },
};
</script>

<style>
.v-card__title,
.v-card__title span {
  word-break: normal !important;
  line-height: normal !important;
}

#btn-close {
  margin: -1rem -1rem 0 0;
  z-index: 1;
}
</style>