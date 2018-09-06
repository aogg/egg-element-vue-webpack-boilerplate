'use strict';
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  egg: true,
  framework: 'vue',
  // type: 'client', // 客户端渲染
  // 项目大时开启
  // compile: {
  //   thread: true,
  //   cache: true
  // },
  entry: {
    include: ['app/web/page'],
    exclude: ['app/web/page/[a-z]+/(component|store)', 'app/web/page/elementjs'],
    loader: {
      client: 'app/web/framework/vue/entry/client-loader.js',
      server: 'app/web/framework/vue/entry/server-loader.js',
    }
  },
  alias: {
    server: 'app/web/framework/vue/entry/server.js',
    client: 'app/web/framework/vue/entry/client.js',
    app: 'app/web/framework/vue/app.js',
    asset: 'app/web/asset',
    component: 'app/web/component',
    framework: 'app/web/framework',

    // element原
    '@': resolve('app/web/framework/element_admin'),
    fonts: 'app/web/framework/element_admin/assets/custom-theme/fonts', // 解决vue-element-admin默认加载字体失败
  },
  dll: ['vue', 'axios', 'vue-router', 'vuex', 'vuex-router-sync'],
  loaders: {
    scss: true,
    less: true,
    css: {
      options: {
        // 开启 CSS Modules
        modules: true, // 解决$style不存在问题
      }
    },
    // typescript: true, // 启用 typescript 编译
    tslint: { // 自动修复功能
      options: {
        fix: true
      }
    },
    urlimage: {
      exclude: [resolve('app/web/framework/element_admin/icons')], // 取消覆盖
    },
    svg: {
      test: /\.svg$/,
      use: 'svg-sprite-loader',
      include: [resolve('app/web/framework/element_admin/icons')],
      options: {
        symbolId: 'icon-[name]',
      }
    },
  },
  plugins: {
    imagemini: false,
    serviceworker: true,
    vue: {
      name: new VueLoaderPlugin()
    }
  },
  node: {
    console: true
  },
  optimization: {},
  done() {
    console.log('如果启动成功后, Chrome控制台浏览器脚本报错, 可以尝试执行 npm run clean 清除缓存解决');
  }
};

// 方便看配置是否成功
// const easywebpack = require('easywebpack-js');
// const data = easywebpack.getWebpackConfig(config);
// console.dir(data.module.rules);