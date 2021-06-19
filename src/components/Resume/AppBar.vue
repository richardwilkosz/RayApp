<template>
  <div>
    <!-- <v-app-bar app color="#43a047" dark inverted-scroll ref="AppBar">
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
      <v-avatar :size="appBarHeight - 8" class="mr-3">
        <v-img src="../../assets/resume-portrait.png"></v-img>
      </v-avatar>
      <v-toolbar-title>Richard Wilkosz</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon><v-icon>mdi-email</v-icon></v-btn>
      <v-btn icon><v-icon>mdi-linkedin</v-icon></v-btn>
      <v-btn icon><v-icon>mdi-github-circle</v-icon></v-btn>
    </v-app-bar> -->
    <v-app-bar app color="primary" dark inverted-scroll ref="AppBar">
      <!-- <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
        ></v-img>
      </template> -->
      <v-avatar :size="appBarHeight - 16" class="mr-3">
        <v-img src="../../assets/resume-portrait.png"></v-img>
      </v-avatar>
      <v-toolbar-title class="title-font">RICHARD WILKOSZ</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn href="/Resume_Richard_Wilkosz.pdf" target="_blank">GET RESUME</v-btn>
        <!-- <v-list dense>
          <v-subheader>EMAIL ADDRESS</v-subheader>
          <v-list-item>
            <v-icon class="mr-4">mdi-email</v-icon>
            me at richardwilkosz dot com
          </v-list-item>
          <v-subheader>LINKS</v-subheader>
          <v-list-item>
            <v-row align="center" justify="space-around">
              <v-col v-for="(link, index) in links" :key="index" :cols="link.isPrimaryAction ? 12 : 6">
                  <v-btn rounded :depressed="link.isPrimaryAction" block :color="link.color" :outlined="!link.isPrimaryAction">
                    <v-icon left>{{ link.icon }}</v-icon>
                    {{ link.title }}
                  </v-btn>
              </v-col>
            </v-row>
          </v-list-item>
        </v-list> -->

      <!-- <template v-slot:extension="{ }">
      Hello world
    </template> -->
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
  </div>
</template>

<script>
export default {
  data: () => ({
    // isExpanded: true,
    appBarHeight: 0,
    links: [
      {
        icon: "mdi-linkedin-box",
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/richard-wilkosz-026b4715a/",
      },
      {
        icon: "mdi-github-box",
        title: "GitHub",
        href: "https://github.com/richardwilkosz",
      },
      // {
      //   icon: "mdi-code-tags",
      //   title: "Sample Project",
      //   href: "",
      // },
    ],
  }),

  mounted: function () {
    //this.$vuetify.theme.dark = true;
    //this.currentScroll = this.$children[0].scrollThreshold;

    //console.log(this.$refs.AppBar);

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