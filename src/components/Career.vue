<template>
    <v-container fluid fill-height class="career-container py-0" id="career">
        <v-row class="years-row">
            <v-col
                class="years-nav d-flex col-xl-2 col-md-3 col-xs-12 flex-md-column flex-sm-row years-container justify-md-space-between justify-sm-space-around align-sm-center py-md-0 pr-md-0 pl-md-0"
            >
                <router-link
                    v-for="year in years"
                    :key="year"
                    class="display-text year"
                    :class=" { active: year === selectedYear }"
                    :to="`/career/${year}`"
            >
                {{year}}
                </router-link>
            </v-col>
            <v-col class="year-content col-xl-10 col-md-9 col-sm-12 col-xs-12 py-0 pr-0 d-flex pl-0 justify-sm-start">
                <router-view :year="selectedYear"></router-view>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped lang="scss">
    .row {
        height: 100%;
        background-color: lighten($yellow, 5%);
    }
    .career-container {
        background-color: $yellow;
    }
    .year {
        font-size: 2em;
        color: $light-grey;
        text-decoration: none;

        &:hover, &.active {
            font-size: 3.5em;
            cursor: pointer;
            color: $light-red;
        }

        &.active {
            color: $black;
        }
    }
    .years-row {
        font-size: 2em;
    }

    @media screen and (max-width: 1170px) {
        .year {
            font-size: 1.8em;
            color: $light-grey;
            text-decoration: none;

            &:hover, &.active {
                font-size: 3em;
            }
        }
    }

    @media screen and (max-width: 960px) {
        .years-nav {
            height: 200px;
        }

        .year-content {
            height: 100%;
        }

        .year {
            font-size: 1.6em;

            &:hover, &.active {
                font-size: 2.8em;
            }
        }
    }

    @media screen and (max-width: 768px) {
        .years-nav {
            height: 160px;
        }

        .year {
            font-size: 1.4em;

            &:hover, &.active {
                font-size: 2.5em;
                cursor: pointer;
                color: $black;
            }
        }
    }

    @media screen and (max-width: 600px) {
        .years-row {
            display: flex;
            flex-direction: column;
        }

        .years-nav {
            max-height: 15%;
            display: flex;
            align-items: center;
            justify-content: space-around;
        }

        .year-content {
            height: 90%;
        }

        .year {
            font-size: 1em;

            &:hover, &.active {
                font-size: 1.8em;
                cursor: pointer;
                color: $black;
            }
        }
    }

    @media screen and (max-width: 400px) {
        .year {
            font-size: 0.6em;

            &:hover, &.active {
                font-size: 1.2em;
                cursor: pointer;
                color: $black;
            }
        }
    }
</style>

<script>
  import career from '../assets/data/career.json'
  export default {
      name: 'Career',
      data: () => ({
          years: undefined,
          careerInfo: career,
          selectedYear: undefined
      }),
      watch: {
        $route (to, from){
            if(to.params.year !== from.params.year) {
                this.selectedYear = this.$route.params.year;
            }
        }
      },
      created() {
          this.years = Object.keys(this.careerInfo).reverse();
          this.selectedYear = this.$route.params.year;
      }
  };
</script>