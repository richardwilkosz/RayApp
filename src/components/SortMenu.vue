<template>
  <div class="text-center">
    <v-menu bottom offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn outlined color="primary" dark v-bind="attrs" v-on="on">
          Sort By
        </v-btn>
      </template>
      <v-list>
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
          mandatory
          @change="selectSort(selectedItem)"
        >
          <div v-for="(item, index) in sortItems" :key="item.index">
            <v-divider v-if="index > 0"></v-divider>
            <v-list-item v-for="child in item" :key="child.index">
              <v-list-item-icon
                :class="{ hidden: child.index !== selectedItem }"
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
export default {
  data: () => ({
    selectedItem: 0,
    sortItems: [
      [{ title: "Alphabetical", index: 0 }],
      [
        { title: "Shortest", index: 1 },
        { title: "Longest", index: 2 },
      ],
      [
        { title: "Newest", index: 3 },
        { title: "Oldest", index: 4 },
      ],
    ],
  }),

  methods: {
    selectSort: function (selectedItem) {
      console.log(selectedItem);
      this.$emit("update-sort", selectedItem);
    },
  },
};
</script>

<style>
.hidden {
  visibility: hidden;
}
</style>