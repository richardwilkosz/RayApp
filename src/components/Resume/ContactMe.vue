<template>
  <v-card>
    <v-row>
      <v-col
        cols="auto"
        sm="auto"
        md="12"
        class="text-center pt-4 pr-0 pb-0 pl-7 pl-md-0"
      >
        <v-avatar :size="viewportIsXs ? '50px' : '100px'">
          <v-img src="../../assets/resume-portrait.png"></v-img>
        </v-avatar>
      </v-col>
      <v-col cols="auto" sm="" lg="12" class="pt-0 pt-lg-0 pb-0 pl-0 pl-md-3">
        <v-card-title>Richard Wilkosz</v-card-title>
        <v-card-subtitle class="pb-0">Software Engineer</v-card-subtitle>
      </v-col>
      <v-col cols="12" class="pt-0">
        <v-card-text>
          <v-btn
            icon
            v-for="link in iconLinks"
            :key="link.id"
            :href="link.href"
            target="_blank"
          >
            <v-icon>{{ link.icon }}</v-icon>
          </v-btn>
          <!-- <v-btn icon href="https://github.com/richardwilkosz" target="_blank"
            ><v-icon>mdi-github-circle</v-icon></v-btn
          > -->
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    iconLinks: [
      {
        id: 0,
        icon: "mdi-linkedin",
        href: "https://www.linkedin.com/in/richard-wilkosz-026b4715a/",
      },
      {
        id: 1,
        icon: "mdi-github-circle",
        href: "https://github.com/richardwilkosz",
      },
      // {
      //   id: 2,
      //   icon: "mdi-github-circle",
      //   href: "https://github.com/richardwilkosz",
      // },
    ],
  }),

  computed: {
    viewportIsXs: function () {
      return this.$vuetify.breakpoint.name === "xs";
    },
  },
};
</script>