<template>
  <div>
    <v-app-bar app>
      <v-toolbar-items>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-autocomplete
          solo
          flat
          placeholder="Search movies"
          prepend-inner-icon="mdi-magnify"
          class="pt-1 pt-md-2"
        ></v-autocomplete>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary app>
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <v-list-item-content>
            <v-row dense>
              <v-col cols="auto">
                <v-list-item-title class="title"> Menu </v-list-item-title>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="auto">
                <v-icon class="mr-1" @click.stop="drawer = !drawer"
                  >mdi-close</v-icon
                >
              </v-col>
            </v-row>
          </v-list-item-content>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <NavSection header="Browse by runtime" :items="runtimeItems" />
          <NavSection header="Browse by genre" :items="genreItems" />
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import NavSection from "./NavSection";

export default {
  components: {
    NavSection,
  },

  data: () => ({
    drawer: false,
    group: null,
    runtimeItems: [
      { text: "Short", icon: "mdi-text-short" },
      { text: "Medium", icon: "mdi-note-text" },
      { text: "Long", icon: "mdi-format-align-left" },
    ],
    genreItems: [
      { text: "Comedy", icon: "" },
      { text: "Drama", icon: "" },
      { text: "Romance", icon: "" },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>