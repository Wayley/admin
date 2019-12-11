module.exports = {
  publicPath: '',
  outputDir: 'dist',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    port: 8080,
    // proxy: 'http://localhost:3000',
    overlay: {
      warnings: false,
      errors: true
    }
  }
};
