<template>
  <v-app-bar app color="#43a047" dark shrink-on-scroll scroll-threshold="500" prominent ref="AppBar">
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
      ></v-img>
    </template>
    <v-avatar :size="appBarHeight - 8">
      <v-img src="../../assets/resume-portrait.png"></v-img>
    </v-avatar>
    <template v-slot:extension="{ }">
      Hello world
    </template>
    <!-- <template v-if="isExpanded">
    <v-avatar size="120px">
      <v-img src="../../assets/resume-portrait.png"></v-img>
    </v-avatar>
    <v-app-bar-title>Title</v-app-bar-title>
    </template>
    <template v-else>
    <v-avatar size="48px">
      <v-img src="../../assets/resume-portrait.png"></v-img>
    </v-avatar>
    <v-app-bar-title>Title</v-app-bar-title>
    </template> -->

    <!-- <v-spacer></v-spacer>
    <v-app-bar-title>Title</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn> -->
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    // isExpanded: true,
    appBarHeight: 0,
  }),

  mounted: function () {
    //this.$vuetify.theme.dark = true;
    //this.currentScroll = this.$children[0].scrollThreshold;

    console.log(this.$refs.AppBar);

    this.appBarHeight = this.$refs.AppBar.computedHeight;

    this.$watch(
      // "$refs.VAppBar.computedHeight",
      "$refs.AppBar.computedHeight",
      (newValue) => {
        // if (newValue === 0 || newValue === 1) {
          // this.isExpanded = newValue === 1;
          this.appBarHeight = newValue;
        // }
      }
    );
  },

  // computed: {
  //   currentThreshold() {
  //     console.log(this.)
  //   }
  // }
};
</script>