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
  },
  /**
   * [filterValue 获取keyArray包含属性的对象]
   * @param  {[String]} routerName [路由名称]
   * @param  {[Array]} menu [菜单列表]
   * @param  {[Array]} routers  [路由配置列表]
   * @return {[Array]}          [路由面包屑]
   */
  getCrumbList(routerName, menu, routers) {
    let parents = this.getTreeParents(menu, routerName, 'path'); // 默认使用path
    const crumbList = lodash
      .map(parents, item => {
        const { name, id, icon, path } = item;
        const f = lodash.find(routers, o => {
          return o.name == path;
        });
        const to = f && f.path ? f.path : null;
        return {
          name,
          id,
          icon,
          to
        };
      })
      .reverse();
    return crumbList;
  },

  /**
   * [filterValue 获取keyArray包含属性的对象]
   * @param  {[Object]} objData [原对象]
   * @param  {[Array]} keyArray  [所需属性]
   * @return {[Object]}          [新对象]
   */
  filterValue(objData, keyArray) {
    let obj = {};
    lodash.forEach(objData, (value, key) => {
      if (lodash.indexOf(keyArray, key) > -1) {
        obj[key] = value;
      }
    });
    return obj;
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
