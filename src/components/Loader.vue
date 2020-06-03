<template>
    <v-container
        class="loader-container"
        fill-height
        fluid
        >
        <v-row class="d-flex justify-center align-center">
            <v-col class="col-2">
                <v-img src="../assets/images/preload_indicator.gif" contain height="100"></v-img>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped lang="scss">
    .loader-container {
        background-color: lighten($yellow, 5%);
    }
</style>

<script>
    export default {
        name: 'Loader',
        data: () => ({})
    }
</script>