<template>
    <div class="buttons-container">
        <v-btn
        class="social-media-button"
        href="mailto:iulia.mihet@gmail.com"
        target="_blank"
        icon
      >
        <font-awesome-icon
          class="social-media-icon"
          icon="envelope"
        />
      </v-btn>
      <v-btn
        class="social-media-button"
        href="https://www.linkedin.com/in/iuliamihet/"
        target="_blank"
        icon
      >
        <font-awesome-icon
          class="social-media-icon"
          :icon="['fab', 'linkedin']"
        />
      </v-btn>
      <v-btn
        class="social-media-button"
        href="https://github.com/juliageek"
        target="_blank"
        icon
      >
        <font-awesome-icon
          class="social-media-icon"
          :icon="['fab', 'github']"
        />
      </v-btn>
      <v-btn
        class="social-media-button"
        href="https://twitter.com/juli4geek"
        target="_blank"
        icon
      >
        <font-awesome-icon
          class="social-media-icon"
          :icon="['fab', 'twitter']"
        />
      </v-btn>
    </div>
</template>

<style scoped lang="scss">
  .buttons-container {
      display: flex;
      align-items: center;
  }

  .social-media-button {
    margin-right: 15px;
  }

  .social-media-icon {
    font-size: 2em !important;
    color: $white;
  }

  .social-media-icon:hover {
    color: $yellow !important;
  }

  @media screen and (max-width: 1260px) {
    .social-media-icon {
      font-size: 1.5em !important;
    }
  }
</style>

<script>
    export default {
      name: 'SocialMediaButtons',
      data: () => ({})
  };
</script>