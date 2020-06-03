<template>
    <v-footer
       class="app-footer"
       absolute
       :height="75"
       app
    >
        <v-card
          flat
          tile
          width="100%"
          class="black lighten-1 text-center"
        >
          <v-card-text class="d-flex align-center justify-center">
             <SocialMediaButtons></SocialMediaButtons>
          </v-card-text>
        </v-card>
    </v-footer>
</template>



<style scoped lang="scss">
    .app-footer {
        background-color: $black !important;
    }

    .v-card {
        width: 100% !important;
    }

    .v-card__text {
        text-align: center;
    }

    @media screen and (max-width: 768px) {
         .app-footer {
            padding: 3px 8px;
        }

        .v-card__text {
            padding: 8px;
        }
    }
</style>

<script>
  import SocialMediaButtons from "./SocialMediaButtons";

  export default {
    name: 'AppFooter',
    components: { SocialMediaButtons },
    data: () => ({})
};
</script>