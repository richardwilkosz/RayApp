<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default { 
  name: "RichardResume",
}
</script>

<style lang="scss">

// Custom font(s)
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap");
$body-font-family: "Open Sans";
$title-font: "Open Sans";
.v-application {
  font-family: $body-font-family, sans-serif !important;
  .title {
    // To pin point specific classes of some components
    font-family: $title-font, sans-serif !important;
  }
}

// Add to div inside v-col you want to be sticky
// Note: Make sure v-col element is "display: block"
.StickyColContent {
  position: sticky;
  top: 0;
  padding-top: 65px; // Prevent app bar overlap
}

// Makes footer spacing compatible with app-router
.AppWithFooter {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

// Used for mobile browsers' scroll bouncing
html {
  background-color: #272727;
}
</style>