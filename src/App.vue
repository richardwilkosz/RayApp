<template>
  <v-app dark>
    <RayApp></RayApp>
  </v-app>
</template>

<script>
import RayApp from "./components/Ray/RayApp";

export default { 
  components: {
    RayApp,
  },
}
</script>

<style lang="scss">
#AppWithFooter {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>