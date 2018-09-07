import Vue from 'vue';

// 还不能动态修改使用哪个
import Layout from 'component/layout/admin'; // 这里决定了哪个模板

Vue.component(Layout.name, Layout);
