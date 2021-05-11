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
              <v-card-title>Hello world</v-card-title>
              <v-card-text
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                quis ligula tellus. Maecenas rhoncus, massa lobortis pharetra
                condimentum, nisi neque imperdiet nunc, ut faucibus nulla enim
                in sapien. Maecenas ac tempor nunc. Proin diam massa, dictum
                sagittis gravida sit amet, auctor sed turpis. Nam mollis, diam
                sit amet imperdiet pharetra, enim orci convallis libero, eget
                feugiat ex purus non sapien. Pellentesque tempor, arcu ac
                lobortis congue, enim tellus convallis justo, aliquet gravida
                felis diam eget purus. Vivamus sed pulvinar mi. Sed pellentesque
                orci sit amet erat lobortis suscipit. Mauris mi mi, efficitur
                nec cursus at, finibus eu sem. Nulla egestas mattis ante, sit
                amet sollicitudin libero vestibulum nec. Praesent id sapien id
                urna auctor vestibulum. Ut posuere arcu volutpat libero lacinia,
                ac ornare ipsum euismod. Etiam malesuada tincidunt leo, id
                fringilla elit mollis sed. Vivamus dignissim sed libero id
                suscipit. Maecenas condimentum erat sed hendrerit laoreet.
                Curabitur finibus velit ac lectus pulvinar, sed fermentum felis
                consequat. In ligula est, varius ut fringilla blandit,
                vestibulum et est. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas.
                Curabitur dapibus imperdiet felis. Vestibulum pellentesque
                convallis scelerisque. Aliquam erat volutpat. Integer ultrices
                leo at ornare varius. Morbi et mi eu ligula dapibus rutrum eget
                non neque. Integer feugiat, lacus id pulvinar dignissim, dui
                risus malesuada diam, et hendrerit augue erat eget mi. Duis
                dignissim lacus lacus, ac viverra dolor rutrum at. Ut feugiat
                interdum metus ut dictum. Vestibulum et risus molestie,
                efficitur mi vitae, porttitor dolor. Cras lorem libero, suscipit
                vel commodo sit amet, tincidunt eu eros. Aenean nec leo orci.
                Morbi sed nibh luctus, vehicula ex nec, blandit erat. Interdum
                et malesuada fames ac ante ipsum primis in faucibus. Etiam at
                posuere enim. Donec quis risus ac urna venenatis ornare et nec
                nisl. Nunc varius lobortis magna, in volutpat neque ultricies
                sit amet. Cras facilisis dui vitae risus laoreet blandit. Donec
                nec mi odio. Phasellus vitae ligula quis tortor semper aliquet
                vel quis dolor. In hac habitasse platea dictumst. Sed luctus
                arcu in tincidunt laoreet. Suspendisse potenti. Curabitur eget
                ipsum sit amet leo pharetra convallis. Nunc ullamcorper
                efficitur sem tempor rutrum. Donec ut velit non nibh auctor
                rutrum dapibus in lorem. Suspendisse potenti. Vestibulum ac mi
                ac justo rhoncus sagittis eget id nunc. Phasellus eget libero
                purus. Quisque ut ante eu ex laoreet faucibus. Suspendisse
                imperdiet quis metus at tincidunt. Maecenas cursus erat et orci
                interdum molestie. Curabitur molestie velit non mi pretium, ac
                fringilla diam feugiat. Donec libero nibh, ultrices a volutpat
                a, gravida nec ipsum. Donec efficitur convallis sapien non
                porttitor. Nam placerat tristique dapibus. Curabitur et nibh
                consectetur nisl tempor bibendum. Nulla nec molestie quam, et
                sodales orci. Morbi ullamcorper neque ac quam lacinia pretium.
                Proin velit ipsum, efficitur non nulla eget, sodales dignissim
                turpis. Aliquam erat volutpat. Nam ullamcorper eu ligula sed
                scelerisque. Aenean mattis risus nec porta finibus. Suspendisse
                vel imperdiet magna, sollicitudin iaculis magna. Nulla
                vestibulum tincidunt neque sed ullamcorper. Curabitur facilisis
                dui a turpis pharetra euismod. Proin est mauris, venenatis nec
                erat ut, eleifend euismod enim. Sed tristique sit amet dui et
                placerat. Fusce ac imperdiet lorem. Vivamus quis sapien eu urna
                consequat finibus a non dui. Morbi ultrices ullamcorper
                malesuada.
              </v-card-text>
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
// Override Vuetify's prevention of background images
#ResumeApp {
  background: url("../../assets/resume-background.jpg") no-repeat center center
    fixed !important;
  background-size: cover !important;
}

.v-card {
  margin-bottom: 12px;
}

.v-card__title {
  display: block !important;
}
</style>