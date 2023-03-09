const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 设置开发运行时自动打开浏览器
  devServer: {
    open: true,
    host: 'localhost'
  }
})
