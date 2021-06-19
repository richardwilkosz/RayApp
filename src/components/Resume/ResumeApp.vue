<template>
  <div id="ResumeApp" class="AppWithFooter">
    <v-main>
      <v-card flat tile color="primary" dark class="mb-0">
        <v-window v-model="activeSlide">
          <v-window-item v-for="s in slides" :key="`card-${s.id}`">
            <v-card flat tile light style="height: calc(100vh - 52px)">
              <Slide :slideData="s"> </Slide>
            </v-card>
          </v-window-item>
        </v-window>

        <v-card-actions class="justify-space-between">
          <v-btn text @click="prev">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-item-group v-model="activeSlide" class="text-center" mandatory>
            <v-item
              v-for="s in slides"
              :key="`btn-${s.id}`"
              v-slot="{ active, toggle }"
            >
              <v-btn :input-value="active" text @click="toggle" class="mx-sm-2">
                <v-icon class="mr-md-2">{{ s.icon }}</v-icon>
                <span class="d-none d-md-flex">{{ s.label }}</span>
              </v-btn>
            </v-item>
          </v-item-group>
          <v-btn text @click="next">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-main>
  </div>
</template>

<script>
import Slide from "./Slide";

export default {
  components: {
    Slide,
  },

  data() {
    let startDate = new Date(2018, 4, 1);
    let yearsExperience = Math.floor(
      (new Date() - startDate) / (1000 * 3600 * 24 * 365)
    );

    return {
      activeSlide: 0,
      slides: [
        {
          id: 0,
          icon: "mdi-account",
          label: "ABOUT ME",

          img: "resume-portrait.jpg",
          title: "HI, I'M RICHARD.",
          body: `Welcome to my virtual resume! I'm a Software Engineer with 
                ${yearsExperience}+ years of experience writing production-
                level code. Specializes in user-centered front ends, but 
                delivers clean, reusable code throughout the full stack.
                In the past year, has demonstrated leadership and
                communication skills by serving as team Scrum Master and
                mentoring 5 interns.`,
        },
        {
          id: 1,
          icon: "mdi-wrench",
          label: "SAMPLE PROJECT",

          img: "../../assets/resume-sample.jpg",
          title: "SAMPLE PROJECT",
        },
        {
          id: 2,
          icon: "mdi-email",
          label: "CONTACT",

          img: "../../assets/resume-contact.jpg",
          title: "CONTACT",
        },
      ],
    };
  },

  methods: {
    next() {
      this.activeSlide =
        this.activeSlide + 1 === this.length ? 0 : this.activeSlide + 1;
    },
    prev() {
      this.activeSlide =
        this.activeSlide - 1 < 0 ? this.length - 1 : this.activeSlide - 1;
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