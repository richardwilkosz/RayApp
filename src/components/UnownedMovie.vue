<template>
  <v-col cols="12">
    <v-sheet>
      <v-row dense align="center">
        <v-col cols="auto" class="pa-0">
          <v-img :src="src" max-height="75" max-width="50"></v-img>
        </v-col>
        <v-col cols="auto" class="pa-0">
          <span v-text="title" class="ml-5" />
        </v-col>
      </v-row>
    </v-sheet>
    <v-divider class="mt-1"></v-divider>
  </v-col>
</template>

<script>
export default {
  props: {
    title: String,
    src: String,
  },
};
</script>