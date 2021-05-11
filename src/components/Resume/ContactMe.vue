<template>
  <v-card width="275" class="mx-auto">
    <v-row>
      <v-col cols="12" class="text-center pb-0">
        <v-avatar size="100" class="ml-lg-4">
          <v-img src="../../assets/resume-portrait.png"></v-img>
        </v-avatar>
      </v-col>
      <v-col cols="12" class="py-0">
        <div class="text-center">
          <v-card-title>Richard Wilkosz</v-card-title>
          <v-card-subtitle class="pb-0">Software Engineer</v-card-subtitle>
        </div>
        <v-card-text>
          <p><strong>Email: </strong>me at richardwilkosz dot com</p>
          <div class="text-center">
            <v-btn
              v-for="link in iconLinks"
              :key="link.id"
              :href="link.href"
              target="_blank"
              color="primary"
              rounded
              :text="!link.isFilledIn"
              :block="link.isFilledIn"
            >
              <v-icon left>{{ link.icon }}</v-icon>
              {{ link.text }}
            </v-btn>
          </div>
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
        icon: "mdi-pdf-box",
        text: "Get Resume",
        href: "https://github.com/richardwilkosz",
        isFilledIn: true,
      },
      {
        id: 1,
        icon: "mdi-linkedin-box",
        text: "LinkedIn",
        href: "https://www.linkedin.com/in/richard-wilkosz-026b4715a/",
      },
      {
        id: 2,
        icon: "mdi-github-box",
        text: "GitHub",
        href: "https://github.com/richardwilkosz",
      },
    ],
  }),

  computed: {
    viewportIsXs: function () {
      return this.$vuetify.breakpoint.name === "xs";
    },
  },
};
</script>