<template>
  <div id="ResumeApp" class="AppWithFooter">
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" md="3">
            <div class="StickyColContent pt-3">
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
                    <v-card-subtitle>Software Engineer</v-card-subtitle>
                  </v-col>
                  <v-col cols="12" class="pt-0">
                    <v-card-text
                      >Ships at a distance have every man's dream on
                      board.</v-card-text
                    >
                  </v-col>
                </v-row>
              </v-card>
            </div>
          </v-col>
          <v-col cols="12" md="9">
            <v-card class="mt-3">
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-row>
                    <v-col cols="auto">
                      <v-avatar size="125" tile>
                        <v-img src="../../assets/resume-portrait.png"></v-img>
                      </v-avatar>
                    </v-col>
                    <v-col>
                      <v-card-title>Hello world</v-card-title>
                      <v-card-subtitle>Hello</v-card-subtitle>
                      <v-card-text>Hey</v-card-text>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </v-card>
          </v-col>
          <!-- <v-btn color="pink" dark fab bottom right>
            <v-icon>mdi-plus</v-icon>
          </v-btn> -->
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  created: function () {
    //this.$vuetify.theme.dark = true;
  },

  computed: {
    viewportIsXs: function () {
      return this.$vuetify.breakpoint.name === "xs";
    }
  }
};
</script>

<style lang="scss">
// Override Vuetify's prevention of background images
#ResumeApp {
  background: url("../../assets/resume-background.jpg") no-repeat center center
    fixed !important;
  background-size: cover !important;
}
</style>