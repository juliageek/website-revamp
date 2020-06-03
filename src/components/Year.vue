<template>
    <v-container fluid fill-height class="year-container align-lg-center align-sm-start">
        <v-row class="text d-flex flex-column">
            <div v-for="(job, i) in careerInfo[year]" :key="i">
                <div class="desktop-job">
                    <Job :job="job"></Job>
                </div>
                <div class="mobile-job">
                    <v-expansion-panels flat multiple>
                        <JobMobile :job="job" :panel="panel" :index="i"></JobMobile>
                    </v-expansion-panels>
                </div>
            </div>
        </v-row>
    </v-container>
</template>

<style scoped lang="scss">
    .year-container {
        background-color: lighten($yellow, 8%);
        padding: 0 100px;
    }

    .desktop-job {
        display: block;
    }

    .mobile-job {
        display: none;
    }

    @media screen and (max-width: 960px) {
        .year-container {
            padding: 0 40px;
        }
    }

    @media screen and (max-width: 600px) {
        .desktop-job {
            display: none;
        }

        .mobile-job {
            display: block;
        }


        .year-container {
            display: flex;
            align-items: flex-start;
            padding: 0 10px;
        }
    }
</style>

<script>
  import json from '../assets/data/career.json';
  import Job from './Job';
  import JobMobile from './JobMobile';

  export default {
      name: 'Year',
      components: { Job, JobMobile },
      props: {
        year: {
            type: String,
            required: true
        },
      },
      data: () => ({
        careerInfo: json,
        panel: [0]
      })
  };
</script>