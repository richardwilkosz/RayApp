<template>
  <div class="text-center">
    <v-menu bottom offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on">
          <v-icon left class="d-none d-md-flex">mdi-sort</v-icon>
          Sort By
          </v-btn>
      </template>
      <v-list>
        <v-list-item-group
          v-model="input"
          color="primary"
          mandatory
          @change="selectSort(input)"
        >
          <div v-for="(item, index) in sortItems" :key="item.index">
            <v-divider v-if="index > 0"></v-divider>
            <v-list-item v-for="child in item" :key="child.index">
              <v-list-item-icon
                :class="{ hidden: child.index !== input }"
                class="mr-4"
              >
                <v-icon>mdi-check</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ child.title }}</v-list-item-title>
            </v-list-item>
          </div>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import Constants from "../assets/Constants.js";

export default {
  data: () => ({
    input: 0,
    sortItems: [
      [{ title: "Alphabetical", index: Constants.FILTER_ALPHA }],
      [
        { title: "Shortest", index: Constants.FILTER_SHORT },
        { title: "Longest", index: Constants.FILTER_LONG },
      ],
      [
        { title: "Newest", index: Constants.FILTER_NEW },
        { title: "Oldest", index: Constants.FILTER_OLD },
      ],
    ],
  }),

  methods: {
    selectSort: function (input) {
      this.$emit("update-sort", input);
    },
  },
};
</script>

<style>
.hidden {
  visibility: hidden;
}
</style>