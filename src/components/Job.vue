<template>
    <v-container class="job-container">
         <v-row class="job d-flex flex-column justify-start" :align="'start'">
             <div>
                 <h2 class="job-title display-text">{{ job.title }}, {{ job.company }}</h2>
                 <h3 class="job-period accent-text accent-text--red">{{ job.period }}</h3>
             </div>
             <p class="job-description">{{ job.description }}</p>
             <ul class="tasks-list" v-if="job.taskList">
                 <li class="task" v-for="(task, i) in job.taskList" :key="i">{{ task }}</li>
             </ul>
        </v-row>
    </v-container>
</template>

<style scoped lang="scss">
    .job-container {
        padding: 25px 0;
    }

    .job-description {
        font-size: 0.7em;
        padding: 15px 0 5px 0;
    }

    .job-period {
        font-size: 0.85em;
    }

    li {
        font-size: 0.7em;
    }

    @media screen and (max-width: 1264px) {
        .job-container {
            padding: 25px 10px;
        }

        .job-title {
            font-size: 1.1em;
        }

        .job-period {
            font-size: 0.8em;
        }
    }

    @media screen and (max-width: 640px) {
        .job-container {
            padding: 15px 10px;
        }
    }

    @media screen and (max-width: 400px) {
        .job-container {
            padding: 15px 10px;
        }

        .job-title {
            font-size: 0.8em;
        }

        .job-period {
            font-size: 0.5em;
        }

        .job-description, .task {
            font-size: 0.4em;
        }
    }
</style>

<script>
  export default {
      name: 'Job',
      props: {
        job: {
            type: Object,
            required: true
        },
      }
  };
</script>