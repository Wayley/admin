import Vue from 'vue';
import VueI18n from 'vue-i18n';
import ViewUI from 'view-design';

import zhCnLocale from 'view-design/dist/locale/en-US';
import enUsLocale from 'view-design/dist/locale/zh-CN';
import zhTwLocale from 'view-design/dist/locale/zh-TW';

import customZhCn from './lang/zh-CN';
import customZhTw from './lang/zh-TW';
import customEnUs from './lang/en-US';

Vue.use(VueI18n);
Vue.use(ViewUI);

// 自动根据浏览器系统语言设置语言
const navLang = navigator.language;

const localLang = navLang === 'zh-CN' || navLang === 'en-US' ? navLang : false;
let lang = localLang || 'zh-CN';

Vue.config.lang = lang;
// vue-i18n 6.x+写法
Vue.locale = () => {};
const messages = {
  'zh-CN': Object.assign(zhCnLocale, customZhCn),
  'zh-TW': Object.assign(zhTwLocale, customZhTw),
  'en-US': Object.assign(enUsLocale, customEnUs)
};
const i18n = new VueI18n({
  locale: lang,
  messages
});

export default i18n;

// vue-i18n 6.x+写法

// import Vue from 'vue';
// import VueI18n from 'vue-i18n';

// import en from 'view-design/dist/locale/en-US';
// import zh from 'view-design/dist/locale/zh-CN';

// Vue.use(VueI18n);

// Vue.config.lang = 'en-US';
// Vue.locale('en-US', en);
// Vue.locale('zh-CN', zh);
