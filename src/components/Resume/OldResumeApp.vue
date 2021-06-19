<template>
  <div id="ResumeApp" class="AppWithFooter">
    <v-app-bar app color="primary" dark inverted-scroll ref="AppBar">
        <!-- <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
        ></v-img>
      </template> -->
        <v-avatar class="mr-3">
          <v-img src="../../assets/resume-portrait.png"></v-img>
        </v-avatar>
        <v-toolbar-title class="title-font">RICHARD WILKOSZ</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn light href="/Resume_Richard_Wilkosz.pdf" target="_blank"
          >GET RESUME</v-btn
        >
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="6" class="mx-0 mt-0 px-0 pt-0">
            <v-img
              v-if="viewportSize === 'xl'"
              src="../../assets/resume-portrait-wide.jpg"
            ></v-img>
            <v-img v-else src="../../assets/resume-portrait.jpg"></v-img>
          </v-col>
          <v-col cols="12" sm="6" class="my-auto">
            <div class="mx-auto" style="max-width: 500px">
              <h1 class="title-font mb-3">HI, I’M RICHARD.</h1>
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
                x-large
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
          <template v-if="viewportSize === 'xs'">
            <v-col cols="12" sm="6" class="mx-0 mt-0 px-0 pt-0">
              <v-img
                v-if="viewportSize === 'xl'"
                src="../../assets/resume-sample-wide.jpg"
              ></v-img>
              <v-img v-else src="../../assets/resume-sample.jpg"></v-img>
            </v-col>
          </template>
          <v-col cols="12" sm="6" class="my-auto">
            <div class="mx-auto" style="max-width: 500px">
              <h1 class="title-font mb-3">SAMPLE PROJECT</h1>
              <p class="text-left">
                Check out <strong>Ray</strong>, my database of movies I own on
                Blu-ray! It features Vue.js, REST API consumption, and
                responsive design:
                <router-link to="/ray">richardwilkosz.com/ray</router-link>
              </p>
            </div>
          </v-col>
          <template v-if="viewportSize !== 'xs'">
            <v-col cols="12" sm="6" class="mx-0 mt-0 px-0 pt-0">
              <v-img
                v-if="viewportSize === 'xl'"
                src="../../assets/resume-sample-wide.jpg"
              ></v-img>
              <v-img v-else src="../../assets/resume-sample.jpg"></v-img>
            </v-col>
          </template>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" class="mx-0 mt-0 px-0 pt-0 pb-0">
            <v-img
              v-if="viewportSize === 'xl'"
              src="../../assets/resume-contact-wide.jpg"
            ></v-img>
            <v-img v-else src="../../assets/resume-contact.jpg"></v-img>
          </v-col>
          <v-col cols="12" sm="6" class="my-auto">
            <div class="mx-auto" style="max-width: 500px">
              <h1 class="title-font mb-3">CONTACT ME</h1>
              <p class="text-left">
                <strong>Email: </strong>richard.w.wilkosz at gmail.com<br />
                <strong>Github: </strong><a href=""></a><br />
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template> 

<script>
export default {
  components: {},

  data: () => ({
    viewportSize: "",
  }),

  computed: {
    yearsOfExperience: function () {
      let startDate = new Date(2018, 4, 1);
      return Math.floor((new Date() - startDate) / (1000 * 3600 * 24 * 365));
    },
  },

  mounted() {
    this.onResize();
  },

  methods: {
    onResize() {
      this.viewportSize = this.$vuetify.breakpoint.name;
    },

    viewportIsXs: function () {
      return this.$vuetify.breakpoint.name === "xs";
    },

    viewportIsXl: function () {
      return this.$vuetify.breakpoint.name === "xl";
    },

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

    // viewportIsXs(): function () {
    //   return this.$vuetify.breakpoint.name === "xs";
    // },

    // viewportIsXl(): function () {
    //   return this.$vuetify.breakpoint.name === "xl";
    // },

    viewportIsDesktop: function () {
      let vw = this.$vuetify.breakpoint.name;
      return vw === "lg" || vw === "xl";
    },
  },
};
</script>