<template>
  <div id="ResumeApp" class="AppWithFooter">
    <div class="d-sm-none">
      <AppBar></AppBar>
    </div>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" sm="auto">
            <div class="StickyColContent pt-3">
              <ContactMe></ContactMe>
            </div>
          </v-col>
          <v-col>
            <v-card>
              <v-row>
                <v-col cols="12" lg="6">
                  <v-card-title class="title-font">
                    SUMMARY
                  </v-card-title>
                  <v-card-text>
                    Software Engineer with over 3 years of experience writing
                    production-level code. Specializes in user-centered front
                    ends, but delivers clean, reusable code throughout the full
                    stack. In the past year, has demonstrated leadership and
                    communication skills by serving as team Scrum Master and
                    mentoring 5 interns.
                  </v-card-text>
                  <v-card-title class="title-font">
                    WORK EXPERIENCE
                  </v-card-title>
                  <v-card-text>
                  </v-card-text>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-card-title class="title-font">
                    SAMPLE PROJECT
                  </v-card-title>
                  <v-card-text>
                    Check out <strong>Ray</strong>, my database of movies I own on Blu-ray! It features Vue.js, REST API consumption, and responsive design: <router-link to="/ray">richardwilkosz.com/ray</router-link>
                  </v-card-text>
                  <v-card-title class="title-font">
                    TECHNICAL SKILLS
                  </v-card-title>
                  <v-card-text>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import AppBar from "./AppBar";
import ContactMe from "./ContactMe";

export default {
  components: {
    AppBar,
    ContactMe,
  },

  created: function () {
    //this.$vuetify.theme.dark = true;
  },
};
</script>

<style lang="scss">
// Custom font(s)
@import url("https://family=Roboto:ital,wght@0,400;0,700;1,400;1,700&fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,800;1,800&display=swap");
$body-font-family: "Roboto";
$title-font: "Montserrat ExtraBold";
#ResumeApp {
  font-family: $body-font-family, sans-serif !important;
  .title {
    // To pin point specific classes of some components
    font-family: $body-font-family, sans-serif !important;
  }
  .title-font {
    font-family: $title-font, sans-serif !important;
  }
}

// Override Vuetify's prevention of background images
#ResumeApp {
  background: LightGray url("../../assets/resume-texture.jpg") repeat !important;
}

.v-card {
  margin-bottom: 12px;
}

.v-card__title {
  display: block !important;
}

.v-card__text {
  font-size: 1rem !important;
  letter-spacing: 0.03125em !important;
  line-height: 1.5rem !important;
}
</style>