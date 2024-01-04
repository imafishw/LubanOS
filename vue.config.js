const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
// module.exports = {
//   devServer: {
//     proxy: {
//       '/robotData': {
//         target: 'http://192.168.0.100:8088/robotData/', // 后端接口
//         changeOrigin: true // 是否跨域
//         // pathRewrite: {
//         //   '^/robotData': ''
//         // }
//       }
//     }
//   }
