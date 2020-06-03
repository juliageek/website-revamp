<template>
    <v-row class="d-flex text-container justify-start flex-row" :align="'center'">
        <v-row class="pt-5">
            <v-col class="col-12 general-text">
                <div class="about-sentence">I'm a self taught software developer from Romania, currently living in
                    <div class="accent-text accent-text--red">Amsterdam</div>
                </div>
                <div class="about-sentence">I have extensive experience with building front-end applications that are both good looking and functional, with a focus on
                    <div class="accent-text accent-text--red">
                        data visualizations
                    </div>
                    and dashboards.
                </div>
                <div class="about-sentence">I'm passionate about a lot of areas of programming and technology, from UI/UX design to Machine Learning.</div>
                <div class="about-sentence">In another life, I was a financial analyst and that's where my passion for numbers and charts comes from.</div>
                <div class="about-sentence">What I care about the most in my career is having a
                    <div class="accent-text accent-text--red">positive impact in the world</div>.
                    I think the era when companies would only pursue profits is behind us.
                </div>
            </v-col>
        </v-row>
        <v-row class="pt-5">
            <v-col class="col-12 general-text">
                <div class="display-text subsection-title">When I'm not coding...</div>
                <div class="about-sentence">
                    <div class="accent-text accent-text--red">I'm exercising</div> I love running, especially through the mountains.
                    I come from a country with lots of mountains, so it's easy to find some nice trails to run. I generally like being outdoors, even if only for a hike or a long walk.</div>
                <div class="about-sentence">
                    <div class="accent-text accent-text--red">...baking</div>
                    Who doesn't love a good cake? I'm not eating them, because I don't like sweets, but I enjoy making them and sharing the results with friends and colleagues alike.
                </div>
                <div class="about-sentence">
                    <div class="accent-text accent-text--red">
                        ...or reading
                    </div>
                    I like reading all sorts of books, from fiction to non-fiction. I'm a slow reader, because books are like a good wine: you have to take the time to enjoy them.
                </div>
            </v-col>
        </v-row>
    </v-row>
</template>

<style scoped lang="scss">
    .text-container {
        padding: 50px 250px;
    }

    .accent-text {
        font-size: 0.9em;
    }

    .about-sentence {
        font-size: 0.8em;
        padding: 10px 0;
    }

    .subsection-title {
        font-size: 1.2em;
        padding-top: 30px;
    }

    @media screen and (max-width: 1668px) {
        .text-container {
            padding: 50px 150px;
        }
        .greeting-text {
            font-size: 4em;
            margin: 15px;
        }
    }

    @media screen and (max-width: 1024px) {
        .text-container {
            margin-top: -75px;
        }
    }


    @media screen and (max-width: 1170px) {
        .text-container {
            padding: 0 75px;
        }

        .subsection-title {
            font-size: 1em;
            padding-top: 10px;
        }

        .about-sentence {
            font-size: 0.7em;
        }
    }

     @media screen and (max-width: 768px) {
         .text-container {
            padding: 0 50px;
        }

        .about-sentence {
            font-size: 0.6em;
        }
    }

    @media screen and (max-width: 640px) {
         .text-container {
            padding: 0 25px;
        }
    }
</style>

<script>
  export default {
    name: 'General',
    data: () => ({})
};
</script>


