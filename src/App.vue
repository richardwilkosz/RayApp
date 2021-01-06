<template>
  <v-app dark>
    <v-app-bar app>
      <v-toolbar-items>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-autocomplete
          solo
          flat
          placeholder="Search movies"
          prepend-inner-icon="mdi-magnify"
          class="pt-1"
        ></v-autocomplete>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary app>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
        >
          <v-list-item>
            <v-list-item-title>Homepage</v-list-item-title>
          </v-list-item>

          <v-divider></v-divider>

            <v-list-item-content>
            <v-list-item-title>Browse genres</v-list-item-title>
            </v-list-item-content>

          <v-list-item>
            <v-list-item-title>Romance</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Sci-Fi</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Comedy</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>