<template>
  <div>
    <v-divider />
    <v-list-item-content v-if="header">
      <v-list-item-title>{{ header }}</v-list-item-title>
    </v-list-item-content>
    <v-list-item v-for="item in items" :key="item.text" link>
      <v-list-item-icon v-if="item.icon">
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
export default {
  props: {
    header: String,
    items: [],
  },
};
</script>