<template>
     <v-expansion-panels
      v-model="panel"
      multiple
      flat
      dark
    >
      <v-expansion-panel>
        <v-expansion-panel-header
          class="section-header display-text">
          About me
          <template v-slot:actions>
             <font-awesome-icon
                class="expansion-icon"
                icon="caret-down"
             />
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="about-sentence">
              I'm a self taught software developer from Romania, currently living in <div class="accent-text accent-text--red">Amsterdam</div>. I have extensive experience with building front-end applications that are both good looking and functional,
              with a focus on <div class="accent-text accent-text--red">data visualizations</div> and dashboards.
          </div>
           <div class="about-sentence">
               I'm passionate about a lot of areas of programming and technology, from UI/UX design to Machine Learning.
               In another life, I was a financial analyst and that's where my passion for numbers and charts comes from. What I care about the most in my career is having a <div class="accent-text accent-text--red">positive impact in the world.</div>
               I think the era when companies would only pursue profits is behind us.
           </div>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header
            class="section-header display-text">
            When I'm not coding...
            <template v-slot:actions>
             <font-awesome-icon
                class="expansion-icon"
                icon="caret-down"
             />
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="about-sentence">
              <div class="accent-text accent-text--red">I'm exercising.</div>
              I love running, especially through the mountains. I come from a country with lots of mountains, so it's easy to find some nice trails to run. I generally like being outdoors, even if only for a hike or a long walk.
          </div>
          <div class="about-sentence">
              <div class="accent-text accent-text--red">...baking</div>
              Who doesn't love a good cake? I'm not eating them, because I don't like sweets, but I enjoy making them and sharing the results with friends and colleagues alike.
          </div>
          <div class="about-sentence">
              <div class="accent-text accent-text--red">...or reading</div>
              I like reading all sorts of books, from fiction to non-fiction. I'm a slow reader, because books are like a good wine: you have to take the time to enjoy them.
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
</template>

<style scoped lang="scss">
    .section-header {
        font-size: 3em;
        letter-spacing: 3px;
        font-weight: 100;
    }

    .about-sentence {
        font-size: 1.5em;
        line-height: 2em;
        padding: 10px 0;
    }

    .v-expansion-panel-header--active {
        .expansion-icon {
            transform: rotate(180deg) !important;
        }
    }

    @media screen and (max-width: 640px) {
        .section-header {
            font-size: 2.7em;
        }

         .about-sentence {
             font-size: 1.3em;
             line-height: 1.8em;
        }

        .accent-text {
            font-size: 0.8em;
        }

        .expansion-icon {
            width: 15px;
        }
    }

    @media screen and (max-width: 500px) {
        .section-header {
            font-size: 1.8em;
        }

         .about-sentence {
             font-size: 1em;
             line-height: 1.6em;
        }

        .accent-text {
            font-size: 0.7em;
        }

        .accent-text {
            font-size: 0.8em;
        }
    }
</style>

<script>
  export default {
    name: 'GeneralMobile',
    data: () => ({
        panel: [0]
    })
  };
</script>