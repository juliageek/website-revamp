<template>
     <v-expansion-panel flat v-model="panel">
        <v-expansion-panel-header class="job-header">
            <div>
                <div class="job-title display-text">{{ job.title }}, {{ job.company }}</div>
                <div class="accent-text accent-text--red"> {{ job.period }}</div>
            </div>
              <template v-slot:actions>
                 <font-awesome-icon
                    class="expansion-icon"
                    icon="caret-down"
                 />
              </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="job-details">
            <div class="job-description">{{ job.description }}</div>
            <ul class="tasks-list" v-if="job.taskList">
                <li class="task" v-for="(task, i) in job.taskList" :key="i">{{ task }}</li>
            </ul>
        </v-expansion-panel-content>
     </v-expansion-panel>
</template>

<style scoped lang="scss">
    .job-container {
        width: 100%;
        padding: 0;
    }

    .job-header {
        padding: 10px 16px;
        line-height: 1.4;
    }

    .job-title {
        font-size: 1.5em;
        margin-bottom: 10px;
    }

    .job-header, .job-details {
        background-color: lighten($yellow, 8%);;
    }

    .job-description, .tasks-list {
        font-size: 0.5em;
    }
</style>

<script>
  export default {
      name: 'JobMobile',
      props: {
        job: {
            type: Object,
            required: true
        },
        panel: {
          type: Array,
          required: true
        },
        index: {
          type: Number,
          required: true
        }
      },
      data: () => ({
        show: false,
      }),
      created() {
          this.show = this.index === this.panel[0];
      }
  };
</script>