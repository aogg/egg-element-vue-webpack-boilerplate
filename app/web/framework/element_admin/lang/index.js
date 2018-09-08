import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Cookies from 'js-cookie';
import elementEnLocale from 'element-ui/lib/locale/lang/en'; // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN';// element-ui lang
import enLocale from 'framework/i18n/en';
import zhLocale from 'framework/i18n/cn';

Vue.use(VueI18n);

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  cn: {
    ...zhLocale,
    ...elementZhLocale
  }
};

const i18n = new VueI18n({
  // set locale
  // options: en or cn
  locale: Cookies.get('language') || 'cn',
  fallbackLocale: 'cn', // 默认语言
  // set locale messages
  messages
});

export default i18n;
