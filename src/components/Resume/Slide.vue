<template>
    <v-row class="fill-height" align="center" justify="center" style="overflow-y:auto;">
      <v-col cols="12" lg="6" class="pa-0">
        <v-img :src="require(`../../assets/${slideData.img}`)"></v-img>
      </v-col>
      <v-col cols="12" lg="6">
        <div class="mx-5">
          <h1>{{ slideData.title }}</h1>
          <p>{{ slideData.body }}</p>
          <v-btn
            v-for="b in slideData.buttons"
            :key="`btn-${b.id}`"
            :color="b.color"
            :href="b.href"
            target="_blank"
            rounded
            large
            class="mr-3"
          >
            {{ b.label }}
          </v-btn>
        </div>
      </v-col>
    </v-row>
</template>

<script>
export default {
  props: {
    slideData: Object,
  },
};
</script>