<template>
  <v-footer>
    <v-container>
      <v-row dense justify="center">
          <v-col v-for="item in techStack" :key="item.id" cols="auto" class="d-flex child-flex">
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn text dark v-bind="attrs" v-on="on">
                  <v-img
                    :src="require('../assets/' + item.imgSrc)"
                    height="32"
                    :width="item.width ? item.width : 32"
                    contain
                    v-bind="attrs"
                    v-on="on"
                  ></v-img>
                </v-btn>
              </template>
              <span class="text-center"
                >{{ item.role }}:<br />{{ item.tech }}</span
              >
            </v-tooltip>
          </v-col>
      </v-row>
      <v-row dense>
        <v-col class="text-center text--disabled" cols="12">
          <div>
            Manta ray icon made by
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik"
              >Freepik</a
            >
            from
            <a href="https://www.flaticon.com/" title="Flaticon"
              >www.flaticon.com</a
            >
          </div>
        </v-col>
        <v-col class="text-center text--disabled" cols="12">
          Web Application © {{ new Date().getFullYear() }} Richard Wilkosz
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    techStack: [
      {
        id: 0,
        imgSrc: "logo-vue.png",
        role: "Front End Framework",
        tech: "Vue.js",
      },
      {
        id: 1,
        imgSrc: "logo-vuetify.svg",
        role: "CSS Framework",
        tech: "Vuetify",
      },
      {
        id: 2,
        imgSrc: "logo-tmdb.svg",
        role: "Data Source API",
        tech: "The Movie Database",
      },
            {
        id: 3,
        imgSrc: "logo-firebase.svg",
        role: "Backend as a Service",
        tech: "Google Firebase",
        width: "64",
      },
    ],
  }),
};
</script>