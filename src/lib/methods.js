import lodash from 'lodash';

// 公共方法
let methods = {};

lodash.assignIn(methods, lodash);

function install(Vue) {
  if (install.installed) {
    return;
  }
  install.installed = true;
  Object.defineProperty(Vue.prototype, '$lodash', {
    get: function get() {
      return methods;
    }
  });
}

let inBrowser = typeof window !== 'undefined';
methods.install = install;

if (inBrowser && window.Vue) {
  window.Vue.use(methods);
}

export default methods;
