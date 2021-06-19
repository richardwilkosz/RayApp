<template>
  <v-row class="fill-height" align="center" justify="center">
    <v-img :src="require(`../../assets/${slideData.img}`)"></v-img>
    <h1>{{ slideData.title }}</h1>
    <p>{{ slideData.body }}</p>
  </v-row>
</template>

<script>
export default {
  props: {
    slideData: Object,
  }
};
</script>