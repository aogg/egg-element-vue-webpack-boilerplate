<template>
  <admin-layout>
    <router-view></router-view>
  </admin-layout>
</template>

<script type="text/babel">
// 实现 app/web/framework/element_admin/main.js
import Vue from "vue";
import { sync } from "vuex-router-sync";
import ElementUI from 'element-ui';
import Cookies from 'js-cookie';

import store from "@/store";
import router from "@/router";

// 公共css
import 'normalize.css/normalize.css'; // A modern alternative to CSS resets
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss'; // global css

// import createI18n from 'framework/i18n';
// import VueI18n from 'vue-i18n';
// Vue.use(VueI18n);
sync(store, router);

import i18n from '@/lang'; // Internationalization
import '@/icons'; // icon
import '@/errorLog'; // error log
import '@/permission'; // permission control
import '@/mock'; // simulation data

import * as filters from '@/filters' // global filters


Vue.use(ElementUI, {
    size: Cookies.get('size') || 'medium', // set element-ui default size
    i18n: (key, value) => i18n.t(key, value)
});

// register global utility filters.
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false;

export default {
  router,
  store,
  // i18n: createI18n(),
  computed: {},
  mounted() {}
};
</script>
