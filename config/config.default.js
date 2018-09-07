const path = require('path');
const fs = require('fs');
module.exports = app => {
  const exports = {};

  exports.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico'))
  };

  exports.view = {
    cache: false
  };

  exports.vuessr = {
    layout: path.join(app.baseDir, 'app/web/view/layout.html'),
    renderOptions: {
      basedir: path.join(app.baseDir, 'app/view'),
    }
  };

  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.baseDir, 'logs')
  };

  exports.static = { // 可以公开访问的目录
    prefix: '/public/',
    dir: [ // 按顺序优先级加载
      path.join(app.baseDir, 'app/web/asset/public'),
      path.join(app.baseDir, 'public'),
    ]
  };

  exports.keys = '123456';

  exports.middleware = [
    'locals',
    'access'
  ];

  exports.locals = { // app/web/view/layout.html文件（vue模板文件）的参数
    layoutOptions: {
      title: 'egg-element-vue-webpack-boilerplate',
      keywords: 'egg, vue, webpack, element, boilerplate, server side render',
      description: 'egg-element-vue-webpack-boilerplate description',
      css: [
        { href: 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css' },
      ],
      js: [
        { src: '/public/tinymce4.7.5/tinymce.min.js' },
      ],
    },
  };

  return exports;
};
