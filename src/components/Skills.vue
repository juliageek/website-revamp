<template>
    <v-container fluid fill-height class="skills-container">
        <Loader v-if="isLoading"></Loader>
        <v-row v-if="!isLoading" class="d-flex skills align-md-center justify-md-center align-sm-start">
            <v-col class="col-xs-12 col-sm-11 col-md-10 col-lg-9 col-xl-8">
                <transition-group
                    appear
                    appear-class="custom-appear-class"
                    tag="span"
                    v-bind:css="false"
                    v-on:before-appear="customBeforeAppearHook"
                    v-on:appear="customAppearHook"
                >
                    <span
                        v-for="(skill, i) in skills"
                        :key="i"
                        :data-index="i"
                        class="skill display-text"
                        :class="{ 'proficient': skill.progress > 0.5 }"
                        :style="{ fontSize: `${skill.fontSize}em` }"
                    >
                    {{ skill.name }}
                </span>
                </transition-group>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped lang="scss">
    .skills-container {
        background-color: $white;
    }
    .skills {
        margin-top: -1em;
    }
    .text {
        font-size: 2em;
    }

    @media screen and (max-width: 1024px) {
         .skills {
            margin-top: -50px;
        }
    }

    @media screen and (max-width: 640px) {
         .skills {
            margin-top: -25px;
        }
    }
</style>

<script>
  import skills from '../assets/data/skills.json'
  import Velocity from "velocity-animate";
  import Loader from './Loader';

  export default {
      name: 'Skills',
      components: { Loader },
      data: () => ({
          skills: [],
          isLoading: true
      }),
      created() {
          const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
          let multiplierFactor = 9;
          if (vw < 1264 && vw >= 960) {
              multiplierFactor = 8;
          } else if (vw < 960 && vw >= 768) {
              multiplierFactor = 7;
          } else if (vw < 768 && vw >= 600) {
              multiplierFactor = 5;
          } else if (vw < 600) {
              multiplierFactor = 4;
          }
          Object.keys(skills).forEach((key) => {
              skills[key].forEach((skill) => {
                  this.skills.push({
                      name: skill.name,
                      fontSize: multiplierFactor * skill.progress
                  })
              })
          });
          this.isLoading = false;
      },
      methods: {
        customBeforeAppearHook: function (el) {
          el.style.opacity = 0;
          el.style.marginLeft = (el.dataset.index + 1) * 100;
        },
        customAppearHook: function (el, done) {
          const delay = el.dataset.index * 130;
          const marginLeft = (el.dataset.index + 1) * -400;
          setTimeout(function () {
            Velocity(
              el,
              { opacity: 1, transition: 'transform 1s 2s', transform: `translateX(${marginLeft})` },
              { complete: done }
            )
          }, delay)
        }
      }
  };
</script>