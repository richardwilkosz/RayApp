<template>
  <v-list-item class="px-0">
    <!-- <slot v-for="movie in unownedMovies" class="d-flex"> -->
      <v-img :src="src" max-height="75" max-width="50"></v-img>{{ n }}
      <v-list-item-content>
        <v-list-item-title v-text="title" class="ml-3" />
      </v-list-item-content>
    <!-- </slot> -->
  </v-list-item>
</template>

<script>
export default {
  props: {
    title: String,
    src: String,
  },
};
</script>