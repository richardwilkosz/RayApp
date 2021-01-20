<template>
  <v-dialog
    v-model="dialogOpen"
    @click:outside="closeDialog()"
    max-width="500"
    overlay-opacity="0.75"
  >
    <v-card>
      <v-img
        v-if="imagePath"
        :src="imagePath"
      ></v-img>
      <v-card-title class="pb-0">
        {{ movie.title ? movie.title : "" }}
        <span class="body-2 text--secondary ml-5 mt-1 d-none d-sm-flex">
          {{ getReleaseYear(movie) }}{{ getRuntimeInHours(movie) }}
        </span>
      </v-card-title>
      <v-card-text>
        <p class="d-sm-none">{{ getReleaseYear(movie) }}{{ getRuntimeInHours(movie) }}</p>
        <br>
        <div>{{ movie.overview ? movie.overview : "" }} </div>
      </v-card-text>
      <v-card-actions class="pt-0">
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click.stop="closeDialog()"> Close </v-btn>
      </v-card-actions>
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
    getReleaseYear: function(movie) {
      return movie.release_date ? movie.release_date.substring(0, 4) : "";
    },
    getRuntimeInHours: function(movie) {
      return movie.runtime ? ", " + Math.floor(movie.runtime / 60) + "h " + movie.runtime % 60 + "m" : "";
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
</style>