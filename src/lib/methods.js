import lodash from 'lodash';

// 公共方法
let methods = {
  /**
   * [getTreeParents 获取树形结构的所有父级]
   * @param  {[Array]} tree [树形结构]
   * @param  {[Number,String]} value [取值条件的value值]
   * @param  {[String]} key   [取值条件所满足的key值]
   * @return {[Array]}      [满足条件的父级数据]
   */
  getTreeParents(tree, value, key) {
    for (let i in tree) {
      const item = tree[i];
      if (item[key] == value) {
        return [item];
      }
      if (item.children) {
        // bind apply call
        var res = this.getTreeParents.apply(this, [item.children, value, key]);
        // var res = this.getTreeParents.call(this, item.children, value, key);
        if (res !== undefined) {
          return res.concat(item);
        }
      }
    }
  }
};

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
