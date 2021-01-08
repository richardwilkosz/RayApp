<template>
  <v-card>
    <v-img :src="src"></v-img>
    <v-card-text class="text-center py-2">
      <v-row dense>
        <v-col cols="12" sm="6" class="d-none d-sm-flex">
          <v-icon small>mdi-calendar</v-icon>
          <span class="pl-2">{{ releaseYear }}</span>
        </v-col>
        <v-col cols="12" xs="12" sm="6" class="text-sm-right">
          <v-icon small>mdi-clock</v-icon>
          <span class="pl-2">{{ runtime }}</span>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    src: String,
    releaseYear: String,
    runtime: String,
  },
};
</script>