module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/scss/global.scss";
          @import "@/scss/colors.scss";
        `
      },
    },
  },
};