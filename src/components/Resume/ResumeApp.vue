<template>
  <div id="ResumeApp" v-resize="onResize">
    <AppBar :viewportSize="viewportSize"></AppBar>
    <v-container fluid class="py-0">
      <v-main class="teal">
        <v-row
          v-for="(s, index) in sections"
          :key="`section-${s.id}`"
          class="my-0"
          :class="index % 2 === 0 ? 'white' : 'flex-row-reverse teal lighten-4'"
        >
          <v-col cols="12" sm="6" class="pa-0">
            <v-img
              :src="require(`../../assets/${s.img}`)"
              class="fill-height"
            ></v-img>
          </v-col>
          <v-col cols="12" sm="6" class="my-auto px-10">
            <h1 class="title-font mt-3 mb-4">{{ s.title }}</h1>
            <p v-html="s.body"></p>
            <span v-for="b in s.buttons" :key="`btn-${b.id}`">
              <ButtonLink :data="b"></ButtonLink>
            </span>
          </v-col>
        </v-row>
      </v-main>
    </v-container>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppBar from "./AppBar";
import AppFooter from "./AppFooter";
import ButtonLink from "./ButtonLink";

export default {
  components: {
    AppBar,
    AppFooter,
    ButtonLink,
  },

  created() {
    document.title = "Richard Wilkosz's Resume"
    document.fav
    this.$vuetify.theme.dark = false;
  },

  data() {
    let startDate = new Date(2018, 4, 1);
    let yearsExperience = Math.floor(
      (new Date() - startDate) / (1000 * 3600 * 24 * 365)
    );

    return {
      viewportSize: "",
      sections: [
        {
          id: 0,
          title: "HI, I’M RICHARD.",
          img: "resume-portrait.jpg",
          body: `<strong>Software Engineer with ${yearsExperience}+ years of 
                experience</strong> writing production-level code. Specializes 
                in user-centered front ends, but delivers clean and reusable 
                full-stack code. Has demonstrated leadership and communication 
                skills by serving as a team Scrum Master and mentoring 7+ interns.`,
          buttons: [
            {
              id: 0,
              label: "GET RESUME",
              color: "primary",
              href: "/Resume_Richard_Wilkosz.pdf",
            },
          ],
        },
        {
          id: 1,
          title: "SAMPLE PROJECT",
          img: "resume-sample.jpg",
          body: `I decided to learn Vue.js the best way I know how: building something. 
                Check out <strong>Ray</strong>, a database of movies I own on Blu-ray! 
                It features REST API consumption and responsive design.`,
          buttons: [
            {
              id: 0,
              label: "OPEN RAY",
              color: "primary",
              href: "/ray",
              isRouterLink: true,
            },
          ],
        },
        {
          id: 2,
          title: "CONTACT ME",
          img: "resume-contact.jpg",
          body: "<strong>Email: </strong> richard.w.wilkosz at gmail.com<br><br>...Or find me on:",
          buttons: [
            {
              id: 0,
              label: "LINKEDIN",
              color: "primary",
              href: "https://www.linkedin.com/in/richard-wilkosz-026b4715a/",
              icon: "mdi-linkedin-box",
            },
            {
              id: 2,
              label: "GITHUB",
              color: "primary",
              href: "https://github.com/richardwilkosz",
              icon: "mdi-github-box",
            },
          ],
        },
      ],
    };
  },

  mounted() {
    this.onResize();
  },

  methods: {
    onResize() {
      this.viewportSize = this.$vuetify.breakpoint.name;
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
    line-height: 1;
  }
}
</style>