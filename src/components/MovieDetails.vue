<template>
  <v-dialog v-model="dialogOpen" @click:outside="closeDialog()" max-width="600" overlay-opacity="0.75">
    <v-card>
      <v-img
        src="https://www.themoviedb.org/t/p/w1000_and_h450_multi_faces/vwBa7djy1oxfxUjc7YtVgGNsjrT.jpg"
      ></v-img>
      <v-card-title class="pb-0">Howl's Moving Castle<span class="body-2 text--secondary ml-5 mt-1 d-none d-sm-flex">2004, 1h 59m</span></v-card-title>

      <v-card-text>
        <!-- <v-row dense  class="text-center">
          <v-col cols="6" sm="4">
            <v-icon small>mdi-calendar</v-icon>
            <span class="pl-2">2004</span>
          </v-col>
          <v-col cols="6" sm="4">
            <v-icon small>mdi-clock</v-icon>
            <span class="pl-2">1h 59m</span>
          </v-col>
            <v-col cols="12" sm="4">
              <v-icon small>mdi-movie</v-icon>
            <span class="pl-2">dir. Hayao Miyazaki</span>
          </v-col>
        </v-row> -->
        <p class="d-sm-none">
          2004, 1h 59m
        </p>
        <p class="mt-sm-4">
          dir. Hayao Miyazaki
        </p>
        <div>
          When Sophie, a shy young woman, is cursed with an old body by a
          spiteful witch, her only chance of breaking the spell lies with a
          self-indulgent yet insecure young wizard and his companions in his
          legged, walking castle.
        </div>
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
    dialogOpen: Boolean,
  },

  methods: {
    closeDialog: function () {
      this.$emit("close-dialog");
    },
  },
};
</script>

<style>
.v-card__title, .v-card__title span {
  word-break: normal !important;
  line-height: normal !important;
}
</style>