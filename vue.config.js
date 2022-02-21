const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // the next params are for SCSS global variables
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/scss/_variables.scss";
        `
      }
    }
  },
  publicPath:''
})
