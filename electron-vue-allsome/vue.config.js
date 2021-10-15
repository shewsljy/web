const path = require('path');

function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: './',
  devServer: {
    // can be overwritten by process.env.HOST
    host: '0.0.0.0',  
    port: 8010
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('src', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('router', resolve('src/router'))
      .set('store', resolve('src/store'))
      .set('views', resolve('src/views'));
  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,  // 渲染进程可以使用node模块
      builderOptions: {
        win: {
          icon: "./public/app.ico"
        },
        mac: {
          icon: "./public/app.png"
        },
        productName: "Allsome"
      }
    }
  }

};