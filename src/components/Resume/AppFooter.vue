<template>
  <v-footer class="teal darken-2 text-center py-5" dark>
    <v-row>
      <v-col cols="12">
        <v-img
          :src="require(`../../assets/logo-firebase.png`)"
          height="32"
          width="95"
          class="mx-auto"
        ></v-img>
      </v-col>
      <v-col cols="12">
        <strong>Photography Credits:</strong><br>
        Smartphone: Copper and Wild<br>
        Mailbox: Mikaela Wiedenhoff
      </v-col>
      <v-col cols="12">
        Web Application © {{ new Date().getFullYear() }} Richard Wilkosz
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  props: {
    viewportSize: String,
  },
};
</script>