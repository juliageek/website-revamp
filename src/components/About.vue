<template>
    <v-container
        class="general py-2"
        fill-height
        fluid
        >
        <v-row>
            <General class="desktop-section"></General>
            <GeneralMobile class="mobile-section"></GeneralMobile>
        </v-row>
    </v-container>
</template>

<style scoped lang="scss">
    .general {
        background-color: $black;
        color: $white;
    }

    .desktop-section {
        display: block;
    }

    .mobile-section {
        display: none;
    }

    .tabs-container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 200px;
        position: absolute;
        top: 64px;
    }

    .about-tab {
        font-size: 6.5em;
        font-family: 'Abril Fatface';
        text-transform: capitalize;
        text-align: center;
        text-decoration: none;
        letter-spacing: 1px;
        color: $black;
    }

    .active {
        color: $white;
        outline: none;
    }

    .v-application .primary--text {
        color: $white !important;
    }

    .text-container {
        font-size: 2em;
    }

    .staggered-fade {
        display: flex;
        flex-direction: row;
    }

    .list-item {
        font-size: 2em;
        display: inline-block;
        margin-right: 1em;
    }

    @media screen and (max-width: 768px) {
         .desktop-section {
            display: none !important;
        }

        .mobile-section {
            display: flex;
        }

        .container {
            align-items: flex-start;
        }
    }
</style>

<script>
    import General from './General';
    import GeneralMobile from './GeneralMobile';

    export default {
        name: 'About',
        components: { General, GeneralMobile },
        data: () => ({})
    }
</script>

