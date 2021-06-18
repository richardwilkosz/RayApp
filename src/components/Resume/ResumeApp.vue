<template>
  <div id="ResumeApp" class="AppWithFooter">
    <div class="d-sm-none">
      <AppBar></AppBar>
    </div>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="6" class="mx-0 mt-0 px-0 pt-0">
            <v-img
              v-if="viewportIsXl"
              src="../../assets/resume-portrait-wide.jpg"
            ></v-img>
            <v-img v-else src="../../assets/resume-portrait.jpg"></v-img>
          </v-col>
          <v-col cols="12" sm="6" class="my-auto">
            <div class="mx-auto" style="max-width: 500px">
              <h1 class="title-font mb-3">Richard Wilkosz</h1>
              <p class="text-left">
                <strong
                  >Software Engineer with {{ yearsOfExperience }}+ years of
                  experience</strong
                >
                writing production-level code. Specializes in user-centered
                front ends, but delivers clean, reusable code throughout the
                full stack. In the past year, has demonstrated leadership and
                communication skills by serving as team Scrum Master and
                mentoring 5 interns.
              </p>
              <v-btn
              large
                color="primary"
                rounded
                href="/Resume_Richard_Wilkosz.pdf"
                target="_blank"
              >
                GET RESUME
              </v-btn>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <template v-if="viewportIsXs">
            <v-col cols="12" sm="6" class="mx-0 mt-0 px-0 pt-0">
              <v-img
                v-if="viewportIsXl"
                src="../../assets/resume-sample-wide.jpg"
              ></v-img>
              <v-img v-else src="../../assets/resume-sample.jpg"></v-img>
            </v-col>
          </template>
          <v-col cols="12" sm="6" class="my-auto">
            <div class="mx-auto" style="max-width: 500px">
              <h1 class="title-font mb-3">Sample Project</h1>
              <p class="text-left">
                Check out <strong>Ray</strong>, my database of movies I own on
                Blu-ray! It features Vue.js, REST API consumption, and
                responsive design:
                <router-link to="/ray">richardwilkosz.com/ray</router-link>
              </p>
            </div>
          </v-col>
          <template v-if="!viewportIsXs">
            <v-col cols="12" sm="6" class="mx-0 mt-0 px-0 pt-0">
              <v-img
                v-if="viewportIsXl"
                src="../../assets/resume-sample-wide.jpg"
              ></v-img>
              <v-img v-else src="../../assets/resume-sample.jpg"></v-img>
            </v-col>
          </template>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" class="mx-0 mt-0 px-0 pt-0 pb-0">
            <v-img
              v-if="viewportIsXl"
              src="../../assets/resume-contact-wide.jpg"
            ></v-img>
            <v-img v-else src="../../assets/resume-contact.jpg"></v-img>
          </v-col>
          <v-col cols="12" sm="6" class="my-auto">
            <div class="mx-auto" style="max-width: 500px">
              <h1 class="title-font mb-3">Contact Me</h1>
              <p class="text-left">
                <strong
                  >Software Engineer with {{ yearsOfExperience }}+ years of
                  experience</strong
                >
                writing production-level code. Specializes in user-centered
                front ends, but delivers clean, reusable code throughout the
                full stack. In the past year, has demonstrated leadership and
                communication skills by serving as team Scrum Master and
                mentoring 5 interns.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import AppBar from "./AppBar";

export default {
  components: {
    AppBar,
  },

  computed: {
    yearsOfExperience: function () {
      let startDate = new Date(2018, 4, 1);
      return Math.floor((new Date() - startDate) / (1000 * 3600 * 24 * 365));
    },
    viewportIsXs: function () {
      return this.$vuetify.breakpoint.name === "xs";
    },
    viewportIsXl: function () {
      return this.$vuetify.breakpoint.name === "xl";
    },
  },

  methods: {
    getAvatarSize: function () {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 300;
        case "sm":
          return 200;
        // case "md":
        //   return 300;
        // case "lg":
        //   return 500;
        // case "xl":
        //   return 500;
        default:
          return 300;
      }
    },

    // viewportIsXs: function () {
    //   return this.$vuetify.breakpoint.name === "xs";
    // },

    // viewportIsXl: function () {
    //   return this.$vuetify.breakpoint.name === "xl";
    // },

    viewportIsDesktop: function () {
      let vw = this.$vuetify.breakpoint.name;
      return vw === "lg" || vw === "xl";
    },
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
// #ResumeApp {
//   background: LightGray url("../../assets/resume-texture.jpg") repeat !important;
// }

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

.windowHeight {
  height: 100vh !important;
}
</style>