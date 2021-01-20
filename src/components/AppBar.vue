<template>
  <div>
    <v-app-bar app>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-spacer />
        <SearchBar @update-search="updateSearch" />
        <v-spacer />
        <div class="d-none d-sm-flex">
          <SortMenu />
          <FilterMenu class="ml-3" />
        </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary app>
      <v-list-item>
        <v-row dense>
          <v-col cols="auto">
            <v-list-item-title class="title pt-1"> Menu</v-list-item-title>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="auto">
            <v-icon @click.stop="drawer = !drawer" class="mt-1">
              mdi-close
            </v-icon>
          </v-col>
        </v-row>
      </v-list-item>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item v-for="item in navItems" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import SearchBar from './SearchBar';
import SortMenu from './SortMenu';
import FilterMenu from './FilterMenu';

export default {
  components: {
    SearchBar,
    SortMenu,
    FilterMenu,
  },

  data: () => ({
    drawer: false,
    group: null,
    navItems: [
      {
        icon: 'mdi-home',
        title: 'Home',
      },
      {
        icon: 'mdi-format-list-bulleted',
        title: 'View All Owned Movies',
      },
      {
        icon: 'mdi-help',
        title: 'Surprise Me',
      },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },

  methods: {
    updateSearch: function(e) {
      this.$emit('update-search', e)
    }
  }
};
</script>