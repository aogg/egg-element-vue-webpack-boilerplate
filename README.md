# egg-element-vue-webpack-boilerplate

基于egg-vue-webpack-boilerplate和vue-element-admin原生结合的骨架

## 基础架构： 
- egg-vue-webpack-boilerplate
- vue-element-admin



## 目录映射： 

| vue-element-admin | egg-vue-webpack-boilerplate | 备注 |
| --- | --- | --- |
| src/ | app/web/framework/element_admin | 全部复制过去 |
| static/tinymce4.7.5 | app/web/asset/public/tinymce4.7.5 | public是公开目录 |
| src/lang/en.js | app/web/framework/i18n/en.js | 合并两项目的语言包 |
| src/lang/zh.js | app/web/framework/i18n/cn.js | vue-element-admin的zh全部改名为cn |
| src/App.vue |  | 直接删掉 |
| src/main.js | app/web/page/admin/admin.vue | 合并到app/web/page/admin/admin.vue |
| index.html | app/web/view/layout.html | 使用原有egg-vue-webpack-boilerplate的 |


## 合并调整
> 1、增加admin模块，通过/admin访问后台页面（通过客户端渲染）  
> 2、app/web/view/layout.html可以被config/config.default.js传参
> 3、vue-element-admin修改i18n里的zh为cn，保持和egg-vue-webpack-boilerplate骨架的统一



