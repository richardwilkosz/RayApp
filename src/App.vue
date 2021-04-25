<template>
  <v-app dark>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default { 
  name: "RichardResume",
}
</script>

<style lang="scss">
#AppWithFooter {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>