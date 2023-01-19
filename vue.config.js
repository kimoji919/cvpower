const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // publicPath: './',
  // devServer: {
  //   proxy: {
  //       '/api': {
  //           target: 'http://124.220.209.244:8004',//后端接口地址
  //           changeOrigin: true,//是否允许跨越
  //           pathRewrite: {
  //               '^/api': '/api'//重写,
  //           }
  //       }
  //   }
// }
})

