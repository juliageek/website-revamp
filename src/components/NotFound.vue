<template>
    <v-container fill-height fluid class="error-container">
        <v-row class="d-flex flex-column" :align="'center'">
            <v-img src="../assets/images/confused.gif" :width="600" fill></v-img>
            <br>
            <div class="error-text accent-text accent-text--red">Error 404</div>
            <div class="congrats-text">
                Congratulations! You reached the end of this website.
            </div>
        </v-row>
    </v-container>
</template>

<style scoped lang="scss">
    .error-container {
        background-color: $light-magenta;
    }
    .error-text {
        font-size: 3em;
        margin: 20px;
    }
    .accent-text {
        margin: 20px;
    }
    .congrats-text {
        font-size: 2em;
    }
</style>

<script>
  export default {
      name: 'NotFound',
      data: () => ({})
  };
</script>