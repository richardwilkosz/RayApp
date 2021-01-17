<template>
  <v-dialog
    v-model="dialogOpen"
    @click:outside="closeDialog()"
    max-width="500"
    overlay-opacity="0.75"
  >
    <v-card>
      <v-img
        :src="imagePath"
      ></v-img>
      <v-card-title class="pb-0">
        {{ movie.title ? movie.title : "" }}
        <span class="body-2 text--secondary ml-5 mt-1 d-none d-sm-flex">
          {{ movie.release_date ? movie.release_date.substring(0, 4) : "" }}, {{ movie.runtime ? movie.runtime : "" }}m
        </span>
      </v-card-title>
      <v-card-text>
        <p class="d-sm-none">{{ movie.release_date ? movie.release_date.substring(0, 4) : "" }}, {{ movie.runtime ? movie.runtime : "" }}m</p>
        <!-- <p class="mt-sm-4">dir. Hayao Miyazaki</p> -->
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