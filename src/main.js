import Vue from 'vue';
import App from './App.vue';

/* ********************** Vue Router ********************** */
import VueRouter from 'vue-router';
import Routers from './route/routers';
Vue.use(VueRouter);

/* ********************** Router Config ********************** */
const RouterConfig = {
  routes: Routers
};
const router = new VueRouter(RouterConfig);

/* ********************** Navigation Guards ********************** */
router.beforeEach((to, from, next) => {
  // TODO:
  // SOME CODE
  next();
});
router.afterEach(to => {
  try {
    // TODO:
    // SOME CODE
  } catch (err) {
    console.log(to, err);
  }
});

/* ********************** View Design UI ********************** */
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import './theme/index.less'; // 加入个性化主题
Vue.use(ViewUI);

/* ********************** Vuex ********************** */
import Vuex from 'vuex';
Vue.use(Vuex);
import store from './store/index';

/* ********************** Vue Cookie ********************** */
var VueCookie = require('vue-cookie');
Vue.use(VueCookie);

/* ********************** Lodash Tools ********************** */
import Lodash from './lib/methods';
Vue.use(Lodash);

/* ********************** Vue I18n ********************** */
import i18n from './locale';

/* ********************** Axios ********************** */
import $apis from './http/index';
Vue.use($apis);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
