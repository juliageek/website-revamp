<template>
    <v-container
        class="intro"
        fill-height
        fluid
    >
        <v-row class="d-flex flex-column text-container align-start justify-start">
            <v-col class="col-lg-10 col-md-11 col-sm-12 text-column">
                <transition
                    appear
                    appear-to-class="custom-appear-to-class">
                        <h1 class="accent-text accent-text--red greeting-text">Hello there!</h1>
                </transition>
                <h2 class="welcome-text">Welcome to my website.</h2><br>
                <h3 class="name-text">My name is Julia, and I am a <br><div class="role-title display-text"></div></h3>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped lang="scss">
    .intro {
        background: lighten($yellow, 5%);
        overflow: hidden;
    }

    .text-column {
        padding: 5px !important;
    }

    .greeting-text {
        padding: 75px 35px;
        line-height: 2px;
        margin-bottom: 30px;
        font-size: 6em;
    }

    .text-container {
        margin-left: 100px;
    }

    .welcome-text {
        font-size: 2em;
    }

    .name-text {
        font-size: 1.5em;
    }

    .tiny-laptop {
        margin-top: 30px;
    }

    h2, h3 {
        font-family: "Open Sans", sans-serif;
        font-weight: 200;
        color: $black;
    }

    .role-title {
        font-size: 4.5em;
        letter-spacing: 1.5px;
        color: $black;
    }

    .role-title:before {
        content: 'data geek';
        animation: animate infinite 8s;
    }

    .custom-appear-to-class {
        animation: slide-in-right 1s;
    }

    .custom-appear-to-class-two {
        animation: slide-in-left 1s;
    }

    .custom-appear-to-class-three {
        animation: slide-down 1s;
    }

    .custom-appear-to-class-four {
        animation: appear-in-place 1s;
    }


    @keyframes slide-in-right {
        0% {
          opacity: 0;
          margin-left: -500px;
        }
        100% {
          opacity: 1;
          margin-left: 0;
        }
    }

    @keyframes slide-in-left {
        0% {
          opacity: 0;
          margin-left: -500px;
        }
        100% {
          opacity: 1;
          margin-left: 0;
        }
    }

    @keyframes appear-in-place {
        0% {
          opacity: 0;
          font-weight: 100;
        }
        100% {
          opacity: 1;
            color: white;
            font-weight: 400;
        }
    }

    @keyframes animate {
        0% {
            content: 'Data Geek';
        }
        33% {
            content: 'Web Developer';
        }
        66% {
            content: 'Pythonista';
        }
        99% {
            content: 'ML hobbyist';
        }
    }

    @media screen and (max-width: 1668px) {
        .text-container {
            margin-left: 150px;
            margin-right: 150px;
        }
        .greeting-text {
            font-size: 5.5em;
        }

        .role-title {
            font-size: 4em;
        }
    }

    @media screen and (max-width: 1170px) {
        .text-container {
            margin-left: 50px;
            margin-right: 50px;
            margin-top: -50px;
        }

        .greeting-text {
            font-size: 4.5em;
            padding: 45px 15px;
        }

        .role-title {
            font-size: 3em;
        }
    }

    @media screen and (max-width: 768px) {
        .text-container {
            margin-left: 15px;
            margin-right: 15px;
            margin-top: -25px;
        }

        .greeting-text {
            font-size: 3.5em;
        }

        .role-title {
            font-size: 2em;
        }

        .welcome-text {
            font-size: 1.6em;
        }

        .name-text {
            font-size: 1.1em;
        }

        .name-text {
            font-size: 1.4em;
        }
    }

    @media screen and (max-width: 500px) {
        .text-container {
            margin-left: 8px;
            margin-right: 8px;
        }

        .greeting-text {
            font-size: 2.5em;
            padding: 35px 8px;
        }

        .role-title {
            font-size: 2em;
        }
    }

    @media screen and (max-width: 400px) {
        .text-container {
            margin-left: 5px;
            margin-right: 5px;
            margin-top: -100px;
        }

        .greeting-text {
            font-size: 2.5em;
        }

        .welcome-text {
            font-size: 1.3em;
        }

        .name-text {
            font-size: 1em;
        }

        .role-title {
            margin-top: 10px;
            font-size: 2em;
        }
    }

    @media screen and (max-width: 350px) {
        .text-container {
            margin-left: 5px;
            margin-right: 5px;
            margin-top: -100px;
        }

        .greeting-text {
            font-size: 2.2em;
            padding: 25px 8px;
        }

        .welcome-text {
            font-size: 1em;
        }

        .name-text {
            font-size: 0.8em;
        }

        .role-title {
            margin-top: 10px;
            font-size: 2em;
        }
    }

</style>

<script>
  export default {
      name: 'Intro',
      data: () => ({})
  };
</script>