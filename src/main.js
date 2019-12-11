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

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
