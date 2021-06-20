<template>
  <div v-if="data.isRouterLink">
    <router-link :to="data.href" class="text-decoration-none">
      <v-btn :color="data.color" rounded large class="mr-3 mb-2">
        <v-icon dark class="mr-2">{{ data.icon }}</v-icon
        >{{ data.label }}
      </v-btn>
    </router-link>
  </div>
  <div v-else>
    <v-btn
      :color="data.color"
      :href="data.href"
      target="_blank"
      rounded
      large
      class="mr-3 mb-2"
    >
      <v-icon dark class="mr-2">{{ data.icon }}</v-icon
      >{{ data.label }}
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>